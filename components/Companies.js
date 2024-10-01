import asset2 from "../app/assets/asset 2.svg";
import asset3 from "../app/assets/asset 3.svg";
import asset4 from "../app/assets/asset 4.svg";
import asset5 from "../app/assets/asset 5.svg";
import Image from "next/image";

export default function Companies() {
  return (
    <div className="relative z-30 custom-shadow">
      <div className="container py-[60px] grid grid-cols-4 justify-items-center gap-4">
        <Image src={asset2} width={140} alt="companies-logo" />
        <Image src={asset4} width={140} alt="companies-logo" />
        <Image src={asset3} width={140} alt="companies-logo" />
        <Image src={asset5} width={140} alt="companies-logo" />
        <Image src={asset4} width={140} alt="companies-logo" />
        <Image src={asset3} width={140} alt="companies-logo" />
        <Image src={asset5} width={140} alt="companies-logo" />
        <Image src={asset2} width={140} alt="companies-logo" />
      </div>
    </div>
  );
}
