import { useContext } from "react";
// Context
import { AuthContext } from "../context/auth";

export function useAuth() {
  return useContext(AuthContext);
}