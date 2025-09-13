"use client";

import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

// Define sponsor interface
interface Sponsor {
  name: string;
  website: string;
  logo: string;
}

// Sponsors data
const sponsors: Sponsor[] = [
  {
    name: "TechCorp Solutions",
    website: "https://techcorp.example.com",
    logo: "/logos/techcorp.png"
  },
  {
    name: "GreenEnergy Systems",
    website: "https://greenenergy.example.com",
    logo: "/logos/greenenergy.png"
  },
  {
    name: "FastNet Communications",
    website: "https://fastnet.example.com",
    logo: "/logos/fastnet.png"
  },
  {
    name: "HealthyLiving Foods",
    website: "https://healthyliving.example.com",
    logo: "/logos/healthyliving.png"
  },
  {
    name: "CultureFest Media",
    website: "https://culturefest.example.com",
    logo: "/logos/culturefest.png"
  },
  {
    name: "EventPro Services",
    website: "https://eventpro.example.com",
    logo: "/logos/eventpro.png"
  },
  {
    name: "Local Community Bank",
    website: "https://communitybank.example.com",
    logo: "/logos/communitybank.png"
  },
  {
    name: "Heritage Restaurant",
    website: "https://heritage.example.com",
    logo: "/logos/heritage.png"
  }
];

// Motion variants with proper typing
// Motion variants with proper typing
const motionVariants = {
  fadeIn: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  },
  staggerItem: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  },
} satisfies Record<string, Variants>;


// Carousel configuration
const carouselOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true,
};

const slideWidth = "flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_25%] xl:flex-[0_0_20%]";

export default function Sponsors() {
  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  // Navigation functions
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  
  return (
    <div className="py-12 px-4 text-maroon">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={motionVariants.fadeIn}
        >
          <h2 className="text-3xl font-bold text-center tracking-tight mb-4 font-heading text-maroon animate-glow">
            Our Valued Partners & Sponsors
          </h2>
          <p className="text-maroon/80 text-center max-w-2xl mx-auto">
            We are deeply grateful for the generous support of our partners who help make this event a grand success.
          </p>
        </motion.div>
        
        {/* Sponsors Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={motionVariants.staggerItem}
                  className={`min-w-0 flex-shrink-0 px-4 ${slideWidth}`}
                >
                  <a 
                    href={sponsor.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block"
                  >
                    <Card className="h-40 flex flex-col items-center justify-center p-6 bg-cream/5 backdrop-blur-sm border border-maroon/20 rounded-xl hover:border-maroon/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="max-h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center text-xs text-maroon font-semibold">
                          Visit Site <ExternalLink className="w-3 h-3 ml-1" />
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-maroon/10 hover:bg-maroon/20 text-maroon rounded-full p-2 backdrop-blur-sm z-10 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-maroon/10 hover:bg-maroon/20 text-maroon rounded-full p-2 backdrop-blur-sm z-10 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
