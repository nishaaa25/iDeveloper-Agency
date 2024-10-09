import Image from "next/image";
import asset13 from "../app/assets/asset 13.svg";
import asset22 from "../app/assets/asset 22.svg";
import asset23 from "../app/assets/asset 23.svg";

export default function TestimonialsCard({ imgUrl, text, name, desg }) {
  return (
    <div className="flex-center text-center gap-6 flex-col text-white">
      <Image src={asset13} alt="icon" width={100} />
      <p className="text-2xl font-medium capitalize">{text}</p>
      <Image src={imgUrl} alt="icon" width={70} className="rounded-full" />
      <div>
        <p className="uppercase text-sm tracking-[2px] font-medium">{name}</p>
        <p className="uppercase text-sm tracking-[2px] font-medium">{desg}</p>
      </div>
      <div className="flex-center gap-4 ">
        <Image src={asset23} alt="icon" width={30} />
        <Image src={asset22} alt="icon" width={30} />
      </div>
    </div>
  );
}
