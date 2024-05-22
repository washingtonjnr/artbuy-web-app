import { api } from "../api";
import { AuthPayloadModel } from "./@model";
//
import { AuthResponse } from "./@type";

export type SignupParams = {
  cpf: string;
  name: string;
  email: string;
  phone: string;
  password: string;
};

type SignupResponse = {
  access_token: string;
  refresh_token: string;
};

export async function signup(params: SignupParams): Promise<AuthPayloadModel> {
  const { data } = await api.post<AuthResponse<SignupResponse>>("/auth/signup", params);

  return AuthPayloadModel.fromJson(data.payload);
}
