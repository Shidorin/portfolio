import anime from "animejs";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ContactLink } from "../../types";
import { MdOutlineContentCopy } from "react-icons/md";

interface ContactInfoCardProps {
  title: string;
  icon: JSX.Element;
  links: ContactLink[];
}

const ContactInfoCard = ({ title, icon, links }: ContactInfoCardProps) => {
  const infoRef = useRef<HTMLDivElement>(null);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  useEffect(() => {
    const element = infoRef.current;
    if (element) {
      const handleScroll = () => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight) {
          anime({
            targets: element,
            translateX: ["-100px", "0px"],
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 1000,
            delay: 200,
          });
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [infoRef]);

  return (
    <div
      ref={infoRef}
      className="flex items-center gap-x-4 rounded-md bg-primaryText p-4 opacity-0"
    >
      <div className="rounded-lg border p-2">{icon}</div>
      <div className="flex flex-col">
        <h3 className="text text-4xl">{title}</h3>
        {links.map((link: ContactLink) =>
          link.url ? (
            <Link
              className="w-fit"
              to={`${link.url}`}
              target="_blank"
              key={link.description}
            >
              <button className="whitespace-nowrap text-base underline md:text-lg">
                {link.description}
              </button>
            </Link>
          ) : (
            <div className="relative" key={link.description}>
              <p
                className="flex cursor-pointer items-center gap-x-2 hover:underline"
                onClick={() => copyToClipboard(link.description)}
              >
                {link.description}
                <MdOutlineContentCopy />
              </p>
              {showCopySuccess && (
                <div className="absolute rounded bg-green-100 px-2 py-1 text-green-600">
                  {"Copied to clipboard!"}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ContactInfoCard;
