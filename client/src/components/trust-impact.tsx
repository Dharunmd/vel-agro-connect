import { Users, Handshake, Globe, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./animated-counter";

export default function TrustImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      value: 1250,
      label: "Farmers Connected",
      testId: "stat-farmers"
    },
    {
      icon: Handshake,
      value: 850,
      label: "Successful Deals",
      testId: "stat-deals"
    },
    {
      icon: Globe,
      value: 45,
      label: "Countries Reached",
      testId: "stat-countries"
    },
    {
      icon: DollarSign,
      value: 2.5,
      label: "Revenue Generated",
      suffix: "M",
      prefix: "$",
      testId: "stat-revenue"
    }
  ];

  const partners = ["Partner 1", "Partner 2", "Partner 3", "Partner 4"];

  return (
    <section id="farmers" className="py-20 bg-primary/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="trust-impact-title">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building trust through transparent connections and successful partnerships
          </p>
        </motion.div>
        
        {/* Impact Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={stat.testId}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {stat.prefix}
                <AnimatedCounter 
                  value={stat.value} 
                  isVisible={isInView}
                  delay={index * 100}
                />
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Partner Logos */}
        <motion.div 
          className="border-t border-border pt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-muted-foreground mb-8 font-medium">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={partner}
                className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center"
                data-testid={`partner-${index + 1}`}
              >
                <span className="text-muted-foreground font-semibold">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
