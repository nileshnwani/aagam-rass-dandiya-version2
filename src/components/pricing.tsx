"use client";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Pricing plan interface
interface PricingPlan {
  name: string;
  price: string;
  highlighted?: boolean;
  description?: string;
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  { name: "Early Bird", price: "₹299" },
  { name: "Premium Pass", price: "₹499", highlighted: true },
  { name: "VIP Experience", price: "₹799" },
  { name: "Group Package", price: "₹1,999" },
];

// Contact info
const contactInfo = {
  phoneNumber: "+91-98765-43210",
  bookingUrl: "https://booking.aagamrassdandiya.com",
};

// Motion variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const carouselOptions = { 
  loop: true, 
  align: "start" as const, 
  dragFree: true,
  containScroll: "trimSnaps" as const
};

const slideWidth =
  "flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]";

export default function Pricing() {
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  const handleOnlineBooking = () => window.open(contactInfo.bookingUrl, "_blank");
  const handleOfflineBooking = () => (window.location.href = `tel:${contactInfo.phoneNumber}`);

  return (
    <section className="py-2 bg-gradient-to-b from-cream to-cream/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading text-maroon">
            Ticket Options
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-maroon/60 mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-maroon/80 max-w-2xl mx-auto leading-relaxed">
            Choose your perfect pass for an unforgettable night of Dandiya and celebration
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    ...fadeIn,
                    visible: {
                      ...fadeIn.visible,
                      transition: { 
                        duration: 0.6, 
                        ease: "easeOut",
                        delay: index * 0.1
                      }
                    }
                  }}
                  className={`px-4 ${slideWidth}`}
                >
                  <Card
                    className={`group relative flex flex-col justify-between h-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                      plan.highlighted
                        ? "bg-maroon text-cream border-2 border-maroon/30 shadow-maroon/20"
                        : "bg-cream/90 text-maroon border-2 border-maroon/20 backdrop-blur-sm"
                    }`}
                  >
                    {/* Highlight Badge */}
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-maroon via-maroon/90 to-maroon/80 text-cream px-5 py-2 rounded-full text-sm font-bold shadow-lg border border-cream/20">
                          <Star className="w-4 h-4 fill-current" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pt-12 pb-6">
                      <CardTitle
                        className={`text-2xl sm:text-3xl font-bold font-heading transition-colors duration-200 ${
                          plan.highlighted 
                            ? "text-cream group-hover:text-cream/90" 
                            : "text-maroon group-hover:text-maroon/90"
                        }`}
                      >
                        {plan.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center px-6 pb-8 flex-grow">
                      {/* Price Display */}
                      <div className="mb-8 text-center">
                        <span
                          className={`text-4xl sm:text-5xl font-extrabold font-heading transition-colors duration-200 ${
                            plan.highlighted 
                              ? "text-cream group-hover:text-cream/90" 
                              : "text-maroon group-hover:text-maroon/90"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`ml-2 text-base sm:text-lg font-medium ${
                            plan.highlighted 
                              ? "text-cream/80" 
                              : "text-maroon/70"
                          }`}
                        >
                          / pass
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="w-full space-y-4 mt-auto">
                        <Button
                          onClick={handleOnlineBooking}
                          size="lg"
                          className={`w-full font-semibold text-base shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-xl ${
                            plan.highlighted
                              ? "bg-cream text-maroon hover:bg-cream/90 hover:shadow-xl border-2 border-transparent hover:border-cream/30"
                              : "bg-maroon text-cream hover:bg-maroon/90 hover:shadow-xl border-2 border-transparent hover:border-maroon/30"
                          }`}
                        >
                          Book Online
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>

                        <Button
                          onClick={handleOfflineBooking}
                          size="lg"
                          variant="outline"
                          className={`w-full font-semibold text-base transition-all duration-300 rounded-xl hover:-translate-y-0.5 ${
                            plan.highlighted
                              ? "border-2 border-cream text-cream hover:bg-cream/20 hover:border-cream/80 bg-transparent"
                              : "border-2 border-maroon text-maroon hover:bg-maroon/20 hover:border-maroon/80 bg-transparent"
                          }`}
                        >
                          Call to Book
                          <Phone className="w-4 h-4 ml-2" />
                        </Button>
                      </div>

                      {/* Decorative Element */}
                      <div className="mt-6 pt-4 border-t border-opacity-20 w-full">
                        <div className={`w-16 h-1 mx-auto rounded-full transition-all duration-300 ${
                          plan.highlighted 
                            ? "bg-gradient-to-r from-cream to-cream/60 group-hover:from-cream/90 group-hover:to-cream/40" 
                            : "bg-gradient-to-r from-maroon to-maroon/60 group-hover:from-maroon/90 group-hover:to-maroon/40"
                        }`}></div>
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
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-cream/90 hover:bg-cream text-maroon rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-maroon/20 hover:border-maroon/40 backdrop-blur-sm"
            aria-label="Previous ticket option"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-cream/90 hover:bg-cream text-maroon rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-maroon/20 hover:border-maroon/40 backdrop-blur-sm"
            aria-label="Next ticket option"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Information */}
        <motion.div
          className="text-center mt-2 pt-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-maroon/80 text-sm sm:text-base">
            Questions about pricing? Call us at{" "}
            <a 
              href={`tel:${contactInfo.phoneNumber}`}
              className="font-semibold text-maroon hover:text-maroon/80 underline decoration-maroon/40 hover:decoration-maroon/60 transition-colors duration-200"
            >
              {contactInfo.phoneNumber}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
