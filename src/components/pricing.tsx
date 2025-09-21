"use client";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink, Star, ChevronLeft, ChevronRight, MapPin, Instagram } from "lucide-react";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Pricing plan interface
interface PricingPlan {
  name: string;
  seasonPrice: string;
  dayPrice: string;
  highlighted?: boolean;
  description?: string;
}

// Pricing plans data matching the image
const pricingPlans: PricingPlan[] = [
  { name: "COUPLE", seasonPrice: "2499", dayPrice: "1499", highlighted: true },
  { name: "FEMALE STAG", seasonPrice: "1499", dayPrice: "899" },
  { name: "GROUP OF 5", seasonPrice: "6999", dayPrice: "3999" },
  { name: "GROUP OF 7", seasonPrice: "9999", dayPrice: "5999" },
  { name: "GROUP OF 9", seasonPrice: "11999", dayPrice: "6999" },
];

// Contact info from the image
const contactInfo = {
  phoneNumbers: ["+91 7499575996", "+91 94216 92022"],
  location: "HYATT PLACE, CHH, SAMBHAJINAGAR",
  instagram: "aagamevents_2025",
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
  "flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_60%] lg:flex-[0_0_45%] xl:flex-[0_0_33.333%]";

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
  const handleOfflineBooking = () => (window.location.href = `tel:${contactInfo.phoneNumbers[0]}`);

  const handleInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram}`, "_blank");
  };

  return (
    <section className="py-8 bg-gradient-to-b from-maroon to-maroon/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading text-cream">
            Book Your Pass...
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-cream/60 mx-auto rounded-full mb-6"></div>
          
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
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
                  className={`px-3 ${slideWidth}`}
                >
                  <Card
                    className={`group relative flex flex-col justify-between h-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                      plan.highlighted
                        ? "bg-maroon text-cream border-4 border-cream/40 shadow-cream/40"
                        : "bg-cream/90 text-maroon border-2 border-maroon/20 backdrop-blur-sm"
                    }`}
                  >
                    {/* Highlight Badge */}
                    {plan.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-maroon via-maroon/90 to-maroon/80 text-cream px-4 py-2 rounded-full text-xs font-bold shadow-lg border border-cream/20">
                          <Star className="w-3 h-3 fill-current" />
                          POPULAR
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pt-8 pb-4">
                      <CardTitle
                        className={`text-xl sm:text-2xl font-bold font-heading transition-colors duration-200 ${
                          plan.highlighted 
                            ? "text-cream group-hover:text-cream/90" 
                            : "text-maroon group-hover:text-maroon/90"
                        }`}
                      >
                        {plan.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col items-center px-6 pb-8 flex-grow">
                      {/* Both Season and Day Prices */}
                      <div className="mb-6 text-center space-y-4">
                        {/* Season Pass */}
                        <div className="space-y-1">
                          <div
                            className={`text-xs font-medium uppercase tracking-wider ${
                              plan.highlighted 
                                ? "text-cream/80" 
                                : "text-maroon/70"
                            }`}
                          >
                            SEASON PASS
                          </div>
                          <div
                            className={`text-2xl sm:text-3xl font-extrabold font-heading transition-colors duration-200 ${
                              plan.highlighted 
                                ? "text-cream group-hover:text-cream/90" 
                                : "text-maroon group-hover:text-maroon/90"
                            }`}
                          >
                            ₹{plan.seasonPrice}/-
                          </div>
                        </div>

                        {/* Divider */}
                        <div className={`flex items-center gap-3 ${
                          plan.highlighted ? "text-cream/40" : "text-maroon/40"
                        }`}>
                          <div className="flex-1 h-px bg-current"></div>
                          <span className="text-xs font-medium">OR</span>
                          <div className="flex-1 h-px bg-current"></div>
                        </div>

                        {/* Day Pass */}
                        <div className="space-y-1">
                          <div
                            className={`text-xs font-medium uppercase tracking-wider ${
                              plan.highlighted 
                                ? "text-cream/80" 
                                : "text-maroon/70"
                            }`}
                          >
                            DAY PASS
                          </div>
                          <div
                            className={`text-2xl sm:text-3xl font-extrabold font-heading transition-colors duration-200 ${
                              plan.highlighted 
                                ? "text-cream group-hover:text-cream/90" 
                                : "text-maroon group-hover:text-maroon/90"
                            }`}
                          >
                            ₹{plan.dayPrice}/-
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="w-full space-y-3 mt-auto">
                        <Button
                          onClick={handleOnlineBooking}
                          size="lg"
                          className={`w-full font-semibold text-sm shadow-lg transform hover:-translate-y-1 transition-all duration-300 rounded-xl ${
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
                          className={`w-full font-semibold text-sm transition-all duration-300 rounded-xl hover:-translate-y-0.5 ${
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
                      <div className="mt-4 pt-4 border-t border-opacity-20 w-full">
                        <div className={`w-12 h-1 mx-auto rounded-full transition-all duration-300 ${
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

        {/* Pass Information */}
        <motion.div
          className="bg-maroon/5 rounded-2xl p-6 max-w-4xl mx-auto mt-8 border border-maroon/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="grid md:grid-cols-2 gap-4 text-cream text-center">
            <div>
              <h3 className="font-bold text-lg mb-2 text-cream">DAY PASS</h3>
              <p className="text-sm text-cream">Valid for one day of the event</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-cream">SEASON PASS</h3>
              <p className="text-sm text-cream">Valid for all days of the event season</p>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
      </div>
    </section>
  );
}
