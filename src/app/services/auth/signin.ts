import { api } from "../api";
//
import { AuthResponse } from "./@type";

export type SigninParams = {
  email: string;
  password: string;
};

export async function signin(params: SigninParams) {
  const { data } = await api.post<AuthResponse>("/auth/signin", params);

  return data;
}
