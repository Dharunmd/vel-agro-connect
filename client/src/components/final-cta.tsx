import { UserCheck, Globe, CheckCircle, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: CheckCircle, text: "Verified Profiles" },
    { icon: Shield, text: "Secure Transactions" },
    { icon: Headphones, text: "24/7 Support" }
  ];

  return (
    <section id="exporters" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          data-testid="final-cta-title"
        >
          Join Our Network – Start Growing Your Business Today!
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="final-cta-description"
        >
          Connect with thousands of verified farmers and exporters. Build sustainable partnerships, access global markets, and grow your agricultural business with confidence.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            data-testid="farmer-signup-cta"
          >
            <UserCheck className="w-5 h-5 mr-2" />
            Farmer Signup
          </Button>
          
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            data-testid="exporter-signup-cta"
          >
            <Globe className="w-5 h-5 mr-2" />
            Exporter Signup
          </Button>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <div 
              key={feature.text}
              className="flex items-center space-x-2"
              data-testid={`feature-${index}`}
            >
              <feature.icon className="w-4 h-4" />
              <span>{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
