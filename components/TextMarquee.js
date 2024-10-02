export default function TextMarquee() {
  return (
    <div className="relative w-full flex overflow-x-hidden  ">
      <div className="py-4 animate-marquee whitespace-nowrap">
        <span className="text-xxl font-medium mx-3 uppercase">My Works</span>
        <span className="text-xxl font-medium mx-3 uppercase outline-text">My Works</span>
      </div>
      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        <span className="text-xxl font-medium mx-3 uppercase">My Works</span>
        <span className="text-xxl font-medium mx-3 uppercase outline-text">My Works</span>
      </div>
    </div>
  );
}
