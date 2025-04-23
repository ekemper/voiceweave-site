import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TrustBadges() {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <section className="py-8 bg-white border-t border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-neutral-500 mb-6 font-medium">
          Trusted by organizations making an impact
        </p>
        <div 
          ref={ref}
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-700 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1635622748328-15ef18b43a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=160&h=60&q=80" 
                alt={`Partner organization ${i + 1}`} 
                className="h-6 md:h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
