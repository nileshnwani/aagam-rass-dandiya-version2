"use client";

import { useEffect } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { siteConfig } from "@/config/site-config";

export default function Footer() {
  // Embla Carousel for partner logos
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
<footer className="bg-maroon text-cream py-0">
  <div className="max-w-7xl mx-auto px-0">
    {/* Row 1 - Logo Center with no vertical spacing */}
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        {/* Display the logo as an image from the /public folder */}
        <img
          src="/logo.png"
          alt={`${siteConfig.siteInfo.name} Logo`}
          className="h-12 w-full object-contain"
        />
      </div>
    </div>

    {/* Row 2 - Social Left + Sponsors Right */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
      {/* Left - Social Media */}
      <div className="flex space-x-6">
        <motion.a
          href={siteConfig.siteInfo.socialMedia?.facebook || "#"}
          className="text-cream/80 hover:text-cream transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Facebook size={22} />
        </motion.a>
        <motion.a
          href={siteConfig.siteInfo.socialMedia?.instagram || "#"}
          className="text-cream/80 hover:text-cream transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Instagram size={22} />
        </motion.a>
        <motion.a
          href={siteConfig.siteInfo.socialMedia?.twitter || "#"}
          className="text-cream/80 hover:text-cream transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Twitter size={22} />
        </motion.a>
      </div>

      {/* Right - Sponsors Carousel */}
      <div className="w-full md:w-2/3 overflow-hidden" ref={emblaRef}>
        <div className="flex items-center">
          {siteConfig.sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/2 sm:w-1/4 px-4"
            >
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-10 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all"
                />
                <span className="text-xs text-cream/70 mt-1 group-hover:text-cream truncate max-w-[80px]">
                  {sponsor.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Row 3 - Copyright */}
    <div className="border-t border-cream/20 pt-6 text-center">
      <p className="text-sm text-cream/80">
        © {new Date().getFullYear()} {siteConfig.siteInfo.name}. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
}