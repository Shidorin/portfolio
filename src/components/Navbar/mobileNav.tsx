import { useEffect, useRef, useState } from "react";
import { links } from "./navLinks";
import anime from "animejs";

interface NavbarProps {
  scrollToRef: (path: string) => void;
}

const MobileNav = ({ scrollToRef }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = burgerRef.current;
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            anime({
              targets: element,
              opacity: 1,
              translateX: ["=50px", "0px"],
              easing: "easeInOutQuad",
              duration: 500,
            });
            observer.unobserve(element);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(element);
    }
  }, [burgerRef, isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleBurger = (path: string) => {
    setIsOpen(false);
    scrollToRef(path);
  };

  const openBurgerTSX = (
    <div className="fixed left-0 top-0 z-10 w-full bg-dark opacity-95">
      <div
        className="flex h-screen flex-col justify-between px-4 py-4 opacity-0"
        ref={burgerRef}
      >
        <div className="flex flex-col items-end justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className=" p-2 text-white"
            aria-label="close"
          >
            CLOSE
          </button>
        </div>
        <div className="flex flex-grow flex-col items-end justify-end">
          {links.map((link) => (
            <button
              key={link.path}
              className="mt-1 block cursor-pointer rounded py-1.5 text-2xl font-medium uppercase text-white hover:text-primaryText"
              onClick={() => handleBurger(link.path)}
              aria-label={link.name}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        className="flex items-center rounded border border-gray-600 px-3 py-2 text-dark hover:border-primaryText hover:text-primaryText"
        onClick={handleToggle}
        aria-label="menu"
      >
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
        </svg>
      </button>

      {isOpen && openBurgerTSX}
    </div>
  );
};

export default MobileNav;
