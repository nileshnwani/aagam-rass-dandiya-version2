"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Image as ImageIcon, X, ChevronLeft, ChevronRight, Sparkles, Camera } from "lucide-react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import React from "react";

// Define proper types
interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  year: string;
  type: 'image' | 'video';
  videoSrc?: string;
  id: number;
}

// Gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/2024/2024-1.jpg",
    alt: "Traditional Dandiya Performance",
    category: "Dandiya",
    year: "2024",
    type: "image"
  },
  {
    id: 2,
    src: "/gallery/2024/2024-2.jpg",
    alt: "Colorful Garba Dance",
    category: "Garba",
    year: "2024",
    type: "image"
  },
  {
    id: 3,
    src: "/gallery/2024/2024-3.jpg",
    alt: "Opening Ceremony Aarti",
    category: "Ceremony",
    year: "2024",
    type: "image"
  },
  {
    id: 4,
    src: "/gallery/2024/2024-4.jpg",
    alt: "Cultural Performance",
    category: "Performance",
    year: "2024",
    type: "image"
  },
  {
    id: 5,
    src: "/gallery/2024/2024-5.jpg",
    alt: "Dandiya Night Highlights",
    category: "Dandiya",
    year: "2024",
    type: "video",
    videoSrc: "/videos/dandiya-highlights.mp4"
  },
  {
    id: 6,
    src: "/gallery/2024/2024-6",
    alt: "Garba Circle Formation",
    category: "Garba",
    year: "2024",
    type: "image"
  },
  {
    id: 7,
    src: "/gallery/2023/dandiya.jpg",
    alt: "Dandiya Raas Competition",
    category: "Dandiya",
    year: "2023",
    type: "video",
    videoSrc: "/videos/dandiya-competition.mp4"
  },
  {
    id: 8,
    src: "/gallery/2023/awards.jpg",
    alt: "Traditional Welcome Ceremony",
    category: "Ceremony",
    year: "2023",
    type: "image"
  },
  {
    id: 9,
    src: "/gallery/2024/cultural-show.jpg",
    alt: "Cultural Exhibition Display",
    category: "Culture",
    year: "2024",
    type: "image"
  },
  {
    id: 10,
    src: "/gallery/2024/food-festival.jpg",
    alt: "Gujarati Food Festival",
    category: "Food",
    year: "2024",
    type: "image"
  }
];

// Categories
const categories = ["All", "Dandiya", "Garba", "Ceremony", "Performance", "Culture", "Food"];

// Carousel configuration for smooth auto-scroll
const carouselOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true,
  containScroll: "trimSnaps" as const,
};

const slideWidth = "flex-[0_0_95%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_45%] xl:flex-[0_0_30%]";

