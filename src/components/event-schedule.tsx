"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  MapPin,
  Users,
  Music,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface ScheduleItem {
  day: string;
  time: string;
  activity: string;
  type: string;
  location: string;
  description: string;
}

const eventInfo = {
  title: "Aagam Rass Dandiya 2025",
  days: ["September 30, 2025", "October 1, 2025"],
  time: "6:00 PM - 12:00 AM",
  venue: { name: "Community Center" },
};

const scheduleItems: ScheduleItem[] = [
  {
    day: "September 30, 2025",
    time: "6:00 PM",
    activity: "Doors Open & Welcome Drinks",
    type: "Welcome",
    location: "Community Center",
    description: "Kick off with a warm welcome & refreshments.",
  },
  {
    day: "September 30, 2025",
    time: "7:30 PM",
    activity: "Dandiya Raas",
    type: "Dancing",
    location: "Community Center",
    description: "Join us for the first night of Dandiya.",
  },
  {
    day: "October 1, 2025",
    time: "7:00 PM",
    activity: "Opening Ceremony & Aarti",
    type: "Ceremony",
    location: "Community Center",
    description: "Begin the night with traditional rituals.",
  },
  {
    day: "October 1, 2025",
    time: "9:00 PM",
    activity: "Garba & DJ Session",
    type: "Music",
    location: "Community Center",
    description: "Enjoy music and dance late into the night.",
  },
];

const carouselOptions = { loop: true, align: "start" as const, dragFree: true };
const slideWidth =
  "flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_40%]";

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Welcome":
    case "Dancing":
    case "Food":
      return <Users className="w-4 h-4" />;
    case "Ceremony":
    case "Event":
      return <Clock className="w-4 h-4" />;
    case "Performance":
    case "Music":
      return <Music className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "Welcome":
      return "bg-maroon/20 text-maroon";
    case "Ceremony":
      return "bg-maroon/30 text-maroon";
    case "Performance":
      return "bg-maroon/40 text-maroon";
    case "Dancing":
      return "bg-maroon/50 text-maroon";
    case "Music":
      return "bg-maroon/60 text-maroon";
    case "Food":
      return "bg-maroon/35 text-maroon";
    default:
      return "bg-maroon/20 text-maroon";
  }
};

export default function EventSchedule() {
  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.canScrollNext() ? emblaApi.scrollNext() : emblaApi.scrollTo(0);
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="max-w-7xl mx-auto px-0 py-0 bg-[#F8ECC6]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="rounded-3xl bg-[#F8ECC6] m-0 p-0">
          {/* Header */}
          <div className="text-center space-y-4 px-6 pt-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#680605] font-heading">
              Event Schedule
            </h2>
            <p className="text-base sm:text-lg text-[#680605]/80 max-w-2xl mx-auto leading-relaxed">
              Celebrate with us for a night of traditional Dandiya, cultural
              performances, delicious food, and unforgettable memories.
            </p>
            <h3 className="text-xl font-semibold text-[#680605]">
              {eventInfo.title}
            </h3>
            <p className="text-sm sm:text-base text-[#680605]/80">
              {eventInfo.days.join(" • ")} • {eventInfo.time}
            </p>
            <div className="flex items-center justify-center text-[#680605]/80">
              <MapPin className="w-4 h-4 mr-2" />
              {eventInfo.venue.name}
            </div>
          </div>

          {/* Carousel */}
          <div className="px-4 sm:px-8 py-10">
            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {scheduleItems.map((event, idx) => (
                    <motion.div
                      key={idx}
                      className={`${slideWidth} pl-4 first:pl-0`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <div className="rounded-2xl p-6 h-full bg-maroon shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                        {/* Type */}
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="text-cream">
                            {getTypeIcon(event.type)}
                          </span>
                          <Badge
                            className={`${getTypeColor(
                              event.type
                            )} font-medium px-3 py-1 rounded-lg bg-cream`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                        {/* Title */}
                        <h4 className="text-lg sm:text-xl font-semibold text-cream leading-snug">
                          {event.activity}
                        </h4>
                        <p className="text-sm text-cream/70 mt-1">
                          {event.time}
                        </p>
                        {/* Description */}
                        <p className="text-sm text-cream/85 mt-3 leading-relaxed">
                          {event.description}
                        </p>
                        {/* Location */}
                        <div className="flex items-center text-sm text-cream/70 mt-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        {/* Day */}
                        <div className="mt-4 text-xs font-medium text-cream/80">
                          {event.day}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Navigation */}
              <button
                onClick={() => emblaApi && emblaApi.scrollPrev()}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-maroon/40 hover:bg-maroon/60 text-cream rounded-full p-2 shadow-md transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => emblaApi && emblaApi.scrollNext()}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-maroon/40 hover:bg-maroon/60 text-cream rounded-full p-2 shadow-md transition"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
