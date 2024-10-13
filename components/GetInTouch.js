"use client";
import Image from "next/image";
import asset1 from "../app/assets/asset 1.svg";
import { motion } from "framer-motion";
import { companiesVariants, textVariants, variant } from "@/Animation";

export default function GetInTouch() {
  return (
    <div className="container py-20 overflow-hidden flex-center">
      <motion.div
        className=" flex-col flex-center text-center gap-4"
        initial="hidden"
        whileInView="visible"
        variants={companiesVariants}
      >
        <motion.p
          className="uppercase text-sm tracking-[2px] pl-4"
          variants={variant}
        >
          Contact Me
        </motion.p>
        <div>
          <motion.p
            className="text-xxl font-medium mx-3 uppercase"
            variants={textVariants}
          >
            Get In
          </motion.p>
          <motion.p
            variants={textVariants}
            className="text-xxl font-medium mx-3 uppercase outline-text mt-2"
          >
            touch
          </motion.p>
        </div>
        <motion.div
          className="max-w-max text-black uppercase bg-white py-3 px-8 text-lg rounded-full flex gap-4 mt-4"
          variants={variant}
        >
          <span>Contact</span>
          <Image
            src={asset1}
            alt="right-arrowicon"
            className="transform rotate-6"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
