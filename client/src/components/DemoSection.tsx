import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function DemoSection() {
  const { ref: refSection, inView: inViewSection } = useScrollAnimation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [currentInput, setCurrentInput] = useState("");
  const [generatingResponse, setGeneratingResponse] = useState(false);
  const [generatedResponses, setGeneratedResponses] = useState<Record<number, string>>({});
  
  // Sample grant application questions
  const questions = [
    "Describe your organization's mission and primary activities.",
    "What community need does your project address?",
    "Describe the population your organization serves.",
    "What are the specific goals and objectives of your project?",
    "How will you measure the success of your project?"
  ];

  // Function to simulate AI response generation
  const generateResponse = (questionIndex: number, userInput: string) => {
    setGeneratingResponse(true);
    
    // Simulated AI enhanced responses
    const enhancedResponses = {
      0: `${userInput}\n\nAdditionally, our organization is dedicated to addressing systemic inequalities through community-based initiatives that empower local residents to become agents of change. We operate with a commitment to transparency, collaboration, and measurable impact in all our programming.`,
      1: `${userInput}\n\nThis need is substantiated by recent demographic data showing a 27% increase in demand for these services over the past two years, with particularly acute gaps in economically disadvantaged areas where access to similar resources is limited by both financial and geographic barriers.`,
      2: `${userInput}\n\nOur demographic breakdown includes approximately 65% from underrepresented communities, with 40% living below the federal poverty line. We prioritize accessibility by offering services on a sliding scale fee structure and providing multilingual support in the three most common languages spoken in our service area.`,
      3: `${userInput}\n\nThese objectives are designed to create both immediate impact and sustainable long-term change through a phased implementation approach, with each phase building upon established successes while incorporating community feedback for continuous improvement.`,
      4: `${userInput}\n\nOur evaluation methodology combines both quantitative metrics and qualitative feedback through a mixed-methods approach. We employ pre/post assessments, longitudinal tracking of key indicators, and structured interviews with program participants to capture both the breadth and depth of program impact.`
    };
    
    // Simulate typing effect
    setTimeout(() => {
      setGeneratedResponses(prev => ({
        ...prev,
        [questionIndex]: enhancedResponses[questionIndex as keyof typeof enhancedResponses] || `${userInput}\n\nEnhanced response would appear here with additional details, more formal language, and specific impact metrics.`
      }));
      setGeneratingResponse(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;
    
    // Save user response
    setResponses(prev => ({
      ...prev,
      [currentQuestion]: currentInput
    }));
    
    // Generate AI response
    generateResponse(currentQuestion, currentInput);
    
    // Clear input field
    setCurrentInput("");
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-navy-teal text-white relative">
      <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={refSection}
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            inViewSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Experience VoiceWeave in Action</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            See how our AI-powered platform can transform your grant writing process. Try the interactive demo below.
          </p>
          
          <div className="bg-white rounded-xl p-8 shadow-xl text-left border border-teal/20">
            <div className="mb-6">
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-robot-line text-xl text-teal"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">VoiceWeave AI Assistant</h3>
                  <p className="text-navy/70 text-sm">Enhancing your grant application responses</p>
                </div>
              </div>
              
              <div className="bg-navy/5 p-4 rounded-lg mb-6">
                <p className="text-navy font-medium">
                  Answer the following questions to see how VoiceWeave can enhance your grant application responses. 
                  Try writing your own answers and see how the AI improves them while maintaining your authentic voice.
                </p>
              </div>
            </div>
            
            <div className="mb-6 bg-gray-custom/20 p-5 rounded-lg border border-teal/10">
              <div className="flex items-start mb-2">
                <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <i className="ri-question-line text-sm text-white"></i>
                </div>
                <div>
                  <p className="text-sm text-navy/70 mb-1">Question {currentQuestion + 1} of {questions.length}</p>
                  <h4 className="text-lg font-bold text-navy">{questions[currentQuestion]}</h4>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="mt-4 pl-11">
                <div className="flex flex-col space-y-3">
                  <textarea
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    placeholder="Type your response here..."
                    className="w-full border border-gray-custom/60 rounded-md p-3 text-navy min-h-[120px] focus:outline-none focus:ring-2 focus:ring-teal/50"
                  />
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-amber hover:bg-amber/90 text-white"
                    >
                      Generate Enhanced Response
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            {generatingResponse && (
              <div className="mb-6 pl-11">
                <div className="flex items-center space-x-2 text-navy">
                  <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                  <span className="text-navy/70 text-sm ml-2">Enhancing your response...</span>
                </div>
              </div>
            )}
            
            {generatedResponses[currentQuestion] && (
              <div className="mb-6 bg-gray-custom/20 p-5 rounded-lg border-l-4 border-amber">
                <div className="flex items-start mb-2">
                  <div className="w-8 h-8 bg-teal rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="ri-magic-line text-sm text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-navy/70 mb-1">VoiceWeave Enhanced Response</p>
                    <div className="text-navy whitespace-pre-line">
                      {generatedResponses[currentQuestion]}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              <Button 
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="text-navy border-navy/30 hover:bg-navy/5"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Previous Question
              </Button>
              
              <Button 
                onClick={handleNextQuestion}
                disabled={currentQuestion === questions.length - 1}
                variant="outline"
                className="text-navy border-navy/30 hover:bg-navy/5"
              >
                Next Question
                <i className="ri-arrow-right-line ml-2"></i>
              </Button>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-custom/30 text-center">
              <p className="text-navy/70 mb-4">Ready to experience the full capabilities?</p>
              <Button asChild className="bg-teal hover:bg-teal/90 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105">
                <a href="#" className="inline-flex items-center">
                  <span>Request Full Demo Access</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}