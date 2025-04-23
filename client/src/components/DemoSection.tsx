import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const { ref: refSection, inView: inViewSection } = useScrollAnimation();
  
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative">
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
          
          <div className="grid md:grid-cols-2 gap-6 bg-white rounded-xl p-8 shadow-xl text-center">
            <div className="md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Diverse team collaborating on a project"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              <Button asChild className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105">
                <a href="#" className="inline-flex items-center">
                  <span>Request Full Demo</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </Button>
            </div>
            
            <div className="text-left md:order-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-play-line text-3xl text-primary-500"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-800">Interactive Demo</h3>
                <p className="text-neutral-600 mb-6">
                  Experience how VoiceWeave helps craft compelling narratives while maintaining your authentic voice.
                </p>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6 mb-6 text-left relative">
                <p className="text-sm text-neutral-500 mb-2">Sample grant narrative input:</p>
                <p className="text-neutral-700 mb-4">
                  "Our after-school program provides academic support to underserved students. We've seen grades improve by 15% on average."
                </p>
                <div className="flex items-center justify-center">
                  <i className="ri-arrow-down-line text-2xl text-primary-500"></i>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-lg p-6 text-left border-l-4 border-primary-500 relative">
                <p className="text-sm text-neutral-500 mb-2">VoiceWeave enhanced output:</p>
                <p className="text-neutral-700">
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