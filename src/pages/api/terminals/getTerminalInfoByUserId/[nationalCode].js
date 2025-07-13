import Cookies from "cookies";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { nationalCode } = req.query; // Extract from URL path
  console.log(nationalCode);
  const { terminalNo } = req.body;
  if (!nationalCode) {
    return res.status(400).json({ message: "id is required" });
  }
  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/SSM/GetTerminalInfoByUserId/${nationalCode}`;

  const cookies = new Cookies(req, res);
  const token = cookies.get("Token");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ terminalNo }),
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Error fetching user info" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
