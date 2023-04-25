import anime from "animejs";
import { useEffect, useRef } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

interface IFooterProps {
  scrollToRef: (path: string) => void;
}
const Footer = ({ scrollToRef }: IFooterProps) => {
  const iconRef = useRef<HTMLButtonElement>(null);

  const handleHover = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    anime({
      targets: iconRef.current,
      translateY: ["0px", "-7px"],
      easing: "easeInOutQuad",
      direction: "alternate",
      duration: 300,
      loop: true,
    });
  };
  const handleMouseLeave = () => {
    anime({
      targets: iconRef.current,
      translateY: "0",
      duration: 300,
      easing: "easeInOutQuad",
    });
    anime.remove(iconRef.current);
  };

  return (
    <footer className="realtive bottom-0 mt-8 bg-primaryText py-4 text-white md:mt-20">
      <div className=" mx-auto flex w-auto max-w-7xl flex-col items-center gap-y-4 px-4">
        <div>
          <button
            onClick={() => scrollToRef("#")}
            ref={iconRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <MdKeyboardArrowUp className="h-12 w-12 text-white" />
          </button>
        </div>
        <p>{`Made by Wojciech Pawlicki-Gil 2023`}</p>
      </div>
    </footer>
  );
};
export default Footer;
