// pages/api/user/captcha.js
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const sessionId = req.headers["sesionid"];
  if (!sessionId) {
    console.error("❌ Session ID is missing");
    return res.status(401).json({ error: "Session ID is required" });
  }
  try {
    const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/USR/api/v1/UserManagement/Captcha/Create`;

    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        sesionId: sessionId, // Pass sessionId as required by the backend
        Cookie: req.headers.cookie || "", // Forward client cookies, including .AspNetCore.Session
      },
    });

    // Check the content type
    const contentType = response.headers.get("content-type");

    if (contentType.includes("application/json")) {
      const data = await response.json();
      return res.status(response.status).json(data);
    } else {
      const buffer = await response.arrayBuffer();
      res.setHeader("Content-Type", contentType);
      return res.status(response.status).send(Buffer.from(buffer));
    }
  } catch (error) {
    console.error("Captcha Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
