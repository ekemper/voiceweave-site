import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function scrollToElement(elementId: string): void {
  console.log(`Attempting to scroll to element with ID: ${elementId}`);
  const element = document.getElementById(elementId);
  
  if (element) {
    console.log(`Found element with ID: ${elementId}`);
    
    // Calculate header height - adjust this value based on your header's actual height
    const headerHeight = 100; // Increased to ensure we scroll far enough
    
    // Use a more direct approach with scrollIntoView
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add extra adjustment after scrollIntoView for header offset
    setTimeout(() => {
      const currentPos = window.scrollY;
      window.scrollTo({
        top: currentPos - headerHeight,
        behavior: 'smooth'
      });
      console.log(`Applied additional offset adjustment, scrolled to ${currentPos - headerHeight}px`);
    }, 100);
    
    // Update URL hash without scrolling
    history.pushState(null, '', `#${elementId}`);
    console.log(`Updated URL hash to #${elementId}`);
  } else {
    console.error(`Element with ID ${elementId} not found!`);
  }
}

// Animation helpers
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Validate email format
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
