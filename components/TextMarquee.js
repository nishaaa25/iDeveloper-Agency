export default function TextMarquee() {
  return (
    <div className="relative w-full flex overflow-x-hidden  ">
      <div class="py-4 animate-marquee whitespace-nowrap">
        <span class="text-xxl font-medium mx-1 uppercase">My Works</span>
        <span class="text-xxl font-medium mx-1 uppercase outline-text">My Works</span>
      </div>
      <div class="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        <span class="text-xxl font-medium mx-1 uppercase">My Works</span>
        <span class="text-xxl font-medium mx-1 uppercase outline-text">My Works</span>
      </div>
    </div>
  );
}
