"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme, motionVariants } from "@/lib/theme-utils";
import { siteConfig } from "@/config/site-config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(siteConfig.countdownTimer.eventDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center space-x-4 sm:space-x-6">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={motionVariants.fadeIn.hidden}
          animate={motionVariants.fadeIn.visible}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="premium-card rounded-2xl p-4 sm:p-6 min-w-[70px] sm:min-w-[90px] hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold font-heading text-primaryText mb-2">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm sm:text-base text-primaryText/90 font-medium">
              {unit.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
