"use client";


import { MapPin, IndianRupee } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

// Define what a listing looks like
interface ListingProps {
  id: string;
  title: string;
  rent: string;
  location: string;
  category: "BOYS" | "GIRLS" | "Any";
  tags: string[];
  imageUrl: string[];
}



export default function ListingCard({ rent, location, category, tags, imageUrl, id, title }: ListingProps) {
    
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startAutoScroll = () => {
            if (imageUrl.length <= 1) return;

            intervalRef.current = setInterval(() => {
                setActiveImage((prev) => (prev + 1) % imageUrl.length);
            }, 1000);
        };
    
    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setActiveImage(0); // reset to first image
        };


    const [activeImage, setActiveImage] = useState(0);
  return (
    
    <Link href={`/listing/${id}`}>  {/* Wrap everything in Link */}
    <div className="retro-card group cursor-pointer relative flex flex-col h-full">
      
      {/* 1. IMAGE AREA */}
      <div className="h-48 bg-gray-200 border-b-2 border-black relative overflow-hidden" 
        onMouseEnter={startAutoScroll}
        onMouseLeave={stopAutoScroll}
      >
        {/* Placeholder for real image */}
        <div className="relative w-full h-full">
        <img
            src={imageUrl[activeImage]}
            className="w-full h-full object-cover"
        />

        {/* Dots */}
        {imageUrl.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {imageUrl.map((_, i) => (
                <span
                key={i}
                className={`w-2 h-2 rounded-full border border-black
                    ${i === activeImage ? "bg-black" : "bg-white"}
                `}
                />
            ))}
            </div>
        )}
        </div>

        
        {/* GENDER BADGE */}
        <div className={`absolute top-2 left-2 px-2 py-1 border-2 border-black font-mono text-xs font-bold
            ${category === 'BOYS' ? 'bg-blue-200' : category === 'GIRLS' ? 'bg-pink-200' : 'bg-gray-100'}
        `}>
            {category === 'BOYS' ? 'BOYS' : category === 'GIRLS' ? 'GIRLS' : 'ANY'}
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div className="p-4 flex flex-col grow">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="font-heavy text-xl leading-none mb-1 flex items-center gap-1">
                    <IndianRupee size={18} strokeWidth={3} /> {rent}
                </h3>
                <p className="font-heavy fw-200 text-xs text-black-100 flex items-center gap-1 mt-1">
                    {/* <MapPin size={12}/>  */}
                    {title}
                </p>
                <p className="font-mono text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin size={12}/> 
                    {location}
                </p>
            </div>
        </div>

        {/* Vibe Tags (The Pill Badges) */}
        {/* <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 text-[10px] font-mono font-bold border border-black bg-brand-bg rounded-full">
                    {tag}
                </span>
            ))}
        </div> */}

        {/* Action Button (Pushed to bottom) */}
        <div className="mt-auto">
            <button className="w-full bg-black text-white font-heavy text-sm py-2 hover:bg-brand-orange hover:text-black hover:border-black border-2 border-transparent transition-colors">
                VIEW DETAILS
            </button>
        </div>
      </div>
    </div>
    </Link>
  );
}