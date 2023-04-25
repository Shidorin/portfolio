import { useEffect, useRef } from "react";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
import { useMediaQuery } from "react-responsive";
import anime from "animejs";

interface NavbarProps {
  scrollToRef: (path: string) => void;
}

export default function Navbar({ scrollToRef }: NavbarProps) {
  const logoRef = useRef<HTMLButtonElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const logoText = isMobile ? "W.P.G" : "Wojciech Pawlicki-Gil";

  useEffect(() => {
    if (logoRef.current) {
      const animateText = anime.timeline({});
      animateText.add({ delay: 500 });
      Array.from(logoRef.current.children).forEach((char, i) => {
        animateText.add({
          targets: char,
          opacity: [0, 1],
          easing: "linear",
          duration: 100,
          delay: i + 1,
        });
      });
    }
  }, [isMobile]);

  return (
    <nav className="notranslate fixed z-50 w-full bg-white shadow">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between lg:h-20">
          <button
            type="button"
            className="text-2xl font-bold "
            onClick={() => scrollToRef("#")}
            ref={logoRef}
          >
            {logoText.split("").map((char, i) => (
              <span key={i} className="text-2xl font-bold opacity-0">
                {char}
              </span>
            ))}
          </button>
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
