"use client";
import Image from "next/image";
import asset0 from "../app/assets/asset 0.png";
import asset18 from "../app/assets/asset 18.png";
import asset19 from "../app/assets/asset 19.png";
import asset20 from "../app/assets/asset 20.png";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="container overflow-hidden pt-10 pb-8 px-10 ">
      <motion.div
        className="w-full relative grid grid-cols-4 justify-items-center pb-16"
        initial={{ opacity: 0, y: "120px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <div className="flex flex-col gap-6">
          <Image src={asset0} alt="logo" width={70} />
          <div className="flex justify-start items-center gap-2">
            <div className="border border-white rounded-full bg-white">
              <Image src={asset18} alt="logo" width={20} />
            </div>
            <div className="border border-white rounded-full bg-white">
              <Image src={asset19} alt="logo" width={20} />
            </div>
            <div className="border border-white rounded-full bg-white">
              <Image src={asset20} alt="logo" width={20} />
            </div>
          </div>
          <p>Beautiful design has the power to captivate audiences.</p>
        </div>
        <div className="w-full flex justify-end">
          <ul className="text-center flex flex-col gap-6">
            <li className="text-sm uppercase  font-medium tracking-[2px]">
              Main
            </li>
            <li className="tracking-[1px]">Home</li>
            <li className="tracking-[1px]">About</li>
            <li className="tracking-[1px]">Works</li>
          </ul>
        </div>
        <div className="w-full flex justify-end">
          <ul className="text-center flex flex-col gap-6">
            <li className="text-sm uppercase font-medium tracking-[2px]">
              Pages
            </li>
            <li className="tracking-[1px]">Contact</li>
            <li className="tracking-[1px]">Terms & Conditions</li>
            <li className="tracking-[1px]">Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full flex justify-end">
          <ul className="text-center flex flex-col gap-6">
            <li className="text-sm uppercase font-medium tracking-[2px]">
              Utilites
            </li>
            <li className="tracking-[1px]">Style Guide</li>
            <li className="tracking-[1px]">Instructions</li>
            <li className="tracking-[1px]">Licenses</li>
            <li className="tracking-[1px]">Changelog</li>
          </ul>
        </div>
      </motion.div>
      <hr />
      <motion.div
        className="pt-8 relative text-sm flex-between "
        initial={{ opacity: 0, y: "60px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      >
        <p>© 2024 iDEVELOPER. All Rights Reserved.</p>
        <p>Made with ♡ by Nisha🦋</p>
      </motion.div>
    </div>
  );
}
