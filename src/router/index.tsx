import { BrowserRouter, Route, Routes } from "react-router-dom";
// Hook
import { AuthLayout } from "../view/layouts/Auth";
import { DashboardLayout } from "../view/layouts/Dashboard";
import { SigninPage } from "../view/pages/Auth/Signin";
import { HomePage } from "../view/pages/Dashboard/Home";
import { AuthGuard } from "./AuthGuard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/signup" element={<SigninPage />}></Route>
          </Route>
        </Route>

        {/* Private routes */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<HomePage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
