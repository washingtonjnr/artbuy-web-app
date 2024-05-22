import { useContext } from "react";
// Context
import { AuthContext } from "../contexts/auth";

export function useAuth() {
  return useContext(AuthContext);
}