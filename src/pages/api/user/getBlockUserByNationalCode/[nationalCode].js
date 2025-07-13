import Cookies from "cookies";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { nationalCode } = req.query; // Extract from URL path

  if (!nationalCode) {
    return res.status(400).json({ message: "National code is required" });
  }
  const apiUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/SabteAhval/v1/AdminManagment/BlackList/getBlockUserByNationalCode/${nationalCode}`;

  const cookies = new Cookies(req, res);
  const token = cookies.get("Token");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
