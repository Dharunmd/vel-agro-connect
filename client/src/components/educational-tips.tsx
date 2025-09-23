import { TrendingUp, FileText, Award, Truck, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EducationalTips() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const tips = [
    {
      icon: TrendingUp,
      title: "Get Best Price for Your Crops",
      description: "Learn timing strategies, quality standards, and negotiation tactics to maximize your crop value in the global market.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: FileText,
      title: "Export Documentation Checklist",
      description: "Complete guide to all required documents, certifications, and permits needed for smooth international trade.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent-foreground"
    },
    {
      icon: Award,
      title: "Maintaining Quality Standards",
      description: "Essential practices for post-harvest handling, storage, and packaging to meet international quality requirements.",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary-foreground"
    },
    {
      icon: Truck,
      title: "Logistics & Shipping Guide",
      description: "Navigate international shipping, cold chain management, and delivery schedules for fresh produce exports.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Scale,
      title: "Fair Trade Practices",
      description: "Understand your rights, payment terms, and how to build lasting partnerships with international buyers.",
      bgColor: "bg-accent/10",
      iconColor: "text-accent-foreground"
    }
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="educational-tips-title">
            Expert Tips & Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from agricultural experts to maximize your success
          </p>
        </motion.div>
        
        {/* Horizontal Scrolling Tips */}
        <motion.div 
          className="overflow-x-auto pb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex space-x-6 min-w-max" data-testid="tips-carousel">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <Card className="w-80 flex-shrink-0 hover:shadow-xl transition-shadow" data-testid={`tip-card-${index}`}>
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${tip.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <tip.icon className={`w-6 h-6 ${tip.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {tip.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-primary font-medium hover:text-primary/80 transition-colors p-0 h-auto"
                      data-testid={`read-more-${index}`}
                    >
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Scroll Indicators */}
        <motion.div 
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {tips.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentSlide(index)}
              data-testid={`carousel-indicator-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
