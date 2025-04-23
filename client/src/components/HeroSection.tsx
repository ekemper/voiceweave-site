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
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat text-lg"
            >
              <a href="#join-waitlist">Join Waitlist</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-primary-500 border border-primary-200 hover:border-primary-300 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-md hover:shadow-lg font-montserrat text-lg"
            >
              <a href="#how-it-works">See How It Works</a>
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
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="VoiceWeave Dashboard Preview" 
              className="w-full h-auto rounded-xl object-cover border border-white/30"
              loading="lazy"
            />
            <div className="absolute top-2 left-2 bg-white/90 rounded-lg px-3 py-1 text-xs text-primary-600 font-medium">
              Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
