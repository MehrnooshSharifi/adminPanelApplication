import Cookies from "cookies";
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const { id } = req.query; // Get the `id` from the dynamic route
  if (!id) {
    return res.status(400).json({ message: "Missing file ID" });
  }
  try {
    const backendUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL}/USR/api/v1/UserManagement/HelpFile/DownloadHelpFile/${id}`;
    console.log(id);
    const cookies = new Cookies(req, res);
    const token = cookies.get("Token");
    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Failed to download file" });
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename="helpfile.pdf"`);
    res.status(200).send(buffer);
    // res.send(blob);
  } catch (error) {
    console.error("Error fetching help file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
