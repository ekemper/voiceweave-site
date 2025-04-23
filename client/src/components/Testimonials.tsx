import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Testimonial interface
interface Testimonial {
  name: string;
  role: string;
  organization: string;
  testimonial: string;
  results: string;
  rating: number;
  image: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "Maya Johnson",
    role: "Executive Director",
    organization: "Community Uplift Foundation",
    testimonial: "VoiceWeave transformed our approach to grant writing. We secured a $250,000 grant that previously seemed out of reach. The platform helped us craft a narrative that perfectly captured our community's voice and vision.",
    results: "3 major grants secured in 6 months",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Chen",
    role: "Director of Development",
    organization: "Climate Action Network",
    testimonial: "The time savings alone make VoiceWeave invaluable. What used to take us weeks now takes days, and the quality is significantly better. Our success rate has nearly doubled since we started using the platform.",
    results: "Grant success rate increased from 22% to 41%",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Angela Torres",
    role: "Grants Manager",
    organization: "Education Equity Initiative",
    testimonial: "What impressed me most was how VoiceWeave maintained our authentic voice while helping us frame our work in ways that resonate with funders. It's like having a grant expert who really understands who we are.",
    results: "$1.2M in new funding in first year",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
  }
];

export default function Testimonials() {
  const { ref: refTitle, inView: inViewTitle } = useScrollAnimation();
  
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={refTitle}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inViewTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-accent-100 text-accent-600 rounded-full text-sm font-medium mb-4">Impact Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-neutral-900">Voices amplified, missions funded</h2>
          <p className="text-lg text-neutral-600">Hear from organizations that have transformed their grant writing process and improved their funding success with VoiceWeave.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial, index: number }) {
  const { ref, inView } = useScrollAnimation();
  const delay = index * 100;
  
  return (
    <div 
      ref={ref}
      className={`bg-neutral-50 rounded-xl p-6 md:p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all ${
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-bold text-neutral-800 font-montserrat">{testimonial.name}</h3>
          <p className="text-neutral-500 text-sm">{testimonial.role}, {testimonial.organization}</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex text-accent-500 mb-1">
          {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
            <i key={i} className="ri-star-fill"></i>
          ))}
          {testimonial.rating % 1 !== 0 && (
            <i className="ri-star-half-fill"></i>
          )}
        </div>
      </div>
      <p className="text-neutral-600 italic">{testimonial.testimonial}</p>
      <div className="mt-6 pt-6 border-t border-neutral-200">
        <p className="text-sm text-neutral-500">Results: <span className="text-secondary-600 font-medium">{testimonial.results}</span></p>
      </div>
    </div>
  );
}
