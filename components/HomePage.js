'use client';
import Image from "next/image";
import asset1 from "../app/assets/asset 1.svg";
import asset21 from "../app/assets/asset 21.svg";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div>
      <div className="container h-[85vh] overflow-hidden">
        <div className="absolute top-8 px-24 z-0">
          <div className="relative rounded-full border border-white border-opacity-20 transform rotate-180">
            <div>
              <Image
                src={asset21}
                alt="fingerprint"
                className="w-full h-full opacity-70"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full py-[120px]">
          <p className="uppercase text-sm tracking-[2px] pl-4">Welcome</p>
          <h1 className="text-4xl font-semibold tracking-tight">iDEVLOPER</h1>
          <div className="bg-white inline-block p-4 rounded-full mt-4 absolute right-10">
            <Image src={asset1} alt="right-arrowicon" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 top-6 flex items-center justify-center z-20">
        <Spline
          scene="https://prod.spline.design/VuMsOVtmA0FF8Rb7/scene.splinecode "
          style={{ width: "140vw", height: "100vh" }} // Adjust sizes as needed
        />
      </div>
    </div>
  );
}
