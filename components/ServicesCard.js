import Image from "next/image";

export default function ServicesCard({ imgUrl, title, desc }) {
  return (
    <div className="w-full p-8 rounded-3xl bg-opacity-70 text-white-200 text-opacity-90 bg-gray-400 ">
      <div>
        <div className="flex justify-start items-center gap-6 ">
          <div className="p-6 rounded-2xl bg-black-800 bg-opacity-60 mb-4">
            <Image
              src={imgUrl}
              alt="service-card-image"
              className="rounded-md w-[90px] h-[90px] object-cover"
            />
          </div>
          <p className="uppercase text-semibold text-2xl">{title}</p>
        </div>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
}
