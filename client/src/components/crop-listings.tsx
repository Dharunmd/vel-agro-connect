import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Scale, MapPin, Carrot, Apple, Wheat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Crop } from "@shared/schema";

export default function CropListings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { data: crops = [], isLoading } = useQuery<Crop[]>({
    queryKey: ["/api/crops"],
  });

  const filteredCrops = crops.filter(crop => 
    activeFilter === "all" || crop.category === activeFilter
  );

  const filters = [
    { id: "all", label: "All Crops", icon: null },
    { id: "vegetables", label: "Vegetables", icon: Carrot },
    { id: "fruits", label: "Fruits", icon: Apple },
    { id: "grains", label: "Grains", icon: Wheat }
  ];

  const handleContactFarmer = (farmerName: string, cropName: string) => {
    const message = `Hi ${farmerName}, I'm interested in your ${cropName}. Can you please share more details?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isLoading) {
    return (
      <section id="crops" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-muted-foreground">Loading crop listings...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="crops" className="py-20 bg-muted/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="crop-listings-title">
            Live Crop Listings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh produce available now from verified farmers
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className="px-6 py-3 font-medium transition-colors"
              data-testid={`filter-${filter.id}`}
            >
              {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Crop Cards Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredCrops.map((crop, index) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-testid={`crop-card-${crop.id}`}>
                <img 
                  src={crop.imageUrl} 
                  alt={crop.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-card-foreground" data-testid={`crop-name-${crop.id}`}>
                      {crop.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-md text-sm font-medium ${
                      crop.category === 'vegetables' ? 'bg-primary/10 text-primary' :
                      crop.category === 'fruits' ? 'bg-accent/20 text-accent-foreground' :
                      'bg-secondary text-secondary-foreground'
                    }`}>
                      {crop.category.charAt(0).toUpperCase() + crop.category.slice(1)}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 flex items-center">
                    <Scale className="w-4 h-4 mr-1" />
                    {crop.quantity} kg available
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {crop.location}
                  </p>
                  <Button 
                    onClick={() => handleContactFarmer(crop.farmerName, crop.name)}
                    className="w-full"
                    data-testid={`contact-farmer-${crop.id}`}
                  >
                    Contact Farmer
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredCrops.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">No crops found for the selected category.</p>
          </div>
        )}
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            size="lg"
            data-testid="view-all-listings"
          >
            View All Listings
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
