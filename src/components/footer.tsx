"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site-config";

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1 - Logo Center */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <img
              src="/aagamlogodesktop.png"
              alt={`${siteConfig.siteInfo.name} Logo`}
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Row 2 - Social Media Center */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex space-x-8">
            <motion.a
              href={siteConfig.siteInfo.socialMedia?.facebook || "#"}
              className="text-cream/80 hover:text-cream transition-colors duration-300 p-2 rounded-full hover:bg-cream/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/aagamevents_2025?igsh=MTliZGk5ajRzcHFy&utm_source=qr"
              className="text-cream/80 hover:text-cream transition-colors duration-300 p-2 rounded-full hover:bg-cream/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href={siteConfig.siteInfo.socialMedia?.twitter || "#"}
              className="text-cream/80 hover:text-cream transition-colors duration-300 p-2 rounded-full hover:bg-cream/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </motion.a>
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
