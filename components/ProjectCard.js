import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ imgUrl, title }) {
  return (
    <div className="relative h-full flex flex-col place-items-start gap-4">
      <Image
        src={imgUrl}
        alt="projectimg"
        className="rounded-3xl w-full h-[80vh] relative object-cover object-top"
      />
      <p className="text-2xl uppercase ">{title}</p>
      <div className="flex gap-3">
        <Link
          href="#"
          className="px-4 py-2 bg-white text-black rounded-3xl text-sm tracking-[1px]"
        >
          BRANDING
        </Link>
        <Link
          href="#"
          className="px-4 py-2 bg-white text-black rounded-3xl text-sm tracking-[1px]"
        >
          IDENTITY
        </Link>
      </div>
    </div>
  );
}
