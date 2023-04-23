import anime from "animejs";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ContactLink } from "../../types";

interface ContactInfoCardProps {
  title: string;
  icon: JSX.Element;
  links: ContactLink[];
}

const ContactInfoCard = ({ title, icon, links }: ContactInfoCardProps) => {
  const infoRef = useRef<HTMLDivElement>(null);

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
        <h5 className="text text-4xl">{title}</h5>
        {links.map((link: ContactLink) =>
          link.url ? (
            <Link to={`${link.url}`} target="_blank" key={link.description}>
              <button className="whitespace-nowrap text-base hover:underline md:text-lg">
                {link.description}
              </button>
            </Link>
          ) : (
            <p key={link.description}>{link.description}</p>
          )
        )}
      </div>
    </div>
  );
};

export default ContactInfoCard;
