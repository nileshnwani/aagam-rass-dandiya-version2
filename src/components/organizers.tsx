"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// --- Component Data ---

// Data for the organizer cards
const organizers = [
  {
    name: "Jayesh Borse",
    role: "Founder",
    description: "Passionate about preserving culture and creating memorable community events.",
    image: "/team/priya-patel.jpg",
  },
  {
    name: "Subodh Tupe",
    role: "Founder",
    description: "Expert in traditional dance and music, ensuring authentic experiences.",
    image: "/team/rajesh-shah.jpg",
  },
  {
    name: "Mohit Sushir",
    role: "Proprietor",
    description: "Building bridges within the community and fostering cultural connections.",
    image: "/team/meera-desai.jpg",
  },
  {
    name: "Abhiraj Shingare",
    role: "Executive Partner",
    description: "Managing all technical aspects for a smooth and professional execution.",
    image: "/team/Abhiraajshigare.jpeg",
  },
   {
    name: "Abhijeet Sahane",
    role: "Executive Partner",
    description: "Managing all technical aspects for a smooth and professional execution.",
    image: "/team/amit-kumar.jpg",
  },
   {
    name: "Vaibhav Autade",
    role: "Executive Partner",
    description: "Managing all technical aspects for a smooth and professional execution.",
    image: "/team/VaibhavAvatade.jpg",
  }
];

// Carousel configuration
const carouselOptions = {
  loop: true,
  align: "start" as const,
  dragFree: true, // Allows for a smoother, free-scrolling feel
};

// --- Component ---

export default function Organizers() {
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-2 lg:py-2 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* -- About Us Section -- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-maroon" />
            <span className="text-sm sm:text-base font-semibold text-maroon/80 uppercase tracking-wider">
              Our Story
            </span>
            <Heart className="w-6 h-6 text-maroon" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-heading text-maroon">
            About Us
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-maroon/60 mx-auto rounded-full mb-6"></div>

          <p className="text-maroon/80 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed">
Aagam Raas Dandiya proudly welcomes you to its third annual Navratri celebration, continuing a tradition of vibrant dance, cultural festivities, and joyful community spirit.

Over the past two years, our event has become a cherished platform for bringing people together to experience the excitement and elegance of Raas and Dandiya.

This year, we invite you to join us for an even more memorable celebration, where professionalism meets festive warmth—creating an atmosphere where tradition and happiness truly flourish.
          </p>
        </motion.div>

        {/* -- Meet The Organizers Header -- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-6 h-6 text-maroon" />
            <span className="text-sm sm:text-base font-semibold text-maroon/80 uppercase tracking-wider">
              The Team Behind Magic
            </span>
            <Users className="w-6 h-6 text-maroon" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold font-heading text-maroon tracking-tight mb-4">
            Meet The Organizers
          </h3>
          
          <p className="text-maroon/80 max-w-3xl mx-auto text-base sm:text-lg">
            The passionate individuals dedicated to creating an exceptional cultural experience for you.
          </p>
        </motion.div>

        {/* -- Auto-Scrolling Carousel -- */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Removed gap-6 from flex container */}
          <div className="flex">
            {organizers.map((organizer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Added margin-right for consistent spacing including between last and first card
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] mr-6"
              >
                <Card className="h-full bg-maroon text-cream rounded-2xl shadow-lg border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center group">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <img
                        src={organizer.image}
                        alt={organizer.name}
                        className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-cream/20 shadow-md group-hover:border-cream/40 transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-xl font-bold font-heading text-cream mb-2">
                      {organizer.name}
                    </h4>
                    <p className="text-cream/80 font-semibold mb-4 text-sm">
                      {organizer.role}
                    </p>
                    <p className="text-sm text-cream/70 leading-relaxed">
                      {organizer.description}
                    </p>
                    
                    {/* Decorative Element */}
                    <div className="mt-6 pt-4 border-t border-cream/20">
                      <div className="w-12 h-1 bg-gradient-to-r from-cream to-cream/40 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* -- Bottom Stats -- */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-maroon/20"
        >
          <p className="text-maroon/70 text-sm sm:text-base">
            Bringing you <span className="font-semibold text-maroon">5+ years</span> of cultural celebration experience with{" "}
            <span className="font-semibold text-maroon">{organizers.length} dedicated team members</span>
          </p>
        </motion.div>
        */}
      </div>
    </section>
  );
}
