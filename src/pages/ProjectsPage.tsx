import { forwardRef } from "react";

const ProjectsPage = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref}>Projects Page</div>;
});

export default ProjectsPage;
