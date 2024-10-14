import ProjectCard from "./ProjectCard";
import { projects } from "@/Constant";

export default function ProjectsContainer() {
  return (
    <div className="w-screen mt-10 lg:mt-20">
      {projects.map((project, i) => {
        return <ProjectCard i={i} {...project} key={i} />;
      })}
    </div>
  );
}
