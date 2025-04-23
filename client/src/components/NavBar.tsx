import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import MobileMenu from "@/components/ui/mobile-menu";
import { Link } from "wouter";

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
      <header className={`bg-white/90 backdrop-blur-sm fixed w-full z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-primary-500 text-2xl font-bold font-playfair flex items-center">
                <span className="text-primary inline-block mr-1">Voice</span>
                <span className="text-secondary-500 inline-block">Weave</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8 font-montserrat">
              <Link href="/about" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">About</Link>
              <a href="#features" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">Impact Stories</a>
              <a href="#pricing" className="text-neutral-700 hover:text-primary-500 transition-colors font-medium">Pricing</a>
            </nav>
            <div>
              <Button asChild className="hidden md:inline-block font-montserrat text-white bg-primary-500 hover:bg-primary-600 py-2 px-6 rounded-full transition-colors font-medium">
                <a href="#demo">Try Demo</a>
              </Button>
              <Button
                variant="ghost"
                className="md:hidden text-neutral-800"
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
