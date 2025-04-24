import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-teal/20">
        <div className="text-2xl font-bold font-playfair">
          <span className="text-navy">Voice</span>
          <span className="text-teal">Weave</span>
        </div>
        <Button variant="ghost" onClick={onClose} className="text-navy">
          <i className="ri-close-line text-2xl"></i>
        </Button>
      </div>
      <div className="flex flex-col p-4 space-y-4 font-montserrat text-lg">
        <a href="#about" className="text-navy py-2 border-b border-gray" onClick={handleLinkClick}>
          About
        </a>
        <a href="#demo" className="text-navy py-2 border-b border-gray" onClick={handleLinkClick}>
          Demo
        </a>
        <a 
          href="#demo" 
          className="font-montserrat text-white bg-amber py-3 px-6 rounded-md text-center mt-4"
          onClick={handleLinkClick}
        >
          Try Demo
        </a>
      </div>
    </div>
  );
}
