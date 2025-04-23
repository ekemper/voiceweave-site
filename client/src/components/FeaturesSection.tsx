import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Feature data structure
interface Feature {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

// Feature data
const features: Feature[] = [
  {
    icon: "ri-quill-pen-line",
    title: "Narrative AI Assistant",
    description: "Craft compelling narratives that capture your organization's unique voice and mission with our AI-powered writing assistant.",
    benefits: [
      "Voice-matched writing suggestions",
      "Impact story enhancement",
      "Mission-aligned phrasing"
    ]
  },
  {
    icon: "ri-search-line",
    title: "Grant Opportunity Finder",
    description: "Discover the perfect funding opportunities that align with your mission, values, and project goals.",
    benefits: [
      "AI-driven matching algorithm",
      "Funding database integration",
      "Success probability scoring"
    ]
  },
  {
    icon: "ri-community-line",
    title: "Stakeholder Insights",
    description: "Gather and incorporate community perspectives to strengthen your proposal with authentic voices.",
    benefits: [
      "Community input analysis",
      "Beneficiary impact stories",
      "Collaborative feedback tools"
    ]
  },
  {
    icon: "ri-bar-chart-box-line",
    title: "Impact Metrics Builder",
    description: "Create compelling visualizations and metrics that demonstrate your program's effectiveness and impact.",
    benefits: [
      "Data visualization tools",
      "Outcome measurement frameworks",
      "Funder-specific reporting"
    ]
  },
  {
    icon: "ri-calendar-check-line",
    title: "Grant Deadline Manager",
    description: "Never miss another application deadline with intelligent tracking and workflow management.",
    benefits: [
      "Calendar integration",
      "Smart task assignment",
      "Automated reminders"
    ]
  },
  {
    icon: "ri-file-text-line",
    title: "Budget Optimizer",
    description: "Create compelling and accurate budgets that align with funder expectations and program needs.",
    benefits: [
      "Cost justification assistance",
      "Funder-specific budget templates",
      "Budget narrative generation"
    ]
  }
];

export default function FeaturesSection() {
  const { ref: refTitle, inView: inViewTitle } = useScrollAnimation();
  
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={refTitle}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inViewTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-neutral-900">AI-powered tools to amplify your mission</h2>
          <p className="text-lg text-neutral-600">VoiceWeave combines advanced AI with deep grant-writing expertise to help you tell your story effectively and secure the funding you deserve.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature, index: number }) {
  const { ref, inView } = useScrollAnimation();
  const delay = index * 100;
  
  return (
    <div 
      ref={ref}
      className={`bg-neutral-50 rounded-xl p-6 md:p-8 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 border border-neutral-200 ${
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
        <i className={`${feature.icon} text-2xl text-primary-600`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3 font-montserrat text-neutral-800">{feature.title}</h3>
      <p className="text-neutral-600 mb-4">{feature.description}</p>
      <ul className="space-y-2 text-neutral-600">
        {feature.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start">
            <i className="ri-check-line text-secondary-500 mr-2 mt-1"></i>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
