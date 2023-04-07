import { useEffect, useRef } from "react";
import { Project, Skill } from "../../types";
import anime from "animejs";
import { Link } from "react-router-dom";
import { HiOutlineLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import ImageSlider from "./imageSlider";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const projectRef = useRef<HTMLDivElement>(null);

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
    <div className="mb-20 flex flex-col opacity-0" ref={projectRef}>
      <ImageSlider
        title={project.title}
        images={[project.image, project.imageMobile]}
      />
      {/* <img
        className="h-auto w-full object-cover object-center brightness-75 filter"
        src={`/images/${project.image}`}
        alt={"image of " + project.title}
      ></img>
      <img
        className="h-56 w-full object-contain brightness-75 filter"
        src={`/images/${project.imageMobile}`}
        alt={"mobile view of" + project.title}
      ></img> */}
      <div className="mb-4 flex flex-col md:mt-2 md:flex-row-reverse">
        <div className="mb-4 ml-auto flex gap-x-4">
          <Link
            className="flex items-center gap-x-1 hover:text-primaryText"
            to={project.demoLink}
          >
            {"Visit the site"}
            <HiOutlineLink />
          </Link>
          <Link
            className="flex items-center gap-x-1 hover:text-primaryText"
            to={project.sourceCodeLink}
          >
            {"See the code"}
            <FaGithub />
          </Link>
        </div>
        <h3 className="text-5xl text-dark">{project.title}</h3>
      </div>
      <div className="my-2 flex flex-wrap gap-2">
        {project.technologies.map((tech: Skill) => (
          <div className="text-white" key={tech.name}>
            <p className="rounded bg-primaryText px-2 py-0.5 sm:py-1">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2">{project.description}</div>
    </div>
  );
};

export default ProjectCard;