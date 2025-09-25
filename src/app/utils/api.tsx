export const API_URL = "http://127.0.0.1:8000/api";

export function getAuthHeaders(): Record<string, string> {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) return { Authorization: `Token ${token}` };
  }
  return {};
}
