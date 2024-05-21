import { BrowserRouter, Route, Routes } from "react-router-dom";
// Guard
import { AuthGuard } from "./AuthGuard";
// Layouts
import { AuthLayout } from "../view/layouts/auth";
import { DashboardLayout } from "../view/layouts/dashboard";
// Pages
import { SigninPage } from "../view/pages/Auth/Signin";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SigninPage />} />
          </Route>
        </Route>
        {/* Dashboard */}
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<div>home</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
