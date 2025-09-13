import React from "react";
import { cn } from "@/lib/utils";

type CarouselItemProps = {
  className?: string;
  children: React.ReactNode;
};

export function CarouselItem({ className, children }: CarouselItemProps) {
  return (
    <div
      className={cn(
        "min-w-0 flex-shrink-0 flex-grow-0 pl-4 first:pl-0",
        className
      )}
    >
      {children}
    </div>
  );
}