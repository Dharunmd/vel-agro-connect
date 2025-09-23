import { UserCheck, Globe, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-testid="hero-title"
        >
          Connecting Farmers With{" "}
          <span className="text-accent">Global Buyers</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="hero-subtitle"
        >
          Fair prices, easy exports, and direct connections. Join thousands of farmers and exporters building sustainable agricultural partnerships worldwide.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            data-testid="button-farmer-register"
          >
            <UserCheck className="w-5 h-5" />
            <span>I Am a Farmer</span>
          </button>
          
          <button 
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            data-testid="button-exporter-register"
          >
            <Globe className="w-5 h-5" />
            <span>I Am an Exporter</span>
          </button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-white/80 hover:text-white transition-colors animate-bounce-gentle"
            data-testid="scroll-indicator"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
