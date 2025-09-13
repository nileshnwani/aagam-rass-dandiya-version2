"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, Play } from "lucide-react";

// Video configuration
const videoConfig = {
  title: "Hyatt Place Convention Center",
  address: "Chikalthana, Aurangabad, Maharashtra",
  thumbnailUrl: "https://img.youtube.com/vi/YyB9mQ_uRFU/maxresdefault.jpg",
  directVideoUrl: "/hyatt-place-tour.mp4",
};

export default function VenueTour() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-2 px-2">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-cream mb-4">
              Venue Features
          </h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Take a 3D tour of our premium venue and discover the perfect
            atmosphere for an unforgettable Dandiya Night.
          </p>
        </motion.div>

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative group max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          <img
            src={videoConfig.thumbnailUrl}
            alt="Venue Tour"
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#800000]/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="w-10 h-10 text-[#FFF8F0]" />
            </div>
          </div>
        </motion.div>

        {/* Venue Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoConfig.directVideoUrl}
                className="w-full h-full object-contain"
                controls
                autoPlay
                loop
              />
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 bg-[#800000]/80 text-[#FFF8F0] rounded-full p-2 hover:bg-[#800000] transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
