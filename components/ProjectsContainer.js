
// 'use client';
import ProjectCard from "./ProjectCard";
import asset10 from "../app/assets/asset 10.jpeg";
import asset11 from "../app/assets/asset 11.jpeg";
import asset12 from "../app/assets/asset 12.jpeg";
// import { useRef } from "react";
// import { useScroll } from "framer-motion";

export default function ProjectsContainer() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start start', 'end end']
  // })

  return (
    <div className="w-screen mt-20">
      <ProjectCard title="Brand Identity" imgUrl={asset10} />
      <ProjectCard title="Development" imgUrl={asset11} />
      <ProjectCard title="Website Branding" imgUrl={asset12} />
    </div>
  );
}
