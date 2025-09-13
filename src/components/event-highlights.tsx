"use client";
import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Define types for event highlights
interface EventHighlight {
  title: string;
  description: string;
  icon?: string;
  category: string;
}

// Event highlights data
const eventHighlights: EventHighlight[] = [
  {
    title: "Traditional Dandiya Performance",
    description: "Experience authentic Gujarati dance forms performed by skilled artists from across the region",
    category: "Performance"
  },
  {
    title: "Live Music Orchestra",
    description: "Enjoy traditional and fusion music performed by our talented musicians and renowned artists",
    category: "Music"
  },
  {
    title: "Gourmet Gujarati Cuisine",
    description: "Savor authentic dishes prepared by master chefs using traditional recipes and fresh ingredients",
    category: "Food"
  },
  {
    title: "Best Dancer Competition",
    description: "Showcase your skills and win exciting prizes in our dance competition with amazing rewards",
    category: "Competition"
  },
  {
    title: "Cultural Exhibition",
    description: "Explore the rich heritage and traditions of Gujarat through interactive displays and artifacts",
    category: "Culture"
  },
  {
    title: "Professional Photography",
    description: "Capture your memories with our professional photography services and instant photo printing",
    category: "Service"
  },
  {
    title: "Traditional Aarti Ceremony",
    description: "Begin the evening with a beautiful traditional aarti ceremony performed by local priests",
    category: "Ceremony"
  },
  {
    title: "Garba Workshops",
    description: "Learn authentic Garba steps from expert instructors in our interactive dance workshops",
    category: "Workshop"
  }
];

// Get category color based on category name using only cream and maroon
const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    Performance: "bg-maroon/90 text-cream border-maroon/70",
    Music: "bg-maroon/80 text-cream border-maroon/60",
    Food: "bg-maroon/70 text-cream border-maroon/50",
    Competition: "bg-maroon/95 text-cream border-maroon/80",
    Culture: "bg-maroon/85 text-cream border-maroon/65",
    Service: "bg-maroon/75 text-cream border-maroon/55",
    Ceremony: "bg-maroon text-cream border-maroon/90",
    Workshop: "bg-maroon/65 text-cream border-maroon/45",
    Default: "bg-maroon/60 text-cream border-maroon/40"
  };
  return categoryColors[category] || categoryColors.Default;
};

// Carousel configuration
const carouselOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

const slideWidth = "flex-[0_0_95%] sm:flex-[0_0_85%] md:flex-[0_0_65%] lg:flex-[0_0_50%] xl:flex-[0_0_35%]";

export default function EventHighlights() {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-2 lg:py-2 px-2 bg-maroon">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-cream" />
            <span className="text-sm sm:text-base font-semibold text-cream/80 uppercase tracking-wider">
              What Awaits You
            </span>
            <Sparkles className="w-6 h-6 text-cream" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading text-cream">
            Event Highlights
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cream to-cream/60 mx-auto rounded-full mb-6"></div>
          
          <p className="text-cream/80 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Discover what makes our Dandiya celebration an unforgettable experience filled with tradition, culture, and joy
          </p>
        </motion.div>

        {/* Highlights Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Now visible on all screen sizes */}
          <div className="flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="pointer-events-auto -translate-x-1/2 sm:-translate-x-1/2 lg:-translate-x-1/2 bg-cream/95 backdrop-blur-sm border-2 border-cream/30 hover:bg-cream hover:text-maroon shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-maroon"
              aria-label="Previous highlight"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto translate-x-1/2 sm:translate-x-1/2 lg:translate-x-1/2 bg-cream/95 backdrop-blur-sm border-2 border-cream/30 hover:bg-cream hover:text-maroon shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-maroon"
              aria-label="Next highlight"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {eventHighlights.map((highlight, index) => (
                <div 
                  key={`highlight-${index}`}
                  className={`${slideWidth} pl-4 first:pl-0 last:pr-4`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="h-full"
                  >
                    <Card className="group h-full hover:shadow-2xl transition-all duration-500 border-2 border-cream/20 overflow-hidden bg-cream/90 backdrop-blur-sm hover:border-cream/40 transform hover:-translate-y-2 hover:bg-cream/95">
                      <CardHeader className="pb-4 pt-6 px-6">
                        {/* Category Badge */}
                        <div className="flex items-center justify-between mb-3">
                          <Badge 
                            className={`${getCategoryColor(highlight.category)} border text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm`}
                          >
                            {highlight.category}
                          </Badge>
                          <div className="w-8 h-8 rounded-full bg-maroon/10 flex items-center justify-center group-hover:bg-maroon/20 transition-colors duration-300">
                            <div className="w-3 h-3 rounded-full bg-maroon/60 group-hover:bg-maroon transition-colors duration-300"></div>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <CardTitle className="text-xl sm:text-2xl font-heading text-maroon group-hover:text-maroon/90 transition-colors duration-300 leading-tight">
                          {highlight.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="px-6 pb-6">
                        {/* Description */}
                        <p className="text-sm sm:text-base text-maroon/80 leading-relaxed mb-4">
                          {highlight.description}
                        </p>
                        
                        {/* Decorative Element */}
                        <div className="pt-4 border-t border-maroon/10">
                          <div className="w-12 h-1 bg-gradient-to-r from-maroon to-maroon/40 rounded-full group-hover:w-16 transition-all duration-300"></div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {eventHighlights.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => emblaApi?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-cream/30 hover:bg-cream/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50"
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Call-to-Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-cream/20"
        >
          <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
            Experience all these highlights and more at{" "}
            <span className="font-semibold text-cream">Aagam Rass Dandiya 2025</span>
          </p>
        </motion.div>*/}
      </div>
    </section>
  );
}
