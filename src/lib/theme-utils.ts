import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';
import themeConfig from './theme.json';
import { siteConfig } from '@/config/site-config';

// Function to combine class names with tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Theme helper functions
export const theme = {
  // Get theme colors
  colors: {
    primary: themeConfig.colors.primary,
    primaryText: themeConfig.colors.primaryText,
    secondary: themeConfig.colors.secondary,
    secondaryText: themeConfig.colors.secondaryText,
  },
  
  // Get theme fonts
  fonts: {
    heading: themeConfig.fonts.heading,
    body: themeConfig.fonts.body,
  },
  
  // Apply color swap logic
  applyColorSwap: (isInverse: boolean = false) => {
    return isInverse ? 'maroon-bg' : 'cream-bg';
  },
  
  // Get site configuration
  siteConfig,
};

// Framer Motion animations
export const motionVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

// Video optimization helper
export const videoOptions = {
  lazyLoad: true,
  autoPlay: {
    muted: true,
    loop: true,
    playsInline: true,
  },
  withControls: {
    controls: true,
    preload: 'metadata',
  },
};

// Carousel configuration for consistent settings across components
export const carouselConfig = {
  // Default Embla Carousel options
  options: {
    loop: true,
    align: "start",
    dragFree: true,
  },
  
  // Auto-scroll settings
  autoScroll: {
    enabled: true,
    interval: 5000, // 5 seconds
  },
  
  // Navigation button styles
  navigationButtons: {
    light: {
      button: "absolute top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm z-10",
      prev: "left-2",
      next: "right-2",
    },
    dark: {
      button: "absolute top-1/2 -translate-y-1/2 bg-maroon/10 hover:bg-maroon/20 text-maroon rounded-full p-2 backdrop-blur-sm z-10",
      prev: "left-2",
      next: "right-2",
    },
  },
  
  // Responsive slide widths
  slideWidths: {
    full: "w-full",
    large: "w-full md:w-[80%] lg:w-[70%]",
    medium: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4",
    small: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6",
    gallery: "flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%]",
  },
};