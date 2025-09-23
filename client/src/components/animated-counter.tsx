import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  isVisible: boolean;
  delay?: number;
  duration?: number;
}

export default function AnimatedCounter({ 
  value, 
  isVisible, 
  delay = 0, 
  duration = 2000 
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let startTime: number;
      const startValue = 0;
      const endValue = value;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (endValue - startValue) * easeOutQuart;
        
        setCurrentValue(Math.round(currentValue * 10) / 10); // Round to 1 decimal place
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay, duration]);

  return <span>{currentValue}</span>;
}
