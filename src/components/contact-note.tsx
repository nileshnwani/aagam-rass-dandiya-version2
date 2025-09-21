"use client";

import { motion, Variants } from "framer-motion";
import { Phone, MapPin, Instagram } from "lucide-react";

// Contact info
const contactInfo = {
  phoneNumbers: ["+91 7499575996", "+91 94216 92022"],
  location: "HYATT PLACE, CHH, SAMBHAJINAGAR",
  instagram: "aagamevents_2025",
};

// Motion variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ContactNote() {
  const handleInstagram = () => {
    window.open(`https://instagram.com/${contactInfo.instagram}`, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto px-0 py-0 bg-[#F8ECC6]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="bg-[#F8ECC6] m-0 p-0">
          {/* Important Notice with proper line spacing and left-justified alignment */}
          <motion.div
            className="mx-4 sm:mx-6 mt-4 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-[#680605]/10 rounded-xl p-6 border border-[#680605]/20">
              <h3 className="font-bold text-lg sm:text-xl text-[#680605] mb-5 text-center font-heading">
                Official Passes Only
              </h3>
              <div className="text-[#680605]/80 text-sm sm:text-base text-left">
                <p 
                  className="mb-4 leading-relaxed" 
                  style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'justify',
                    textJustify: 'inter-word'
                  }}
                >
                  No physical passes are being distributed. Entry is valid only through passes purchased via @aagamevents_2025 (Official Instagram) or the contact numbers listed on our official Instagram page.
                </p>
                <p 
                  className="leading-relaxed" 
                  style={{ 
                    lineHeight: '1.8', 
                    textAlign: 'justify',
                    textJustify: 'inter-word'
                  }}
                >
                  Do not buy passes from any other source (online or offline). The organizer will not be responsible for fraudulent/duplicate passes purchased from unofficial sellers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information in a single line layout */}
          <motion.div
            className="px-4 sm:px-6 pb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#680605] mb-4 text-center font-heading">
              FOR BOOKINGS & INFO:
            </h3>
            
            {/* Single line contact layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 flex-wrap">
              {/* Phone numbers inline */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                {contactInfo.phoneNumbers.map((phone, index) => (
                  <a 
                    key={index}
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#680605] hover:text-[#680605]/80 underline decoration-[#680605]/40 hover:decoration-[#680605]/60 transition-colors duration-200 bg-[#680605]/5 px-3 py-2 rounded-lg hover:bg-[#680605]/10 whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4" />
                    {phone}
                  </a>
                ))}
              </div>
              
              {/* Separator */}
              <div className="hidden lg:block w-px h-8 bg-[#680605]/20"></div>
              
              {/* Location */}
              <div className="flex items-center gap-2 bg-[#680605]/5 px-3 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-[#680605]" />
                <span className="text-xs sm:text-sm font-medium text-[#680605]/80 whitespace-nowrap">
                  {contactInfo.location}
                </span>
              </div>
              
              {/* Separator */}
              <div className="hidden lg:block w-px h-8 bg-[#680605]/20"></div>
              
              {/* Instagram */}
              <button
                onClick={handleInstagram}
                className="flex items-center gap-2 hover:text-[#680605] transition-colors duration-200 bg-[#680605]/5 hover:bg-[#680605]/10 px-3 py-2 rounded-lg text-[#680605]/80 whitespace-nowrap"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium">
                  @{contactInfo.instagram}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
