// components/ListingImageViewer.tsx
"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ListingImageViewer({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const hasMultiple = images.length > 1;

  const startAutoScroll = () => {
    if (!hasMultiple || intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setActiveImage((i) => (i + 1) % images.length);
    }, 2000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      onMouseEnter={startAutoScroll}
      onMouseLeave={stopAutoScroll}
      className="bg-white p-2 rotate-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative"
    >
      <img
        src={images[activeImage] || "/placeholder.png"}
        className="w-full h-64 md:h-96 object-cover border-2 border-black"
      />

      {hasMultiple && (
        <>
          <button
            onClick={() =>
              setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1))
              
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-1"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setActiveImage((i) => (i + 1) % images.length)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-1"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  );
}
