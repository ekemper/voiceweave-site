import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

// Pricing plan interface
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  buttonText: string;
  buttonVariant: "primary" | "outline";
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small organizations",
    features: [
      "Up to 5 users",
      "3 grant applications per month",
      "Basic grant opportunity finder",
      "AI writing assistant",
      "Email support"
    ],
    buttonText: "Get Started",
    buttonVariant: "outline"
  },
  {
    name: "Growth",
    price: "$249",
    description: "For established nonprofits",
    isPopular: true,
    features: [
      "Up to 15 users",
      "Unlimited grant applications",
      "Advanced grant opportunity finder",
      "Impact metrics builder",
      "Stakeholder input tools",
      "Priority email & chat support"
    ],
    buttonText: "Get Started",
    buttonVariant: "primary"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Unlimited grant applications",
      "Custom AI training on your materials",
      "Advanced analytics dashboard",
      "API access",
      "Dedicated success manager",
      "Premium onboarding & training"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline"
  }
];

export default function PricingSection() {
  const { ref: refTitle, inView: inViewTitle } = useScrollAnimation();
  
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-neutral-50 relative">
      <div className="absolute inset-0 bg-wave-pattern opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={refTitle}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inViewTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-neutral-900">Simple, transparent pricing</h2>
          <p className="text-lg text-neutral-600">Choose the plan that fits your organization's needs and scale as you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan, index: number }) {
  const { ref, inView } = useScrollAnimation();
  const delay = index * 100;
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl p-6 md:p-8 ${
        plan.isPopular 
          ? 'border-2 border-primary-500 shadow-md hover:shadow-xl' 
          : 'border border-neutral-200 shadow-sm hover:shadow-lg'
      } transition-all relative ${
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 mt-6 mr-6">
          <span className="inline-block px-3 py-1 bg-primary-500 text-white rounded-full text-xs font-medium">Most Popular</span>
        </div>
      )}
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-2">{plan.name}</span>
        <div className="text-3xl font-bold mb-1 font-montserrat text-neutral-800">
          {plan.price}
          {plan.price !== "Custom" && <span className="text-lg font-normal text-neutral-500">/month</span>}
        </div>
        <p className="text-neutral-600">{plan.description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <i className="ri-check-line text-secondary-500 mr-2 mt-1"></i>
            <span className="text-neutral-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Button
          asChild
          variant={plan.buttonVariant === "primary" ? "default" : "outline"}
          className={`w-full ${
            plan.buttonVariant === "primary" 
              ? "bg-primary-500 text-white hover:bg-primary-600" 
              : "bg-white border border-primary-500 text-primary-500 hover:bg-primary-50"
          } font-medium py-2 px-6 rounded-full transition-colors`}
        >
          <a href="#demo">{plan.buttonText}</a>
        </Button>
      </div>
    </div>
  );
}
