import { api } from "../api";
//
import { AuthResponse } from "./@type";

export type SignupParams = {
  name: string;
  email: string;
  password: string;
};

export async function signup(params: SignupParams) {
  const { data } = await api.post<AuthResponse>("/auth/signup", params);

  return data;
}
