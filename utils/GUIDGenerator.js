export function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0; // Random value
    const v = c === "x" ? r : (r & 0x3) | 0x8; // For the '4' version of UUID
    return v.toString(16); // Convert to hexadecimal
  });
}
