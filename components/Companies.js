"use client";
import { motion } from "framer-motion";
import asset2 from "../app/assets/asset 2.svg";
import asset3 from "../app/assets/asset 3.svg";
import asset4 from "../app/assets/asset 4.svg";
import asset5 from "../app/assets/asset 5.svg";
import Image from "next/image";
import { ChildrenVariants, companiesVariants } from "@/Animation";

export default function Companies() {
  return (
    <div className="relative z-30 custom-shadow ">
      <motion.div
        className="container py-[100px] grid grid-cols-2 md:grid-cols-4 justify-items-center lg:gap-4"
        initial="hidden"
        whileInView="visible"
        variants={companiesVariants}
      >
        <motion.div variants={ChildrenVariants}>
          <Image src={asset2} className="w-[120px] lg:w-[140px]" alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset4} className="w-[120px] lg:w-[140px]"  alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset3} className="w-[120px] lg:w-[140px]"  alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset5} className="w-[120px] lg:w-[140px]"  alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset4} className="w-[120px] lg:w-[140px]"  alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset3} className="w-[120px] lg:w-[140px]"  alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset5} className="w-[120px] lg:w-[140px]" alt="companies-logo" />
        </motion.div>
        <motion.div variants={ChildrenVariants}>
          <Image src={asset2} className="w-[120px] lg:w-[140px]"  alt="companies-logo" />
        </motion.div>
      </motion.div>
    </div>
  );
}
