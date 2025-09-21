"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Image as ImageIcon, X, Calendar, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
}

const galleryData: Record<string, GalleryItem[]> = {
  "2023": [
    {
      id: 1,
      type: "image",
      src: "/gallery/2023/2023-1.JPG",
    },
    {
      id: 2,
      type: "video",
      src: "/gallery/2023/2023-2.jpg",
    },
    {
      id: 3,
      type: "image", 
      src: "/gallery/2023/2023-4.JPG",
    },
    {
      id: 4,
      type: "video",
      src: "/gallery/2023/2023-5.JPG",
    },
    {
      id: 6,
      type: "video",
      src: "/gallery/2023/culture.JPG",
    },
  ],
  "2024": [
    {
      id: 7,
      type: "image",
      src: "/gallery/2024/2024-1.JPG",
    },
    {
      id: 8,
      type: "image",
      src: "/gallery/2024/2024-2.JPG",
    },
    {
      id: 9,
      type: "image",
      src: "/gallery/2024/2024-3.JPG",
    },
    {
      id: 10,
      type: "image",
      src: "/gallery/2024/2024-4.JPG",
    },
    {
      id: 11,
      type: "image",
      src: "/gallery/2024/2024-5.JPG",
    },
    {
      id: 12,
      type: "image",
      src: "/gallery/2024/2024-6.JPG",
    },
  ],
  "2025": [
    {
      id: 13,
      type: "image",
      src: "/gallery/2025/2024-6.JPG",
    },
    {
      id: 14,
      type: "video",
      src: "/gallery/2025/rehearsal.png",
    }
  ],
};

// Carousel configuration
const carouselOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

// Fixed slide widths for better mobile responsiveness
const slideWidth = "flex-[0_0_85%] sm:flex-[0_0_360px] md:flex-[0_0_400px] lg:flex-[0_0_440px] xl:flex-[0_0_480px]";

