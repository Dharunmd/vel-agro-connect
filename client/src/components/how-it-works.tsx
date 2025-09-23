import { UserPlus, Sprout, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: UserPlus,
      number: 1,
      title: "Register",
      description: "Create your profile as a farmer or exporter. Quick verification process ensures trusted connections."
    },
    {
      icon: Sprout,
      number: 2,
      title: "List or Search Crops",
      description: "Farmers list their produce. Exporters search for quality crops that meet their requirements."
    },
    {
      icon: Handshake,
      number: 3,
      title: "Connect & Trade",
      description: "Direct communication, fair negotiations, and secure transactions. Build lasting partnerships."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="how-it-works-title">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect and grow your agricultural business
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`step-${step.number}`}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
