import Companies from "@/components/Companies";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div  className="home w-screen text-white bg-black">
      <HomePage/>
      <Companies/>
      <Services/>
    </div>
  );
}
