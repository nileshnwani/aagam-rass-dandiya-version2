"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Image as ImageIcon, X, Calendar, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  title: string;
  thumbnail: string;
  category: string;
}

const galleryData: Record<string, GalleryItem[]> = {
  "2023": [
    {
      id: 1,
      type: "image",
      title: "Opening Ceremony 2023",
      thumbnail: "/gallery/2023/opening.jpg",
      category: "Ceremony",
    },
    {
      id: 2,
      type: "video",
      title: "Dandiya Performance 2023",
      thumbnail: "/gallery/2023/dandiya.jpg",
      category: "Performance",
    },
    {
      id: 3,
      type: "image",
      title: "Community Dancing 2023",
      thumbnail: "/gallery/2023/community.jpg",
      category: "Dancing",
    },
    {
      id: 4,
      type: "video",
      title: "Award Ceremony 2023",
      thumbnail: "/gallery/2023/awards.jpg",
      category: "Awards",
    },
    {
      id: 13,
      type: "image",
      title: "Traditional Music 2023",
      thumbnail: "/gallery/2023/music.jpg",
      category: "Music",
    },
    {
      id: 14,
      type: "video",
      title: "Cultural Exhibition 2023",
      thumbnail: "/gallery/2023/culture.jpg",
      category: "Culture",
    },
  ],
  "2024": [
    {
      id: 5,
      type: "image",
      title: "Welcome Reception 2024",
      thumbnail: "/gallery/2024/welcome.jpg",
      category: "Welcome",
    },
    {
      id: 6,
      type: "video",
      title: "Live Music Performance 2024",
      thumbnail: "/gallery/2024/music.jpg",
      category: "Music",
    },
    {
      id: 7,
      type: "image",
      title: "Traditional Food Setup 2024",
      thumbnail: "/gallery/2024/food.jpg",
      category: "Food",
    },
    {
      id: 8,
      type: "video",
      title: "Closing Ceremony 2024",
      thumbnail: "/gallery/2024/closing.jpg",
      category: "Ceremony",
    },
    {
      id: 15,
      type: "image",
      title: "Dance Competition 2024",
      thumbnail: "/gallery/2024/competition.jpg",
      category: "Competition",
    },
    {
      id: 16,
      type: "video",
      title: "Community Celebration 2024",
      thumbnail: "/gallery/2024/community.jpg",
      category: "Community",
    },
  ],
  "2025": [
    {
      id: 9,
      type: "image",
      title: "Venue Preparation 2025",
      thumbnail: "/gallery/2025/venue.png",
      category: "Venue",
    },
    {
      id: 10,
      type: "video",
      title: "Rehearsal Highlights 2025",
      thumbnail: "/gallery/2025/rehearsal.png",
      category: "Preparation",
    },
    {
      id: 11,
      type: "image",
      title: "Decorations Setup 2025",
      thumbnail: "/gallery/2025/decorations.jpg",
      category: "Venue",
    },
    {
      id: 12,
      type: "video",
      title: "Sound Check 2025",
      thumbnail: "/gallery/2025/soundcheck.png",
      category: "Technical",
    },
  ],
};

const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    Ceremony: "bg-maroon/90 text-cream border-maroon/70",
    Performance: "bg-maroon/80 text-cream border-maroon/60",
    Dancing: "bg-maroon/85 text-cream border-maroon/65",
    Awards: "bg-maroon/95 text-cream border-maroon/80",
    Music: "bg-maroon/75 text-cream border-maroon/55",
    Culture: "bg-maroon/70 text-cream border-maroon/50",
    Welcome: "bg-maroon/65 text-cream border-maroon/45",
    Food: "bg-maroon/60 text-cream border-maroon/40",
    Competition: "bg-maroon text-cream border-maroon/90",
    Community: "bg-maroon/55 text-cream border-maroon/35",
    Venue: "bg-maroon/50 text-cream border-maroon/30",
    Preparation: "bg-maroon/45 text-cream border-maroon/25",
    Technical: "bg-maroon/40 text-cream border-maroon/20",
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

