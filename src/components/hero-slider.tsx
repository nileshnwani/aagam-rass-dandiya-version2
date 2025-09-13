"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./countdown-timer";
import { theme, motionVariants, carouselConfig } from "@/lib/theme-utils";
import { siteConfig } from "@/config/site-config";

// Use slides from site config
const slides = siteConfig.heroSlider;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselConfig.autoScroll.enabled) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, carouselConfig.autoScroll.interval);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(104, 6, 5, 0.7), rgba(104, 6, 5, 0.7)), url(${slides[currentSlide].image})`,
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-cream px-4 max-w-4xl">
                <motion.h1
                  initial={motionVariants.slideDown.hidden}
                  animate={motionVariants.slideDown.visible}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={motionVariants.slideUp.hidden}
                  animate={motionVariants.slideUp.visible}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl mb-2 text-cream/90 font-heading"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={motionVariants.fadeIn.hidden}
                  animate={motionVariants.fadeIn.visible}
                  transition={{ delay: 0.8 }}
                  className="mt-8"
                >
                  <Button
                    size="lg"
                    className="festive-button-inverse text-lg px-8 py-6 rounded-full animate-glow"
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing');
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Book Your Pass Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`${carouselConfig.navigationButtons.light.button} ${carouselConfig.navigationButtons.light.prev}`}
      >
        <ChevronLeft size={24} className="text-cream" />
      </button>
      <button
        onClick={nextSlide}
        className={`${carouselConfig.navigationButtons.light.button} ${carouselConfig.navigationButtons.light.next}`}
      >
        <ChevronRight size={24} className="text-cream" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-cream" : "bg-cream/50"
            }`}
          />
        ))}
      </div>

      {/* Countdown Timer */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
        <CountdownTimer />
      </div>
    </div>
  );
}
