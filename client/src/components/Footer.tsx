import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-neutral-700">
          <div>
            <div className="text-2xl font-bold font-playfair mb-4">
              <span className="text-primary-300">Voice</span>
              <span className="text-secondary-300">Weave</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Amplifying voices. Streamlining grants. Making funding more accessible for mission-driven organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-neutral-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#demo" className="text-neutral-400 hover:text-white transition-colors">Try Demo</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Grant Writing Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VoiceWeave. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
