import { useEffect, useRef } from "react";
import { Project, Skill } from "../../types";
import anime from "animejs";
import { Link } from "react-router-dom";
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import ImageSlider from "./imageSlider";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const language = useSelector((state: RootState) => state.language);

  /* animate sliding in */
  useEffect(() => {
    const element = projectRef.current;
    if (element) {
      const handleScroll = () => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.8) {
          anime({
            targets: element,
            translateY: ["100px", "0px"],
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 1000,
          });
          window.removeEventListener("scroll", handleScroll);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [projectRef]);

  return (
    <div className="mb-12 flex flex-col opacity-0 md:mb-28" ref={projectRef}>
      <ImageSlider
        title={project.title}
        images={[project.image, project.imageMobile]}
      />
      <div className="mb-4 flex flex-col md:mt-2 md:flex-row-reverse">
        <div className="mb-4 ml-auto flex gap-x-4">
          {project.demoLink && (
            <Link
              className="flex items-center gap-x-1 text-dark hover:text-primaryText"
              to={project.demoLink}
              target="_blank"
            >
              <p className="underline-offset-3 underline">
                {language.language === "en"
                  ? "Visit the site"
                  : "Odwiedź stronę"}
              </p>
              <HiOutlineLink />
            </Link>
          )}
          {project.sourceCodeLink && (
            <Link
              className="flex items-center gap-x-1 text-dark hover:text-primaryText"
              to={project.sourceCodeLink}
              target="_blank"
            >
              <p className="underline-offset-3 underline">
                {language.language === "en" ? "See the code" : "Zobacz kod"}
              </p>
              <FaGithub />
            </Link>
          )}
        </div>
        <h3 className="text-5xl text-dark">{project.title}</h3>
      </div>
      <div className="my-2 flex flex-wrap gap-2">
        {project.technologies.map((tech: Skill) => (
          <div className="text-white" key={tech.name}>
            <p className="select-none rounded bg-primaryText px-2 py-0.5 font-bold sm:py-1">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-justify text-dark">
        {language.language === "en"
          ? project.description
          : project.descriptionPL}
      </p>
    </div>
  );
};

export default ProjectCard;