export default function PastEventGallery() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Initialize Embla Carousel for each year
  const [emblaRef2023, emblaApi2023] = useEmblaCarousel(carouselOptions);
  const [emblaRef2024, emblaApi2024] = useEmblaCarousel(carouselOptions);
  const [emblaRef2025, emblaApi2025] = useEmblaCarousel(carouselOptions);

  const totalItems = Object.values(galleryData).flat().length;

  // Get current embla API based on selected year
  const getCurrentEmblaApi = () => {
    switch (selectedYear) {
      case "2023": return emblaApi2023;
      case "2024": return emblaApi2024;
      case "2025": return emblaApi2025;
      default: return null;
    }
  };

  // Navigation functions
  const scrollPrev = useCallback(() => {
    const api = getCurrentEmblaApi();
    api?.scrollPrev();
  }, [selectedYear, emblaApi2023, emblaApi2024, emblaApi2025]);

  const scrollNext = useCallback(() => {
    const api = getCurrentEmblaApi();
    api?.scrollNext();
  }, [selectedYear, emblaApi2023, emblaApi2024, emblaApi2025]);

  // Auto-scroll functionality for all galleries
  useEffect(() => {
    const apis = [emblaApi2023, emblaApi2024, emblaApi2025];
    const years = ["2023", "2024", "2025"];
    const intervals: NodeJS.Timeout[] = [];

    apis.forEach((api, index) => {
      if (!api || galleryData[years[index]].length <= 1) return;
      
      const autoplay = setInterval(() => {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, 3000 + (index * 500));
      
      intervals.push(autoplay);
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [emblaApi2023, emblaApi2024, emblaApi2025]);

  // Get embla ref based on year
  const getEmblaRef = (year: string) => {
    switch (year) {
      case "2023": return emblaRef2023;
      case "2024": return emblaRef2024;
      case "2025": return emblaRef2025;
      default: return emblaRef2025;
    }
  };

  return (
    <section className="py-2 lg:py-1 bg-maroon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-cream" />
            <span className="text-xs sm:text-base font-semibold text-cream/80 uppercase tracking-wider">
              Memories Through Time
            </span>
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-cream" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-heading text-cream">
            Past Event Gallery
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cream to-cream/60 mx-auto rounded-full mb-4 sm:mb-6"></div>

          <p className="text-cream/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-xl leading-relaxed mb-2 px-2">
            Explore photos and videos from our previous celebrations and current preparations for the upcoming event.
          </p>

          <div className="inline-flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-cream/70">
            <div className="flex items-center gap-1 sm:gap-2">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{Object.keys(galleryData).length} Years</span>
            </div>
            <div className="w-1 h-1 bg-cream/40 rounded-full"></div>
            <div className="flex items-center gap-1 sm:gap-2">
              <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{totalItems} Items</span>
            </div>
          </div>
        </motion.div>

        {/* Gallery Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
            {/* Year Selector */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <TabsList className="bg-maroon/60 border-2 border-cream/20 rounded-xl sm:rounded-2xl p-1 sm:p-2 backdrop-blur-sm">
                {Object.keys(galleryData).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="data-[state=active]:bg-cream data-[state=active]:text-maroon data-[state=inactive]:text-cream hover:bg-cream/10 transition-all duration-300 rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold"
                  >
                    {year}
                    <span className="ml-1 sm:ml-2 text-xs opacity-70">
                      ({galleryData[year].length})
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Gallery Content */}
            {Object.keys(galleryData).map((year) => (
              <TabsContent key={year} value={year} className="space-y-4 sm:space-y-6">
                <motion.div
                  key={`${year}-content`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Navigation Buttons */}
                  {galleryData[year].length > 1 && (
                    <div className="flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
                      <Button
                        onClick={scrollPrev}
                        variant="outline"
                        size="icon"
                        className="pointer-events-auto -translate-x-1/2 bg-maroon/95 backdrop-blur-sm border-2 border-cream/30 hover:bg-maroon hover:text-cream shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-cream"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Button
                        onClick={scrollNext}
                        variant="outline"
                        size="icon"
                        className="pointer-events-auto translate-x-1/2 bg-maroon/95 backdrop-blur-sm border-2 border-cream/30 hover:bg-maroon hover:text-cream shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-cream"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  )}

                  {/* Embla Carousel Container - Fixed for mobile */}
                  <div className="overflow-hidden -mx-4 sm:mx-0" ref={getEmblaRef(year)}>
                    <div className="flex">
                      {galleryData[year].map((item, index) => (
                        <div 
                          key={item.id}
                          className={`${slideWidth} px-2 sm:pl-6 sm:first:pl-0 sm:last:pr-6 sm:pr-0`}
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
                            className="h-full cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                          >
                            {/* Responsive card heights */}
                            <Card className="h-56 sm:h-64 md:h-72 lg:h-80 xl:h-88 overflow-hidden rounded-2xl p-0 border-2 border-cream/20 bg-maroon/80 backdrop-blur-sm hover:border-cream/40 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                              <div
                                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-110"
                                style={{
                                  backgroundImage: `url(${item.src})`,
                                }}
                              />
                            </Card>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  {galleryData[year].length > 1 && (
                    <div className="flex justify-center mt-4 sm:mt-6 gap-2">
                      {galleryData[year].map((_, index) => (
                        <button
                          key={`indicator-${year}-${index}`}
                          onClick={() => {
                            const api = getCurrentEmblaApi();
                            api?.scrollTo(index);
                          }}
                          className="w-2 h-2 rounded-full bg-cream/30 hover:bg-cream/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50"
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>

      {/* Modal for viewing items */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-cream/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-maroon/95 backdrop-blur-sm rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border-2 border-cream/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${selectedItem.src})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-maroon/30 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-maroon/50">
                      {selectedItem.type === "video" ? (
                        <Play className="w-8 h-8 sm:w-12 sm:h-12 text-maroon drop-shadow-lg" />
                      ) : (
                        <ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 text-maroon drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-maroon/30 backdrop-blur-sm rounded-full p-2 hover:bg-maroon/40 transition-all duration-200 border border-maroon/50 group"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-maroon group-hover:text-cream transition-colors" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
