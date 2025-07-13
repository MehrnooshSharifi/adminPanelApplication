export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  // Extract `nationalCode` from the request URL
  const { nationalCode } = req.query;
  console.log(nationalCode);
  const { captchaCode } = req.body;
  if (!nationalCode || !captchaCode) {
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
    const sessionId = req.headers["sesionid"];
    if (!sessionId) {
      console.error("❌ Session ID is missing");
      return res.status(401).json({ error: "Session ID is required" });
    }
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/USR/api/v1/UserManagement/Users/ResetPassword/${nationalCode}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        sesionId: sessionId,
        "Content-Type": "application/json",
        Cookie: req.headers.cookie || "", // Pass session cookie from client request
      },
      body: JSON.stringify({ captchaCode, nationalCode }),
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
