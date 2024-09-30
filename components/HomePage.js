import Image from "next/image";
import asset1 from "../app/assets/asset 1.svg";
import asset21 from "../app/assets/asset 21.svg";

export default function HomePage() {
  return (
    <div className="container h-[85vh] overflow-hidden">
      <div className="absolute top-8 px-16 z-0">
        <div className="relative rounded-full border border-white border-opacity-20 transform rotate-180">
          <div>
            <Image src={asset21} alt="fingerprint" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full py-[90px]">
        <p className="uppercase text-sm tracking-[2px] pl-4">Welcome</p>
        <h1 className="text-4xl font-semibold ">iDESIGNER</h1>
        <div className="bg-white inline-block p-4 rounded-full mt-4 absolute right-10">
          <Image src={asset1} alt="right-arrowicon" />
        </div>
      </div>
    </div>
  );
}
