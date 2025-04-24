import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const { ref: refSection, inView: inViewSection } = useScrollAnimation();
  
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-navy-teal text-white relative">
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={refSection}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            inViewSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Experience VoiceWeave in Action</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            See how our AI-powered platform can transform your grant writing process. Try the interactive demo below.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl p-8 shadow-xl text-center border border-teal/20">
            <div className="md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Diverse team collaborating on a project"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              <Button asChild className="bg-amber hover:bg-amber/90 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105">
                <a href="#" className="inline-flex items-center">
                  <span>Request Full Demo</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </Button>
            </div>
            
            <div className="text-left md:order-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-play-line text-3xl text-teal"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">Interactive Demo</h3>
                <p className="text-navy/80 mb-6">
                  Experience how VoiceWeave helps craft compelling narratives while maintaining your authentic voice.
                </p>
              </div>
              
              <div className="bg-gray-custom/30 rounded-lg p-6 mb-6 text-left relative border border-teal/20">
                <p className="text-sm text-navy/70 mb-2">Sample grant narrative input:</p>
                <p className="text-navy mb-4">
                  "Our after-school program provides academic support to underserved students. We've seen grades improve by 15% on average."
                </p>
                <div className="flex items-center justify-center">
                  <i className="ri-arrow-down-line text-2xl text-teal"></i>
                </div>
              </div>
              
              <div className="bg-gray-custom/30 rounded-lg p-6 text-left border-l-4 border-amber relative">
                <p className="text-sm text-navy/70 mb-2">VoiceWeave enhanced output:</p>
                <p className="text-navy">
                  "Our evidence-based after-school program provides targeted academic interventions for students in economically disadvantaged communities. Since implementation, we've witnessed a measurable 15% average improvement in academic performance, with particularly strong gains in core literacy and STEM subjects."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}