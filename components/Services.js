import ServicesCard from "./ServicesCard";
import asset6 from "../app/assets/asset 6.jpeg";
import asset7 from "../app/assets/asset 7.jpeg";
import asset8 from "../app/assets/asset 8.jpeg";
import asset9 from "../app/assets/asset 9.jpeg";

export default function Services() {
  return (
    <div className="w-11/12 py-10 relative mx-auto grid grid-cols-2 justify-items-center px-6 gap-8">
      <div className="flex flex-col gap-8">
        <ServicesCard
          imgUrl={asset6}
          title="Branding"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida."
        />
        <ServicesCard
          imgUrl={asset7}
          title="Marketing"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida."
        />
        <p className="text-lg text-white-200 text-opacity-90 w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <p className="uppercase text-sm tracking-[2px] pb-8 pl-2">
            creative solutions
          </p>
          <h2 className="text-3xl">SERVICES</h2>
        </div>
        <ServicesCard
          imgUrl={asset8}
          title="Development"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida."
        />
        <ServicesCard
          imgUrl={asset9}
          title="Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida."
        />
      </div>
    </div>
  );
}
