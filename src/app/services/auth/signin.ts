import { api } from "../api";
// Model
import { AuthPayloadModel, AuthPayloadResponse } from "./@model";
// Type
import { AuthResponse } from "./@type";

export type SigninParams = {
  email: string;
  password: string;
};

export async function signin(params: SigninParams): Promise<AuthPayloadModel> {
  const { data } = await api.post<AuthResponse<AuthPayloadResponse>>("/auth/signin", params);

  return AuthPayloadModel.fromJson(data.payload);
}
