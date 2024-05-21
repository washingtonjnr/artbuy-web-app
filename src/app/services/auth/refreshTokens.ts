import { api } from "../api";

export async function refreshTokens(token: string) {
  const { data } = await api.post("/refresh", {}, { 
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return data;
}