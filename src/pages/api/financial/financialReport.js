import Cookies from "cookies";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  // Extract old and new passwords from request body
  const { nationalCode, dateFrom, dateTo } = req.body;
  console.log({ nationalCode, dateFrom, dateTo });

  if (!nationalCode || !dateFrom || !dateTo) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  // Extract the Authorization token from request headers
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Missing or invalid token" });
  }
  try {
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/v1/Accounting/FinancialReport`;
    const cookies = new Cookies(req, res);
    const token = cookies.get("Token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nationalCode, dateFrom, dateTo }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error changing password:", errorData);
      return res
        .status(response.status)
        .json({ message: "Failed to change password", error: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error during password change:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
