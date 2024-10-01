import ProjectCard from "./ProjectCard";
import asset10 from "../app/assets/asset 10.jpeg";
import asset11 from "../app/assets/asset 11.jpeg";
import asset12 from "../app/assets/asset 12.jpeg";

export default function ProjectsContainer() {
  return (
    <div className="container px-32 overflow-hidden flex flex-col gap-6">
      <ProjectCard title="Brand Identity" imgUrl={asset10} />
      <ProjectCard title="Development" imgUrl={asset11} />
      <ProjectCard title="Website Branding" imgUrl={asset12} />
    </div>
  );
}