const slideWidth = "flex-[0_0_280px] sm:flex-[0_0_300px] md:flex-[0_0_320px] lg:flex-[0_0_340px]";

export default function PastEventGallery() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Initialize Embla Carousel for each year
  const [emblaRef2023, emblaApi2023] = useEmblaCarousel(carouselOptions);
  const [emblaRef2024, emblaApi2024] = useEmblaCarousel(carouselOptions);
  const [emblaRef2025, emblaApi2025] = useEmblaCarousel(carouselOptions);

  const currentGallery = galleryData[selectedYear] || [];
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
      }, 3000 + (index * 500)); // Stagger the auto-scroll timing
      
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
    <section className="py-2 lg:py-1 bg-cream">
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
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-maroon" />
            <span className="text-xs sm:text-base font-semibold text-maroon/80 uppercase tracking-wider">
              Memories Through Time
            </span>
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-maroon" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-heading text-maroon">
            Past Event Gallery
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-maroon to-maroon/60 mx-auto rounded-full mb-4 sm:mb-6"></div>

          <p className="text-maroon/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-xl leading-relaxed mb-2 px-2">
            Explore photos and videos from our previous celebrations and current preparations for the upcoming event.
          </p>

          <div className="inline-flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-maroon/70">
            <div className="flex items-center gap-1 sm:gap-2">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{Object.keys(galleryData).length} Years</span>
            </div>
            <div className="w-1 h-1 bg-maroon/40 rounded-full"></div>
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
              <TabsList className="bg-cream/60 border-2 border-maroon/20 rounded-xl sm:rounded-2xl p-1 sm:p-2 backdrop-blur-sm">
                {Object.keys(galleryData).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="data-[state=active]:bg-maroon data-[state=active]:text-cream data-[state=inactive]:text-maroon hover:bg-maroon/10 transition-all duration-300 rounded-lg sm:rounded-xl px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold"
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
                        className="pointer-events-auto -translate-x-1/2 bg-cream/95 backdrop-blur-sm border-2 border-maroon/30 hover:bg-cream hover:text-maroon shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-maroon"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Button
                        onClick={scrollNext}
                        variant="outline"
                        size="icon"
                        className="pointer-events-auto translate-x-1/2 bg-cream/95 backdrop-blur-sm border-2 border-maroon/30 hover:bg-cream hover:text-maroon shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-maroon"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  )}

                  {/* Embla Carousel Container */}
                  <div className="overflow-hidden" ref={getEmblaRef(year)}>
                    <div className="flex">
                      {galleryData[year].map((item, index) => (
                        <div 
                          key={item.id}
                          className={`${slideWidth} pl-4 sm:pl-6 first:pl-0 last:pr-4 sm:last:pr-6`}
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
                            className="h-full group cursor-pointer"
                            onClick={() => setSelectedItem(item)}
                          >
                            <Card className="h-full hover:shadow-2xl transition-all duration-500 border-2 border-maroon/20 bg-cream/80 backdrop-blur-sm hover:border-maroon/40 transform hover:-translate-y-2 hover:bg-cream/90">
                              {/* Image Container */}
                              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                                <div
                                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                                  style={{
                                    backgroundImage: `linear-gradient(rgba(104, 6, 5, 0.1), rgba(104, 6, 5, 0.3)), url(${item.thumbnail})`,
                                  }}
                                >
                                  {/* Play/View Overlay */}
                                  <div className="absolute inset-0 flex items-center justify-center bg-maroon/0 group-hover:bg-maroon/10 transition-all duration-300">
                                    <div className="bg-cream/20 backdrop-blur-sm rounded-full p-2 sm:p-3 group-hover:bg-cream/30 group-hover:scale-110 transition-all duration-300 border border-cream/30">
                                      {item.type === "video" ? (
                                        <Play className="w-4 h-4 sm:w-6 sm:h-6 text-cream drop-shadow-lg" />
                                      ) : (
                                        <ImageIcon className="w-4 h-4 sm:w-6 sm:h-6 text-cream drop-shadow-lg" />
                                      )}
                                    </div>
                                  </div>

                                  {/* Year Badge */}
                                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                                    <Badge className="bg-maroon/90 text-cream border border-maroon/70 shadow-lg backdrop-blur-sm text-xs">
                                      {year}
                                    </Badge>
                                  </div>

                                  {/* Category Badge */}
                                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3">
                                    <Badge 
                                      className={`${getCategoryColor(item.category)} border text-xs font-semibold px-2 sm:px-3 py-1 shadow-lg backdrop-blur-sm`}
                                    >
                                      {item.category}
                                    </Badge>
                                  </div>

                                  {/* Type Indicator */}
                                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${item.type === 'video' ? 'bg-red-400' : 'bg-green-400'} shadow-lg border border-cream/50`}></div>
                                  </div>
                                </div>
                              </div>

                              {/* Content */}
                              <CardContent className="p-3 sm:p-4">
                                <h3 className="font-semibold text-maroon group-hover:text-maroon/80 transition-colors duration-200 leading-tight line-clamp-2 text-sm sm:text-base">
                                  {item.title}
                                </h3>
                                <div className="mt-2 pt-2 border-t border-maroon/10">
                                  <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-maroon to-maroon/40 rounded-full group-hover:w-8 sm:group-hover:w-12 transition-all duration-300"></div>
                                </div>
                              </CardContent>
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
                          className="w-2 h-2 rounded-full bg-maroon/30 hover:bg-maroon/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-maroon/50"
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Auto-scroll Status */}
                {/* <div className="flex justify-center mt-2 sm:mt-4">
                    <div className="flex items-center gap-2 text-xs text-maroon/60 bg-cream/60 backdrop-blur-sm px-3 py-1 rounded-full border border-maroon/20">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span>Auto-scrolling active • Use arrows for manual control</span>
                    </div>
                  </div>
                  */}
                </motion.div>

                {/* Year Summary */}
                 {/*
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center pt-6 sm:pt-8 border-t border-maroon/20"
                >
                  <p className="text-maroon/70 text-xs sm:text-sm">
                    {year === "2025" ? "Preparation" : "Memories"} from{" "}
                    <span className="font-semibold text-maroon">{year}</span> •{" "}
                    {galleryData[year].length} items
                  </p>
                </motion.div>
                */}
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
            className="fixed inset-0 bg-maroon/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-cream/95 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-maroon/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(104, 6, 5, 0.1), rgba(104, 6, 5, 0.2)), url(${selectedItem.thumbnail})`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-cream/30 backdrop-blur-sm rounded-full p-3 sm:p-4 border border-cream/50">
                      {selectedItem.type === "video" ? (
                        <Play className="w-8 h-8 sm:w-12 sm:h-12 text-cream drop-shadow-lg" />
                      ) : (
                        <ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 text-cream drop-shadow-lg" />
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-cream/30 backdrop-blur-sm rounded-full p-2 hover:bg-cream/40 transition-all duration-200 border border-cream/50 group"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-cream group-hover:text-maroon transition-colors" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Badge className="bg-maroon text-cream border border-maroon/70 text-xs">
                    {selectedYear}
                  </Badge>
                  <Badge className={`${getCategoryColor(selectedItem.category)} border text-xs`}>
                    {selectedItem.category}
                  </Badge>
                  <Badge variant="outline" className="border-maroon/30 text-maroon text-xs">
                    {selectedItem.type === "video" ? "Video" : "Image"}
                  </Badge>
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-maroon mb-2 sm:mb-3 font-heading">
                  {selectedItem.title}
                </h3>
                
                <p className="text-maroon/80 text-sm sm:text-base leading-relaxed">
                  {selectedItem.type === "video" 
                    ? "Experience this memorable moment from our past celebrations" 
                    : "A captured moment from our vibrant Dandiya celebrations"
                  }
                </p>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-maroon/20">
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-maroon to-maroon/40 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
