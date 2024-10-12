"use client";
import { useTransform, useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ imgUrl, title }) {
  return (
    <div className="w-screen h-screen flex-center sticky top-12">
      <div className="w-9/12 h-full relative flex flex-col gap-4">
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
            BRANDING -hii
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-white text-black rounded-3xl text-sm tracking-[1px]"
          >
            IDENTITY
          </Link>
        </div>
      </div>
    </div>
  );
}
