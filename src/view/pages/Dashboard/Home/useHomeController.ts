import { useUser } from "../../../../app/hooks/useUser";

export function useHomeController() {
  const  { user } = useUser(true);

  return {
    user
  }
}