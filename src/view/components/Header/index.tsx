import { Logo } from "../Logo";
import { Menu } from "../Menu";

export function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white py-2 px-2 rounded-md">
      <Logo className="text-teal-900 h-6" />

      <Menu />
    </header>
  );
}