// Function to get max items per row based on screen size
const getMaxItemsPerRow = () => {
  if (typeof window === 'undefined') return 4;
  
  const width = window.innerWidth;
  if (width >= 1280) return 4; // xl: 30% each = ~3.3 items visible, so 4 max
  if (width >= 1024) return 3; // lg: 45% each = ~2.2 items visible, so 3 max  
  if (width >= 768) return 2;  // md: 60% each = ~1.6 items visible, so 2 max
  if (width >= 640) return 2;  // sm: 80% each = ~1.25 items visible, so 2 max
  return 1; // mobile: 95% each = ~1.05 items visible, so 1 max
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [maxItemsPerRow, setMaxItemsPerRow] = useState(4);

  // Initialize Embla Carousels for two rows
  const [emblaRef1, emblaApi1] = useEmblaCarousel(carouselOptions);
  const [emblaRef2, emblaApi2] = useEmblaCarousel(carouselOptions);

  // Update max items per row on resize
  useEffect(() => {
    const handleResize = () => {
      setMaxItemsPerRow(getMaxItemsPerRow());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const scrollPrev1 = useCallback(() => emblaApi1?.scrollPrev(), [emblaApi1]);
  const scrollNext1 = useCallback(() => emblaApi1?.scrollNext(), [emblaApi1]);
  const scrollPrev2 = useCallback(() => emblaApi2?.scrollPrev(), [emblaApi2]);
  const scrollNext2 = useCallback(() => emblaApi2?.scrollNext(), [emblaApi2]);

  // Auto-scroll functionality for first row
  useEffect(() => {
    if (!emblaApi1) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi1.canScrollNext()) {
        emblaApi1.scrollNext();
      } else {
        emblaApi1.scrollTo(0);
      }
    }, 4000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi1]);

  // Auto-scroll functionality for second row (reverse direction)
  useEffect(() => {
    if (!emblaApi2) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi2.canScrollPrev()) {
        emblaApi2.scrollPrev();
      } else {
        emblaApi2.scrollTo(emblaApi2.slideNodes().length - 1);
      }
    }, 4000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi2]);

  // Reset carousel position when category changes
  useEffect(() => {
    emblaApi1?.scrollTo(0);
    emblaApi2?.scrollTo(0);
  }, [selectedCategory, emblaApi1, emblaApi2]);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  // Smart row logic - fill row one first, then show row two
  const shouldShowSecondRow = filteredItems.length > maxItemsPerRow;
  const firstRowItems = shouldShowSecondRow 
    ? filteredItems.slice(0, maxItemsPerRow) 
    : filteredItems;
  const secondRowItems = shouldShowSecondRow 
    ? filteredItems.slice(maxItemsPerRow) 
    : [];

  // Fixed TypeScript error by properly typing emblaRef parameter
  const renderGalleryRow = (
    items: GalleryItem[], 
    emblaRef: React.RefCallback<HTMLDivElement>, 
    rowNumber: number
  ) => (
    <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
      <div className="flex">
        <AnimatePresence mode="wait">
          {items.map((item, index) => (
            <div 
              key={`row${rowNumber}-${item.id}`}
              className={`${slideWidth} pl-4 first:pl-0 last:pr-4`}
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-cream/20 hover:border-cream/40 h-72 bg-cream/5 backdrop-blur-sm transform hover:-translate-y-2"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/95 via-maroon/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
                
                {/* Play/View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-cream/30 backdrop-blur-md rounded-full p-4 group-hover:scale-110 transition-transform duration-300 border border-cream/40 shadow-lg">
                    {item.type === "video" ? 
                      <Play className="w-8 h-8 text-cream drop-shadow-lg" /> : 
                      <ImageIcon className="w-8 h-8 text-cream drop-shadow-lg" />
                    }
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-cream/95 text-maroon font-semibold border border-cream/20 shadow-sm">
                      {item.category}
                    </Badge>
                    <Badge variant="outline" className="text-cream border-cream/50 bg-cream/10 backdrop-blur-sm">
                      {item.year}
                    </Badge>
                  </div>
                  <h3 className="font-bold font-heading text-cream text-lg sm:text-xl tracking-tight drop-shadow-lg leading-tight">
                    {item.alt}
                  </h3>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-cream to-cream/40 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* Type Indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full shadow-lg border-2 border-cream/50 ${
                    item.type === 'video' ? 'bg-red-400' : 'bg-green-400'
                  }`}></div>
                </div>
              </motion.div>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );

  const renderNavigationButtons = (scrollPrev: () => void, scrollNext: () => void, rowLabel: string) => (
    <div className="flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
      <Button
        onClick={scrollPrev}
        variant="outline"
        size="icon"
        className="pointer-events-auto -translate-x-1/2 bg-cream/95 backdrop-blur-sm border-2 border-cream/30 hover:bg-cream hover:text-maroon shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-maroon"
        aria-label={`Previous ${rowLabel}`}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>
      <Button
        onClick={scrollNext}
        variant="outline"
        size="icon"
        className="pointer-events-auto translate-x-1/2 bg-cream/95 backdrop-blur-sm border-2 border-cream/30 hover:bg-cream hover:text-maroon shadow-lg hover:shadow-xl transition-all duration-300 rounded-full text-maroon"
        aria-label={`Next ${rowLabel}`}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </Button>
    </div>
  );

  return (
    <section className="py-2 lg:py-6 px-2 bg-maroon">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-2"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-cream" />
            <span className="text-sm sm:text-base font-semibold text-cream/80 uppercase tracking-wider">
              Captured Moments
            </span>
            <Camera className="w-6 h-6 text-cream" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading text-cream">
            2025 Highlights
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cream to-cream/60 mx-auto rounded-full mb-6"></div>

          <p className="text-cream/80 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
            Explore the vibrant moments and cherished memories from our celebrations
          </p>

          <div className="inline-flex items-center gap-4 text-sm text-cream/70">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{galleryItems.length} Memories</span>
            </div>
            <div className="w-1 h-1 bg-cream/40 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span>{categories.length - 1} Categories</span>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-cream/10 backdrop-blur-sm rounded-2xl p-2 border border-cream/20">
            <div className="flex flex-wrap justify-center gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="relative px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cream/50 hover:scale-105"
                >
                  <span className={`relative z-10 transition-colors duration-200 ${
                    selectedCategory === category ? 'text-maroon' : 'text-cream hover:text-cream/80'
                  }`}>
                    {category}
                    {category !== "All" && (
                      <span className="ml-1 text-xs opacity-70">
                        ({galleryItems.filter(item => item.category === category).length})
                      </span>
                    )}
                  </span>
                  {selectedCategory === category && (
                    <motion.span
                      layoutId="category-background"
                      className="absolute inset-0 rounded-xl bg-cream shadow-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Carousel - First Row (Always Shown) */}
        <motion.div 
          className={`relative ${shouldShowSecondRow ? 'mb-8' : ''}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Navigation Buttons */}
          {renderNavigationButtons(scrollPrev1, scrollNext1, "images")}
          {renderGalleryRow(firstRowItems, emblaRef1, 1)}
          
          {/* Progress Indicators for Row 1 */}
          <div className="flex justify-center mt-6 gap-2">
            {firstRowItems.map((_, index) => (
              <button
                key={`indicator-row1-${index}`}
                onClick={() => emblaApi1?.scrollTo(index)}
                className="w-2 h-2 rounded-full bg-cream/30 hover:bg-cream/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50"
                aria-label={`Go to image ${index + 1} in first row`}
              />
            ))}
          </div>
        </motion.div>

        {/* Gallery Carousel - Second Row (Conditional) */}
        {shouldShowSecondRow && (
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Navigation Buttons */}
            {renderNavigationButtons(scrollPrev2, scrollNext2, "more images")}
            {renderGalleryRow(secondRowItems, emblaRef2, 2)}
            
            {/* Progress Indicators for Row 2 */}
            <div className="flex justify-center mt-6 gap-2">
              {secondRowItems.map((_, index) => (
                <button
                  key={`indicator-row2-${index}`}
                  onClick={() => emblaApi2?.scrollTo(index)}
                  className="w-2 h-2 rounded-full bg-cream/30 hover:bg-cream/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50"
                  aria-label={`Go to image ${index + 1} in second row`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Enhanced Modal for Selected Item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-maroon/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-cream/98 backdrop-blur-sm rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col border-2 border-cream/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full bg-maroon/10">
                {selectedItem.type === 'video' ? (
                  <video
                    src={selectedItem.videoSrc}
                    className="w-full h-full object-contain rounded-t-2xl"
                    autoPlay
                    loop
                    muted
                    controls
                    poster={selectedItem.src}
                  />
                ) : (
                  <img 
                    src={selectedItem.src} 
                    alt={selectedItem.alt} 
                    className="w-full h-full object-contain rounded-t-2xl"
                  />
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-maroon/30 backdrop-blur-sm rounded-full p-3 hover:bg-maroon/40 transition-all duration-200 border border-maroon/50 group"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-cream group-hover:text-cream/80 transition-colors" />
                </button>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-maroon text-cream border border-maroon/70 font-semibold px-3 py-1.5">
                    {selectedItem.year}
                  </Badge>
                  <Badge className="bg-maroon/90 text-cream border border-maroon/60 font-semibold px-3 py-1.5">
                    {selectedItem.category}
                  </Badge>
                  <Badge variant="outline" className="border-maroon/30 text-maroon font-medium">
                    {selectedItem.type === "video" ? "Video" : "Image"}
                  </Badge>
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-maroon mb-4 font-heading leading-tight">
                  {selectedItem.alt}
                </h3>
                
                <p className="text-maroon/80 text-base sm:text-lg leading-relaxed">
                  {selectedItem.type === "video" 
                    ? "Experience this memorable moment from our vibrant celebrations through this captured video." 
                    : "A beautiful moment frozen in time, showcasing the joy and spirit of our traditional celebrations."
                  }
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-maroon/20">
                  <div className="w-16 h-1 bg-gradient-to-r from-maroon to-maroon/40 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
