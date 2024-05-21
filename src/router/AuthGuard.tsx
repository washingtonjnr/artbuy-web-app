import { Navigate, Outlet } from "react-router-dom";
// Hooks
import { useAuth } from "../app/hooks/useAuth";

export function AuthGuard({ isPrivate }: { isPrivate: boolean }) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/signin" replace />;
  }
  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  } else {
    return <Outlet />;
  }
}
