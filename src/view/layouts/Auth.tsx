import { Outlet } from "react-router-dom";
//
import { cn } from "../../app/utils/cn";
import { HeaderWave } from "../components/Header/types/HeaderWaves";

export function AuthLayout() {
  const inSignup = window.location.pathname.includes("signup");

  return (
    <main className={cn("text-gray-700 flex flex-col min-h-[100vh] w-full")}>
      <HeaderWave />

      <section className={cn("flex-1 px-6 py-12", inSignup && "py-6")}>
        <h1 className="text-primary-500 font-bold text-xl">ArtBuy</h1>
        <Outlet></Outlet>
      </section>
    </main>
  );
}
