import { useUser } from "../../../../app/hooks/useUser";

export function useHomeController() {
  const  { user } = useUser(true);

  console.log(user);

  return {
    user
  }
}