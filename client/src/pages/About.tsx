import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const { ref: refHero, inView: inViewHero } = useScrollAnimation();
  const { ref: refMission, inView: inViewMission } = useScrollAnimation();
  const { ref: refVision, inView: inViewVision } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-100 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={refHero}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              inViewHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-neutral-900">
              About <span className="text-primary-500">Voice</span><span className="text-secondary-500">Weave</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-12 leading-relaxed">
              VoiceWeave is an AI-powered platform designed to empower mission-driven organizations to craft compelling grant applications that reflect their authentic voice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-5 rounded-full">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission */}
          <div 
            ref={refMission}
            className={`max-w-4xl mx-auto mb-16 transition-all duration-700 ${
              inViewMission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-primary-200 w-16"></div>
              <h2 className="text-3xl font-bold text-primary-500 px-4 font-playfair">Our Mission</h2>
              <div className="h-0.5 bg-primary-200 w-16"></div>
            </div>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              VoiceWeave is an AI-powered platform designed to empower mission-driven organizations to craft compelling grant applications that reflect their authentic voice. By combining natural language intelligence with a deep understanding of funding landscapes, VoiceWeave helps nonprofits weave together data, impact stories, and civic purpose — faster, smarter, and with greater resonance.
            </p>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              We believe that every mission-driven organization has a unique perspective and impact story that deserves to be heard. Our technology is designed to amplify these authentic voices, not replace them with generic grant-speak or jargon.
            </p>
          </div>

          {/* Our Vision */}
          <div 
            ref={refVision}
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              inViewVision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-secondary-200 w-16"></div>
              <h2 className="text-3xl font-bold text-secondary-500 px-4 font-playfair">Our Vision</h2>
              <div className="h-0.5 bg-secondary-200 w-16"></div>
            </div>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              We envision a world where funding is more accessible to organizations doing vital work in their communities, regardless of their size or grant-writing expertise. By democratizing access to effective grant-writing tools, we aim to help shift more resources to impactful organizations that might otherwise be overlooked.
            </p>
            
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our platform focuses on weaving together three essential elements of successful grant applications:
            </p>
            
            <ul className="list-disc pl-8 mt-6 space-y-4 text-neutral-700">
              <li>
                <span className="font-bold text-primary-600">Authentic Voice:</span> We preserve and enhance your organization's unique tone and perspective, ensuring your applications never sound generic or artificial.
              </li>
              <li>
                <span className="font-bold text-primary-600">Data-Driven Narratives:</span> We help you integrate compelling data points and impact metrics that strengthen your case for funding.
              </li>
              <li>
                <span className="font-bold text-primary-600">Community Context:</span> We emphasize the civic purpose and community connections that make your work meaningful and necessary.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 relative">
        <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair text-neutral-900">Ready to amplify your mission?</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Join organizations that are using VoiceWeave to secure more funding while staying true to their authentic voice.
            </p>
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-5 rounded-full">
              <a href="/">Try Demo</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}