import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Step interface
interface Step {
  number: number;
  title: string;
  description: string;
  points: string[];
  image: string;
  alt: string;
  reverse?: boolean;
}

// Steps data
const steps: Step[] = [
  {
    number: 1,
    title: "Voice Capture",
    description: "Begin by sharing your organization's mission, vision, and unique voice. VoiceWeave's AI analyzes your existing materials to understand your authentic tone and messaging style.",
    points: [
      "Answer guided questions about your mission",
      "Upload existing materials for AI analysis",
      "Create your organization's unique voice profile"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Voice capture process",
    reverse: true
  },
  {
    number: 2,
    title: "Opportunity Matching",
    description: "Our AI-powered platform identifies grant opportunities that align with your mission and programs, providing a personalized list of high-potential funding sources.",
    points: [
      "AI-driven grant opportunity analysis",
      "Match score based on organizational fit",
      "Funder insight reports to guide your approach"
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Grant matching process"
  },
  {
    number: 3,
    title: "Narrative Crafting",
    description: "Use our AI-powered writing assistant to draft compelling narratives that maintain your authentic voice while meeting funder requirements and expectations.",
    points: [
      "AI suggestions that match your voice",
      "RFP-specific guidance and templates",
      "Real-time feedback and enhancement"
    ],
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Narrative crafting",
    reverse: true
  },
  {
    number: 4,
    title: "Finalize and Submit",
    description: "Complete your application with our comprehensive tools for budgeting, impact measurement, and document formatting. Submit with confidence, knowing your proposal represents your best work.",
    points: [
      "Comprehensive final review and checklist",
      "Document formatting and assembly",
      "Submission tracking and follow-up reminders"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    alt: "Grant submission"
  }
];

export default function HowItWorks() {
  const { ref: refTitle, inView: inViewTitle } = useScrollAnimation();
  
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white relative">
      <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={refTitle}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inViewTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-neutral-900">Your journey to funding success</h2>
          <p className="text-lg text-neutral-600">VoiceWeave simplifies the grant writing process while amplifying your organization's authentic voice.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, isLast }: { step: Step, isLast: boolean }) {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center ${!isLast ? 'mb-16' : ''} gap-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className={`md:w-1/2 order-2 ${step.reverse ? 'md:order-1' : 'md:order-2'}`}>
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-2">
          Step {step.number}
        </span>
        <h3 className="text-2xl font-bold mb-4 font-montserrat text-neutral-800">{step.title}</h3>
        <p className="text-neutral-600 mb-4">{step.description}</p>
        <ul className="space-y-2 text-neutral-600">
          {step.points.map((point, idx) => (
            <li key={idx} className="flex items-start">
              <i className="ri-record-circle-fill text-xs text-primary-400 mr-3 mt-1.5"></i>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`md:w-1/2 order-1 ${step.reverse ? 'md:order-2' : 'md:order-1'}`}>
        <img 
          src={step.image} 
          alt={step.alt} 
          className="rounded-xl shadow-lg w-full h-auto" 
          loading="lazy"
        />
      </div>
    </div>
  );
}
