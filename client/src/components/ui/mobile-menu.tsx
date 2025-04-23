import { Button } from "@/components/ui/button";

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
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-primary-500 text-2xl font-bold font-playfair">
          <span className="text-primary">Voice</span>
          <span className="text-secondary-500">Weave</span>
        </div>
        <Button variant="ghost" onClick={onClose} className="text-neutral-800">
          <i className="ri-close-line text-2xl"></i>
        </Button>
      </div>
      <div className="flex flex-col p-4 space-y-4 font-montserrat text-lg">
        <a href="#features" className="text-neutral-700 py-2 border-b border-neutral-200" onClick={handleLinkClick}>
          Features
        </a>
        <a href="#how-it-works" className="text-neutral-700 py-2 border-b border-neutral-200" onClick={handleLinkClick}>
          How It Works
        </a>
        <a href="#testimonials" className="text-neutral-700 py-2 border-b border-neutral-200" onClick={handleLinkClick}>
          Impact Stories
        </a>
        <a href="#pricing" className="text-neutral-700 py-2 border-b border-neutral-200" onClick={handleLinkClick}>
          Pricing
        </a>
        <a 
          href="#join-waitlist" 
          className="font-montserrat text-white bg-primary-500 py-3 px-6 rounded-md text-center mt-4"
          onClick={handleLinkClick}
        >
          Join Waitlist
        </a>
      </div>
    </div>
  );
}
