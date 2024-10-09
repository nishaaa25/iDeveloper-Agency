import { testimonials } from "@/Constant";
import TestimonialsCard from "./TestimonialsCard";

export default function Testimonials() {
  return (
    <div className="container py-10 px-28">
      <div className="bg-gray-400  p-20 rounded-3xl flex-center">
        {testimonials.map((item, index) => (
          <div key={item.imgUrl} className={`${index==0 ? "visible":"hidden"}`}>
            <TestimonialsCard
              imgUrl={item.imgUrl}
              text={item.text}
              desg={item.desg}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

