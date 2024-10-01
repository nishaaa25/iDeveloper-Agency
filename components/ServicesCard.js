import Image from "next/image";

export default function ServicesCard({ imgUrl, title, desc }) {
  return <div className="w-full p-4 rounded-full bg-gray-400 ">
    <div>
        <Image src={imgUrl} alt="service-card-image" width={200
        }/>
        <p>{title}</p>
        <p>{desc}</p>
    </div>
  </div>;
}
