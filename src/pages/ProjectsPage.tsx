import { forwardRef, useEffect, useState } from "react";
import { projectsData } from "../data/data";
import { IProjectData } from "../types";
import ProjectCard from "../components/Project/projectCard";

const ProjectsPage = forwardRef<HTMLDivElement>((props, ref) => {
  const [projectData, setProjectData] = useState<IProjectData>();

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("../data/data.json");
      // const data = await response.json();
      setProjectData(projectsData);
    };

    fetchData();
  }, []);

  return (
    <section ref={ref} className="relative mx-auto w-auto max-w-7xl px-4 pt-10">
      {projectData?.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
});

export default ProjectsPage;
