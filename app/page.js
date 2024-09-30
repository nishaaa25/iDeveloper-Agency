import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" relative w-screen max-w-screen overflow-x-hidden bg-black text-white font-[family-name:var(--font-geist-sans)]">
      <HomePage/>
    </div>
  );
}
