"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Calendar,
  Sparkles,
  Image as ImageIcon,
  Camera,
  CreditCard,
  Building2,
  Users,
  Home,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Schedule", href: "#schedule", icon: <Calendar className="mr-2 h-4 w-4" /> },
    { name: "Highlights", href: "#event-highlights", icon: <Sparkles className="mr-2 h-4 w-4" /> },
    { name: "Past Event", href: "#past-events", icon: <ImageIcon className="mr-2 h-4 w-4" /> },
  //  { name: "2025", href: "#gallery", icon: <Camera className="mr-2 h-4 w-4" /> },
    { name: "Passes", href: "#pricing", icon: <CreditCard className="mr-2 h-4 w-4" /> },
    { name: "Venue", href: "#venue-tour", icon: <Building2 className="mr-2 h-4 w-4" /> },
    { name: "About Us", href: "#organizers", icon: <Users className="mr-2 h-4 w-4" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const cleanId = sectionId.startsWith("#") ? sectionId.slice(1) : sectionId;
    const element = document.getElementById(cleanId);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-maroon text-cream shadow-lg border-b border-cream/20"
            : "bg-transparent text-cream backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Mobile menu button (left side) */}
            <div className="absolute left-0 flex items-center md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(true)}
                className="text-cream hover:text-cream/80 hover:bg-cream/10 rounded-lg"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </Button>
            </div>

            {/* Logo - Responsive */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" className="flex items-center space-x-2">
                {/* Mobile Logo (visible only on mobile) */}
                <Image
                  src="/aagamlogomobile.png"
                  alt={siteConfig.siteInfo.name}
                  width={120}
                  height={36}
                  className="block md:hidden rounded-full"
                  priority
                />
                {/* Desktop Logo (visible only on desktop) */}
                <Image
                  src="/aagamlogodesktop.png"
                  alt={siteConfig.siteInfo.name}
                  width={180}
                  height={60}
                  className="hidden md:block rounded-full"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-cream hover:text-cream/80 transition-colors duration-200 font-medium font-heading cursor-pointer text-sm"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * navItems.length }}
              >
                <Button
                  className="animate-glow bg-cream text-maroon hover:bg-maroon hover:text-cream transition-all duration-300 border border-cream/20 hover:border-cream/40"
                  onClick={() => scrollToSection("#pricing")}
                >
                  Book Tickets
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar - Responsive Width */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.4,
              }}
              className="fixed top-0 left-0 h-full w-[85vw] max-w-sm bg-maroon text-cream shadow-2xl z-[100] md:hidden overflow-y-auto"
            >
              <div className="p-0 flex flex-col h-full">
                {/* Sidebar Header with Mobile Logo */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-cream/20">
                  <div className="flex items-center">
                    {/* Mobile Logo for Sidebar */}
                    <Image
                      src="/aagamlogomobile.png"
                      alt={siteConfig.siteInfo.name}
                      width={100}
                      height={30}
                      className="rounded-full"
                      priority
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-cream hover:text-cream/80 hover:bg-cream/10 p-2 rounded-lg"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </Button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 px-3 sm:px-4">
                  {/* Home Link */}
                  <div className="mt-4 mb-2">
                    <Link
                      href="/"
                      className="flex items-center px-3 py-3 text-cream hover:text-cream/80 hover:bg-cream/10 rounded-xl transition-all duration-200 font-medium group"
                      onClick={() => setIsOpen(false)}
                    >
                      <Home className="mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base">Home</span>
                    </Link>
                  </div>

                  {/* Navigation Items */}
                  <div className="space-y-1 flex-grow">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.1 * index,
                          ease: "easeOut",
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(item.href, e)}
                          className="flex items-center px-3 py-3 text-cream hover:text-cream/80 hover:bg-cream/10 rounded-xl transition-all duration-200 font-medium group cursor-pointer"
                        >
                          <div className="flex items-center">
                            <span className="mr-3 group-hover:scale-110 transition-transform text-sm">
                              {item.icon}
                            </span>
                            <span className="text-sm sm:text-base">{item.name}</span>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section - Book Tickets Button and Contact */}
                <div className="px-3 sm:px-4 pb-4">
                  {/* Book Tickets Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * navItems.length,
                      ease: "easeOut",
                    }}
                    className="mb-4"
                  >
                    <Button
                      className="w-full animate-glow text-sm sm:text-base py-3 bg-cream text-maroon hover:bg-maroon hover:text-cream transition-all duration-200 border border-cream/20 hover:border-cream/40"
                      onClick={() => scrollToSection("#pricing")}
                    >
                      Book Tickets
                    </Button>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 * (navItems.length + 1),
                      ease: "easeOut",
                    }}
                    className="pt-4 border-t border-cream/20"
                  >
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-cream/70 mb-2">Need Help?</p>
                      <p className="text-xs sm:text-sm font-medium text-cream">
                        {siteConfig.siteInfo.phoneNumber}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
