import Image from "next/image";
import asset1 from "../app/assets/asset 1.svg";

export default function GetInTouch() {
  return (
    <div className="container py-20 overflow-hidden flex-center">
      <div className=" flex-col flex-center text-center gap-4">
        <p className="uppercase text-sm tracking-[2px] pl-4">Contact Me</p>
        <div>
          <p className="text-xxl font-medium mx-3 uppercase">Get In</p>
          <p className="text-xxl font-medium mx-3 uppercase outline-text mt-2">
            touch
          </p>
        </div>
        <div className="max-w-max text-black uppercase bg-white py-3 px-8 text-lg rounded-full flex gap-4 mt-4">
            <span>Contact</span>
          <Image src={asset1} alt="right-arrowicon" className="transform rotate-6" />
        </div>
      </div>
    </div>
  );
}
