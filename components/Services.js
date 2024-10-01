import ServicesCard from "./ServicesCard";
import asset6 from "../app/assets/asset 6.jpeg";

export default function Services() {
  return (
    <div>
      <ServicesCard
        imgUrl={asset6}
        title="Branding"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida."
      />
    </div>
  );
}
