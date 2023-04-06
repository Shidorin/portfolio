import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

interface NavbarProps {
  scrollToRef: (path: string) => void;
}

export default function Navbar({ scrollToRef }: NavbarProps) {
  return (
    <nav className="fixed z-50 w-full bg-white shadow">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between lg:h-20">
          <div className="ml-auto mr-4 flex items-center">
            <div className="flex-shrink-0 font-mono"></div>
            <DesktopNav scrollToRef={scrollToRef} />
            <MobileNav scrollToRef={scrollToRef} />
          </div>
        </div>
      </div>
    </nav>
  );
}
