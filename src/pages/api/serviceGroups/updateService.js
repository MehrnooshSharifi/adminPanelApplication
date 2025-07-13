import Cookies from "cookies";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const {
    serviceName,
    serviceDesc,
    policyauth,
    defaultPrice,
    isActive,
    servicePoint,
    serviceGroupId,
    id,
  } = req.body;
  // Extract the Authorization token from request headers
  console.log("dataaaaaa :", {
    serviceName,
    serviceDesc,
    policyauth,
    defaultPrice,
    isActive,
    servicePoint,
    serviceGroupId,
    id,
  });
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Missing or invalid token" });
  }
  try {
    const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}/USR/api/v1/UserManagement/Service/UpdateService`;
    const cookies = new Cookies(req, res);
    const token = cookies.get("Token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        serviceName,
        serviceDesc,
        policyauth,
        defaultPrice,
        isActive,
        servicePoint,
        serviceGroupId,
        id,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return res
        .status(response.status)
        .json({ message: "Failed", error: errorData });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error during change:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
