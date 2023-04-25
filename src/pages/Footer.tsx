import { useRef } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

interface IFooterProps {
  scrollToRef: (path: string) => void;
}
const Footer = ({ scrollToRef }: IFooterProps) => {
  const iconRef = useRef<HTMLButtonElement>(null);
  //   const year = new Date().getFullYear();

  return (
    <footer className="realtive bottom-0 bg-primaryText py-4 text-white">
      <div className=" mx-auto flex w-auto max-w-7xl flex-col items-center gap-y-4 px-4">
        <div>
          <button onClick={() => scrollToRef("#")} ref={iconRef}>
            <MdKeyboardArrowUp className="h-12 w-12 text-white" />
          </button>
        </div>
        <p>{`Made by Wojciech Pawlicki-Gil 2023`}</p>
      </div>
    </footer>
  );
};
export default Footer;
