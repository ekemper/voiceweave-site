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
    const headerHeight = 80;
    
    // Get element's position and adjust for header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    console.log(`Element position: ${elementPosition}`);
    
    const offsetPosition = elementPosition - headerHeight;
    console.log(`Adjusted position after header offset: ${offsetPosition}`);
    
    // Scroll to adjusted position
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Update URL hash without scrolling
    history.pushState(null, '', `#${elementId}`);
    console.log(`Scrolled to ${offsetPosition}px and updated URL hash to #${elementId}`);
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
