"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./countdown-timer";
import { theme, motionVariants, carouselConfig } from "@/lib/theme-utils";

// Hero slider data defined directly in component
const heroSlider = [
  {
    image: "/aagambgdekstop.jpeg",
    title: "आ",
    subtitle: "Aarambh",
    description: "The sacred beginning of rhythm and devotion.\n\nWhere every step carries faith and celebration.\n\nAarambh of Aagam Dandiya."
  },
  {
    image: "/aagambgdekstop.jpeg",
    title: "ग",
    subtitle: "Garba",
    description: "The heartbeat of tradition and togetherness.\n\nCircles of joy that unite every soul.\n\nGarba, the spirit of Aagam Dandiya."
  },
  {
    image: "/aagambgdekstop.jpeg",
    title: "म",
    subtitle: "Mahotsav",
    description: "A grand festival of culture and unity.\n\nWhere devotion meets dance in its purest form.\n\nMahotsav begins with Aagam Dandiya"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselConfig.autoScroll.enabled) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlider.length);
    }, carouselConfig.autoScroll.interval);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlider.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlider.length) % heroSlider.length);
  };

  // Parse description into separate lines with proper typing
  const getDescriptionLines = (description: string): string[] => {
    if (!description) return [];
    return description.split('\n\n').filter((line: string) => line.trim() !== '');
  };

  const currentDescriptionLines = getDescriptionLines(heroSlider[currentSlide]?.description || '');

  return (
    <div className="relative w-full h-screen overflow-hidden bg-maroon">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(104, 6, 5, 0.7), rgba(104, 6, 5, 0.7)), url(${heroSlider[currentSlide].image})`,
            }}
          >
            {/* Enhanced centering container with additional top margin/padding */}
            <div className="flex items-center justify-center min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 lg:-mt-24">
              <div className="w-full max-w-4xl xl:max-w-5xl mx-auto pt-8 sm:pt-12 lg:pt-16">
                {/* Content container with perfect centering */}
                <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
                  {/* Title with enhanced responsive sizing */}
                  <motion.h1
                    initial={motionVariants.slideDown.hidden}
                    animate={motionVariants.slideDown.visible}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold leading-none"
                    style={{ color: '#F9EBC8' }}
                  >
                    {heroSlider[currentSlide].title}
                  </motion.h1>
                  
                  {/* Main subtitle with enhanced responsive sizing */}
                  <motion.h2
                    initial={motionVariants.slideUp.hidden}
                    animate={motionVariants.slideUp.visible}
                    transition={{ delay: 0.3 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight"
                    style={{ color: '#F6A440' }}
                  >
                    {heroSlider[currentSlide].subtitle}
                  </motion.h2>
                  
                  {/* Description container with perfect centering */}
                  <div className="w-full max-w-3xl mx-auto space-y-1 sm:space-y-2">
                    {currentDescriptionLines.map((line: string, index: number) => (
                      <motion.p
                        key={index}
                        initial={motionVariants.fadeIn.hidden}
                        animate={motionVariants.fadeIn.visible}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className="font-heading font-medium leading-tight text-sm sm:text-lg md:text-xl text-white text-center"
                        style={{ 
                          lineHeight: '1.25'
                        }}
                      >
                        {line}
                      </motion.p>
                    ))}
                  </div>
                  
                  {/* Button with enhanced centering */}
                  <motion.div
                    initial={motionVariants.fadeIn.hidden}
                    animate={motionVariants.fadeIn.visible}
                    transition={{ delay: 0.8 }}
                    className="pt-4 sm:pt-6"
                  >
                 {/*    <Button
                      size="lg"
                      className="festive-button-inverse text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6 rounded-full animate-glow"
                      onClick={() => {
                        const pricingSection = document.getElementById('pricing');
                        if (pricingSection) {
                          pricingSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Book Your Pass Now
                    </Button>*/}
                  </motion.div>
                  
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Enhanced positioning */}
      <button
        onClick={prevSlide}
        className={`${carouselConfig.navigationButtons.light.button} ${carouselConfig.navigationButtons.light.prev} z-10`}
      >
        <ChevronLeft size={24} className="text-cream" />
      </button>
      <button
        onClick={nextSlide}
        className={`${carouselConfig.navigationButtons.light.button} ${carouselConfig.navigationButtons.light.next} z-10`}
      >
        <ChevronRight size={24} className="text-cream" />
      </button>

      {/* Dots Indicator - Enhanced centering */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 z-10">
        {heroSlider.map((_, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-cream" : "bg-cream/50"
            }`}
          />
        ))}
      </div>

      {/* Countdown Timer - Enhanced centering */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-10">
        <CountdownTimer />
      </div>
    </div>
  );
}
