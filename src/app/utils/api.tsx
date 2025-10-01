export const API_URL = "https://the-contractor.onrender.com/api";

export function getAuthHeaders(): Record<string, string> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) return { Authorization: `Token ${token}` };
  }
  return {};
}
