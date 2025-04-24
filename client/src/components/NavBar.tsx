import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import MobileMenu from "@/components/ui/mobile-menu";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils-ui";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`bg-white/90 backdrop-blur-sm fixed w-full z-50 ${isScrolled ? 'shadow-sm border-b border-teal/20' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold font-playfair flex items-center">
                <span className="text-navy inline-block mr-1">Voice</span>
                <span className="text-teal inline-block">Weave</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 font-montserrat">
              <button 
                onClick={() => scrollToElement('about')}
                className="text-navy hover:text-teal transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToElement('demo')}
                className="text-navy hover:text-teal transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                Demo
              </button>
            </nav>
            <div>
              <Button 
                onClick={() => scrollToElement('demo')}
                className="hidden md:inline-block font-montserrat text-white bg-amber hover:bg-amber/90 py-2 px-6 rounded-full transition-colors font-medium"
              >
                Try Demo
              </Button>
              <Button
                variant="ghost"
                className="md:hidden text-navy"
                aria-label="Menu"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <i className="ri-menu-line text-2xl"></i>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
