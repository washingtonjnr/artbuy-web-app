import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/user/@index";

export function useUser(signedIn: boolean) {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ["GET", "user"],
    queryFn: () => userService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  return {
    // DATA
    user: data,
    // to STATE 
    isError, 
    isSuccess,
    isLoading: isPending, 
  }
}