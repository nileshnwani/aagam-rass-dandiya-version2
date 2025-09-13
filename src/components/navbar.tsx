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
  Home
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

  // Updated navigation items with section-wise links
  const navItems = [
    { 
      name: "Schedule", 
      href: "#schedule", 
      icon: <Calendar className="mr-2 h-4 w-4" /> 
    },
    { 
      name: "Highlights", 
      href: "#event-highlights", 
      icon: <Sparkles className="mr-2 h-4 w-4" /> 
    },
    { 
      name: "Past Event", 
      href: "#past-events", 
      icon: <ImageIcon className="mr-2 h-4 w-4" /> 
    },
    { 
      name: "2025", 
      href: "#gallery", 
      icon: <Camera className="mr-2 h-4 w-4" /> 
    },
    { 
      name: "Passes", 
      href: "#pricing", 
      icon: <CreditCard className="mr-2 h-4 w-4" /> 
    },
    { 
      name: "Venue", 
      href: "#venue-tour", 
      icon: <Building2 className="mr-2 h-4 w-4" /> 
    },
    { 
      name: "About Us", 
      href: "#sponsors", 
      icon: <Users className="mr-2 h-4 w-4" /> 
    },
  ];

  const scrollToSection = (sectionId: string) => {
    // Remove the # from the beginning if present
    const cleanId = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
    const element = document.getElementById(cleanId);
    if (element) {
      // Close mobile menu first
      setIsOpen(false);
      // Add a small delay to allow menu to close smoothly
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-maroon text-cream shadow-lg border-b border-cream/20"
            : "bg-transparent text-cream backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side: Mobile Menu Button + Logo */}
            <div className="flex items-center space-x-3">
              {/* Mobile menu button - on the left */}
              <div className="md:hidden">
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

              {/* Logo - with reduced space */}
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt={siteConfig.siteInfo.name}
                  width={60}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-heading font-bold">
                  {siteConfig.siteInfo.name}
                </span>
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
                  className="festive-button-inverse animate-glow"
                  onClick={() => scrollToSection("#pricing")}
                >
                  Book Tickets
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Navigation */}
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

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="fixed top-0 left-0 h-full w-80 bg-cream text-maroon shadow-2xl z-[100] md:hidden overflow-y-auto"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="flex items-center justify-between pb-6 border-b border-maroon/20">
                  <div className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt={siteConfig.siteInfo.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="font-bold text-lg font-heading ml-2">
                      {siteConfig.siteInfo.name}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-maroon hover:text-maroon/80 hover:bg-maroon/10"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </Button>
                </div>
                
                {/* Home Link */}
                <div className="mt-6 mb-2">
                  <Link
                    href="/"
                    className="flex items-center px-4 py-3 text-maroon hover:text-maroon/80 hover:bg-maroon/10 rounded-xl transition-all duration-200 font-medium group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="text-base">Home</span>
                  </Link>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2 flex-grow">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 * index,
                        ease: "easeOut" 
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href, e)}
                        className="flex items-center px-4 py-3 text-maroon hover:text-maroon/80 hover:bg-maroon/10 rounded-xl transition-all duration-200 font-medium group cursor-pointer"
                      >
                        <div className="flex items-center">
                          <span className="mr-3 group-hover:scale-110 transition-transform">
                            {item.icon}
                          </span>
                          <span className="text-base">{item.name}</span>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Book Tickets Button */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 * navItems.length,
                    ease: "easeOut" 
                  }}
                  className="mt-8"
                >
                  <Button 
                    className="w-full festive-button animate-glow text-base py-3"
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
                    ease: "easeOut" 
                  }}
                  className="mt-6 pt-6 border-t border-maroon/20"
                >
                  <div className="text-center">
                    <p className="text-sm text-maroon/70 mb-2">Need Help?</p>
                    <p className="text-sm font-medium text-maroon">
                      {siteConfig.siteInfo.phoneNumber}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
