'use client';
import { counterVariants } from "@/Animation";
import { motion } from "framer-motion";

export default function Counter() {
  return (
    <div className="container flex-between pt-2 pb-20 lg:px-20 xl:px-40">
      <motion.div
        className="flex-center flex-col lg:gap-4"
        initial="hidden"
        whileInView="visible"
        variants={counterVariants}
      >
        <p className="text-[80px] xl:text-3xl font-medium">124</p>
        <p className="text-lg tracking-[2px]">Customers</p>
      </motion.div>
      <motion.div
        className="flex-center flex-col lg:gap-4"
        initial="hidden"
        whileInView="visible"
        variants={counterVariants}
      >
        <p className="text-[80px] xl:text-3xl font-medium">7</p>
        <p className="text-lg tracking-[2px]">Awards</p>
      </motion.div>
      <motion.div
        className="flex-center flex-col lg:gap-4"
        initial="hidden"
        whileInView="visible"
        variants={counterVariants}
      >
        <p className="text-[80px] xl:text-3xl font-medium">85</p>
        <p className="text-lg tracking-[2px]">Projects</p>
      </motion.div>
    </div>
  );
}
