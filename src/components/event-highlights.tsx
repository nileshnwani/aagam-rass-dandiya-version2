"use client";
import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Define types for event highlights
interface EventHighlight {
  id: number;
  imageUrl: string;
  alt: string;
}

// Event highlights data with images
const eventHighlights: EventHighlight[] = [
  {
    id: 1,
    imageUrl: "/highlight1.jpg", // Replace with your actual image paths
    alt: "Traditional Dandiya Performance"
  },
  {
    id: 2,
    imageUrl: "/highlight2.jpeg",
    alt: "Live Music Orchestra"
  },
  {
    id: 3,
    imageUrl: "/highlight3.jpeg",
    alt: "Gourmet Gujarati Cuisine"
  },
  {
    id: 4,
    imageUrl: "/highlight4.jpg",
    alt: "Best Dancer Competition"
  },
];

// Carousel configuration
const carouselOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

// Increased slide widths for wider cards
const slideWidth = "flex-[0_0_98%] sm:flex-[0_0_90%] md:flex-[0_0_70%] lg:flex-[0_0_55%] xl:flex-[0_0_40%]";

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
    <section className="py-2 lg:py-2 px-2 bg-cream">
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
            <Sparkles className="w-6 h-6 text-maroon" />
            <span className="text-sm sm:text-base font-semibold text-maroon/80 uppercase tracking-wider">
              What Awaits You
            </span>
            <Sparkles className="w-6 h-6 text-maroon" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading text-maroon">
            Event Highlights
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-maroon/60 mx-auto rounded-full mb-6"></div>
          
          <p className="text-maroon/80 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
            Discover what makes our Dandiya celebration an unforgettable experience filled with tradition, culture, and joy
          </p>
        </motion.div>

        {/* Highlights Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="pointer-events-auto -translate-x-1/2 sm:-translate-x-1/2 lg:-translate-x-1/2 bg-maroon/95 backdrop-blur-sm border-2 border-maroon/30 hover:bg-maroon hover:text-cream shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-cream"
              aria-label="Previous highlight"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="pointer-events-auto translate-x-1/2 sm:translate-x-1/2 lg:translate-x-1/2 bg-maroon/95 backdrop-blur-sm border-2 border-maroon/30 hover:bg-maroon hover:text-cream shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-cream"
              aria-label="Next highlight"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {eventHighlights.map((highlight, index) => (
                <div 
                  key={`highlight-${highlight.id}`}
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
                    {/* Card with same height, wider width */}
                    <div className="group h-96 sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-maroon/20 hover:border-maroon/40 transform hover:-translate-y-2 relative">
                      {/* Image fills entire card */}
                      <img
                        src={highlight.imageUrl}
                        alt={highlight.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-cream/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
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
                className="w-2 h-2 rounded-full bg-maroon/30 hover:bg-maroon/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-maroon/50"
                aria-label={`Go to highlight ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
