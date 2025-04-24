import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { ref: refText, inView: inViewText } = useScrollAnimation();
  const { ref: refImage, inView: inViewImage } = useScrollAnimation();
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden weave-pattern">
      <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={refText}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            inViewText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight text-neutral-900">
            <span className="text-primary-600">Weaving voices</span> into 
            <span className="text-secondary-600"> funding impact</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            The AI-powered platform that helps mission-driven organizations craft 
            compelling grant applications that reflect their authentic voice.
          </p>
          <div className="flex justify-center mb-12">
            <Button
              asChild
              size="lg"
              id="demo"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat text-xl"
            >
              <a href="#demo">Try Demo</a>
            </Button>
          </div>

          <div 
            ref={refImage}
            className={`relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${
              inViewImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm"></div>
            <img 
              src="https://image.shutterstock.com/image-photo/young-black-businesswoman-addressing-colleagues-600w-562441603.jpg" 
              alt="Black woman giving a presentation in a business meeting" 
              className="w-full h-auto rounded-xl object-cover border border-white/30"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 bg-white/90 rounded-lg px-3 py-1 text-xs text-primary-600 font-medium">
              Leadership in Action
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
