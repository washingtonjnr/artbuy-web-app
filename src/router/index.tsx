import { BrowserRouter, Route, Routes } from "react-router-dom";
// AuthGuard
import { AuthGuard } from "./AuthGuard";
// Layout
import { AuthLayout } from "../view/layouts/Auth";
import { DashboardLayout } from "../view/layouts/Dashboard";
// Pages
import { SigninPage } from "../view/pages/Auth/Signin";
import { SignupPage } from "../view/pages/Auth/Signup";
import { HomePage } from "../view/pages/Dashboard/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SigninPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
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
