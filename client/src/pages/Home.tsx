import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll implementation
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-neutral-50">
      <NavBar />
      <main>
        <HeroSection />
        <TrustBadges />
        <FeaturesSection />
        <HowItWorks />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
