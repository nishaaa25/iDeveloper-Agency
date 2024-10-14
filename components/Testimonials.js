"use client";
import { testimonials } from "@/Constant";
import TestimonialsCard from "./TestimonialsCard";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <motion.div
      className="container py-10 lg:px-16 xl:px-28"
      initial={{ opacity: 0, y: "120px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      <div className="bg-gray-400 p-10 lg:p-20 rounded-3xl flex-center">
        {testimonials.map((item, index) => (
          <div
            key={item.imgUrl}
            className={`${index == 0 ? "visible" : "hidden"}`}
          >
            <TestimonialsCard
              imgUrl={item.imgUrl}
              text={item.text}
              desg={item.desg}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
