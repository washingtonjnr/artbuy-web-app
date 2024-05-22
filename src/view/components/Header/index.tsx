import { Logo } from "../Logo";
import { Menu } from "../Menu";

export function Header() {
  return (
    <header className="sticky top-0 left-0 w-full flex justify-between items-center py-3 px-6 shadow-lg bg-gradient-to-t from-primary-400 via-primary-700 to-[#270e25]">
      <Logo className="text-white h-12" />

      <Menu />
    </header>
  );
}
