export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    // ✅ Fix: Case-insensitive check for sesionId
    const sessionId =
      req.headers["sesionid"] ||
      req.headers["sesionId"] ||
      req.headers["SesionId"];

    if (!sessionId) {
      console.error("❌ Session ID is missing");
      return res.status(401).json({ error: "Session ID is required" });
    }
    const backendUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/USR/api/v1/UserManagement/Users/CreateUser`;

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        sesionId: sessionId, // ✅ Use correct variable
        "Content-Type": "application/json",
        Cookie: req.headers.cookie || "", // ✅ Pass cookies if available
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("❌ Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
