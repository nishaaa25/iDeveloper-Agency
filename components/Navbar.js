"use client";
import Image from "next/image";
import Link from "next/link";
import asset0 from "../app/assets/asset 0.png";
import { easeIn, easeOut, motion } from "framer-motion";
import { variant } from "@/Animation";

export default function Navbar() {
  return (
    <div className="px-8 relative bg-black text-white">
      <motion.nav
        className="flex-between container py-[46px]"
        initial="hidden"
        whileInView="visible"
        variants={variant}
        viewport={{ once: true }}
      >
        <div>
          <Image src={asset0} alt="logo" width={74} className="logo" />
        </div>
        <ul className="flex-center">
          <li>
            <Link href="#" className="uppercase text-base tracking-[1px] px-6">
              <span>Home</span> <span className="hidden">Home</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="uppercase text-base tracking-[1px] px-6">
              <span>About</span> <span className="hidden">About</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="uppercase text-base tracking-[1px] px-6">
              <span>Works</span> <span className="hidden">Works</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="uppercase text-base tracking-[1px] px-6">
              <span>Contact</span> <span className="hidden">Contact</span>
            </Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}
