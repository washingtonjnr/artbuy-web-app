import { Outlet } from "react-router-dom";
//
import { cn } from "../../app/utils/cn";
import { HeaderWave } from "../components/Header/types/HeaderWaves";

export function AuthLayout() {
  return (
    <main className={cn("flex flex-col min-h-[100vh] w-full")}>
      <HeaderWave />

      <section className="flex-1 px-6 py-12">
        <h1 className="text-primary-500 font-bold text-xl">ArtBuy</h1>
        <Outlet></Outlet>
      </section>
    </main>
  );
}
