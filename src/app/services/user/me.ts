import { api } from "../api";
// Type
import { UserResponse } from "./@type";
// Utils
import { sleep } from "../../utils/sleep";

export async function me() {
  await sleep();

  const { data } = await api.get<UserResponse>("/user/me");

  return data;
}
