"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Video configuration
const videoConfig = {
  title: "Hyatt Place Convention Center",
  address: "Chikalthana, Aurangabad, Maharashtra",
  videoUrl: "/herovideo.mp4",
};

export default function VenueTour() {
  return (
    <section className="py-2 px-2">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-cream mb-4">
            Venue Features
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Take a 3D tour of our premium venue and discover the perfect
            atmosphere for an unforgettable Dandiya Night.
          </p>
        </motion.div>

        {/* Video Container - Vertical Orientation (Height > Width) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          {/* Video with vertical dimensions - Reduced desktop heights */}
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[550px] lg:h-[600px] xl:h-[650px]">
            <video
              src={videoConfig.videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
        </motion.div>

        {/* Venue Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <h3 className="text-2xl font-bold text-cream mb-2">
            {videoConfig.title}
          </h3>
          <div className="flex items-center justify-center text-cream">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">{videoConfig.address}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
