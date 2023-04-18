import { useEffect, useRef } from "react";
import { links } from "./navLinks";
import anime from "animejs";
import LanguageSelector from "../Language/languageSelector";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface NavbarProps {
  scrollToRef: (path: string) => void;
}

const DesktopNav = ({ scrollToRef }: NavbarProps) => {
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const language = useSelector((state: RootState) => state.language);

  useEffect(() => {
    const myElement = desktopNavRef.current;
    if (myElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            anime({
              targets: myElement,
              opacity: 1,
              translateY: ["-50px", "0px"],
              easing: "easeInOutQuad",
              duration: 1000,
              delay: 600,
            });
            observer.unobserve(myElement);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(myElement);
    }
  }, [desktopNavRef]);

  return (
    <div className="hidden opacity-0 md:flex" ref={desktopNavRef}>
      {links.map((link) => (
        <div
          key={link.path}
          className="ml-4 inline"
          onClick={() => scrollToRef(link.path)}
        >
          <button
            type="button"
            className="button-primary"
            aria-label={link.name}
          >
            {language.language === "en" ? link.name : link.namePL}
          </button>
        </div>
      ))}

      <LanguageSelector />
    </div>
  );
};

export default DesktopNav;
