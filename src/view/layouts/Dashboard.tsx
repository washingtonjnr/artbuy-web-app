import { Outlet } from "react-router-dom";
// Component
import { Header } from "../components/Header";

export function DashboardLayout() {
  return (
    <main className="text-gray-700 flex flex-col min-h-[100vh] w-full">
      <Header />

      <section className="flex-1 p-6">
        <Outlet></Outlet>
      </section>
    </main>
  );
}
