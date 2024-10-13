"use client";
import { useTransform, useScroll, motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react';

export default function ProjectCard({ imgUrl, title, i }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], 
  });
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.85]);
  // const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0]); 
  
  return (
    <div ref={container} className="w-screen h-screen flex-center sticky top-6">
      <motion.div 
        className="w-9/12 h-full relative flex flex-col gap-2 bg-black"
        style={{ scale}} 
      >
        <Image
          src={imgUrl}
          alt="projectimg"
          className="rounded-3xl w-full h-[80vh] relative object-cover object-top"
        />
        <p className="text-2xl uppercase">{title}</p>
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
      </motion.div>
    </div>
  );
}
