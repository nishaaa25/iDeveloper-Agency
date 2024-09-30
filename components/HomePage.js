import Image from "next/image";
import asset1 from "../app/assets/asset 1.svg";

export default function HomePage() {
  return <div className="container">
    <p>
        Welcome
    </p>
    <h1>iDEVELOPER</h1>
    <div className="bg-white inline-block p-4 rounded-full">
        <Image src={asset1} alt="right-arrowicon"/>
    </div>
  </div>;
}
