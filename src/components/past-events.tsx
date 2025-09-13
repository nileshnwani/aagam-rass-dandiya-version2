"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motionVariants } from "@/lib/theme-utils";
import { siteConfig } from "@/config/site-config";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Get past events data from site config
const pastEvents = siteConfig.pastEvents;

export default function PastEvents() {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true
  });

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 6000);
    
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Navigation functions
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="py-10 bg-maroon text-cream px-4 relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {pastEvents.map((event, index) => (
        <motion.div
          key={event.year}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionVariants.staggerItem}
          className="group min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 first:pl-0"
        >
          <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-cream/20 premium-card">
            {/* Banner Image with Overlay */}
            <div className="relative h-64 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: `linear-gradient(rgba(104, 6, 5, 0.5), rgba(104, 6, 5, 0.7)), url(${event.imageUrl || `/gallery/${event.year}/main.jpg`})`,
                }}
              >
                {/* Year Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-cream text-maroon px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    {event.year}
                  </span>
                </div>
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-cream text-xl font-bold font-heading tracking-tight drop-shadow-lg">
                    {event.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <CardHeader className="pb-2 px-6 pt-6">
              <CardTitle className="text-lg sm:text-xl font-bold text-cream font-heading tracking-tight">
                {event.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="px-6 pb-6 space-y-5">
              {/* Description */}
              <p className="text-cream/80 text-sm leading-relaxed">
                {event.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {event.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="bg-cream/10 text-cream px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-cream/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link href="/event-details">
                  <Button className="w-full festive-button-inverse font-semibold tracking-wide py-2 rounded-xl shadow-md hover:shadow-lg group transition-all animate-glow">
                    View Event Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-cream/80 text-maroon rounded-full p-2 shadow-md z-10 hover:bg-cream transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-cream/80 text-maroon rounded-full p-2 shadow-md z-10 hover:bg-cream transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
