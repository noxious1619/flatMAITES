import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";

// DUMMY DATA (Later this comes from MongoDB)
const SAMPLE_LISTINGS = [
  {
    id: "1",
    rent: "6,500",
    location: "Pocket 4, Sector 22",
    gender: "Male" as const,
    tags: ["AC", "No Broker", "Wifi"],
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "2",
    rent: "8,000",
    location: "Sector 24 (Near McD)",
    gender: "Female" as const,
    tags: ["Attached Washroom", "Cooler", "Maid"],
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "3",
    rent: "12,000",
    location: "Pocket 4, Floor 1",
    gender: "Any" as const,
    tags: ["Fully Furnished", "AC", "Fridge", "No Owner"],
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: "4",
    rent: "5,500",
    location: "Pocket 2",
    gender: "Male" as const,
    tags: ["Shared Room", "Budget", "Metro Near"],
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=500&q=60"
  }
];

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-brand-bg pb-20">
      <Navbar />

      {/* 1. FILTER BAR (Sticky Header) */}
      <div className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur-sm border-b-2 border-black p-4">
        <div className="max-w-6xl mx-auto flex gap-4 overflow-x-auto no-scrollbar">
          {/* Filter Button */}
          <button className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-mono text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none whitespace-nowrap">
            <Filter size={16} /> FILTERS
          </button>
          
          {/* Quick Filters */}
          <button className="bg-white border-2 border-black px-4 py-2 font-mono text-sm font-bold hover:bg-black hover:text-white transition-colors whitespace-nowrap">
            Boys
          </button>
          <button className="bg-white border-2 border-black px-4 py-2 font-mono text-sm font-bold hover:bg-black hover:text-white transition-colors whitespace-nowrap">
            Girls
          </button>
          <button className="bg-white border-2 border-black px-4 py-2 font-mono text-sm font-bold hover:bg-black hover:text-white transition-colors whitespace-nowrap">
            AC Only
          </button>
        </div>
      </div>

      {/* 2. THE GRID */}
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SAMPLE_LISTINGS.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>

      {/* 3. FLOATING ACTION BUTTON (Post Room) */}
      <Link href="/create" className="fixed bottom-8 right-8 z-50">
        <button className="bg-brand-orange text-white border-2 border-black w-16 h-16 rounded-full flex items-center justify-center shadow-retro hover:shadow-retro-hover active:shadow-retro-active hover:-translate-y-1 transition-all group">
            <Plus size={32} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </Link>

    </main>
  );
}