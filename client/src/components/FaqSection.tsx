import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

// FAQ item interface
interface FaqItem {
  question: string;
  answer: string;
}

// FAQ items data
const faqItems: FaqItem[] = [
  {
    question: "How does VoiceWeave maintain my organization's unique voice?",
    answer: "VoiceWeave uses advanced natural language processing to analyze your existing materials, mission statements, and other content to understand your organization's unique tone, values, and communication style. The AI then generates content that matches this voice profile while enhancing clarity and persuasiveness for grant applications."
  },
  {
    question: "Can VoiceWeave help with specific grant applications?",
    answer: "Absolutely. VoiceWeave analyzes the requirements, priorities, and language patterns of specific grant applications to provide tailored guidance. Our system can help you understand what each funder is looking for and how to position your work in alignment with their goals and values, while maintaining your authentic voice."
  },
  {
    question: "Is my data secure with VoiceWeave?",
    answer: "VoiceWeave takes data security and privacy extremely seriously. We implement industry-leading encryption, secure access controls, and regular security audits. Your data is never sold or shared with third parties, and you retain full ownership of all content created on our platform. We are compliant with relevant data protection regulations including GDPR and CCPA."
  },
  {
    question: "Do I need technical expertise to use VoiceWeave?",
    answer: "Not at all. VoiceWeave is designed with a user-friendly interface that requires no technical expertise. Our onboarding process guides you through setup, and our intuitive design makes it easy to navigate and use all features. We also provide comprehensive support resources and training for users at all technical skill levels."
  },
  {
    question: "Can I try VoiceWeave before committing to a subscription?",
    answer: "Yes, we offer a 14-day free trial that gives you full access to all features of our Growth plan. This allows you to experience VoiceWeave's capabilities with your own content and see the results before making a commitment. No credit card is required to start your trial."
  }
];

export default function FaqSection() {
  const { ref: refTitle, inView: inViewTitle } = useScrollAnimation();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={refTitle}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inViewTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair text-neutral-900">Common questions</h2>
          <p className="text-lg text-neutral-600">Everything you need to know about VoiceWeave</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <FaqItem key={index} item={item} index={index} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item, index }: { item: FaqItem, index: number }) {
  const { ref, inView } = useScrollAnimation();
  const delay = index * 50;
  
  return (
    <AccordionItem 
      ref={ref}
      value={`item-${index}`} 
      className={`border-b border-neutral-200 py-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <AccordionTrigger className="text-xl font-bold text-neutral-800 font-montserrat">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="mt-4 text-neutral-600">
        <p>{item.answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
