import Navbar from "@/app/components/Navbar";
import { ArrowLeft, MapPin, IndianRupee, MessageCircle, ShieldCheck, Share2 } from "lucide-react";
import Link from "next/link";

// MOCK DATA (Simulating a database fetch)
const MOCK_LISTING = {
  id: "1",
  rent: "6,500",
  deposit: "6,500",
  location: "Pocket 4, Sector 22, Rohini",
  gender: "Male",
  description: "Looking for a chill flatmate. The room is fully furnished with a bed and cupboard. We have a cook who comes twice a day. No restrictions on guests as long as they aren't noisy after 11 PM. Walking distance from MAIT gate number 3.",
  tags: ["AC", "No Brokerage", "Wifi Included", "Cook Available", "Geyser"],
  lister: {
    name: "Amit Kumar",
    batch: "CSE - 2025",
    verified: true
  },
  images: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80"
  ]
};

export default function ListingDetails() {
  // In a real app, we would use params.id to fetch data
  const listing = MOCK_LISTING; 

  return (
    <main className="min-h-screen bg-brand-bg pb-32">
      <Navbar />

      <div className="max-w-4xl mx-auto p-4">
        
        {/* BACK BUTTON */}
        <Link href="/feed" className="inline-flex items-center gap-2 font-mono font-bold mb-6 hover:underline">
            <ArrowLeft size={20} /> BACK TO FEED
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: IMAGES & INFO */}
            <div className="md:col-span-2 space-y-6">
                
                {/* 1. HERO IMAGE (Retro Frame) */}
                <div className="retro-card p-2 rotate-1">
                    <img 
                        src={listing.images[0]} 
                        alt="Room Main" 
                        className="w-full h-64 md:h-96 object-cover border-2 border-black"
                    />
                </div>

                {/* 2. TITLE & PRICE */}
                <div>
                    <div className="flex justify-between items-start">
                        <h1 className="font-heavy text-3xl md:text-5xl uppercase leading-none mb-2">
                            Shared Room
                        </h1>
                        <button className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Share2 size={20} />
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-2 font-mono text-gray-600 mb-4">
                        <MapPin size={18} /> {listing.location}
                    </div>

                    <div className="flex gap-4 mb-6">
                        <div className="bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="block font-mono text-xs text-gray-500">RENT</span>
                            <span className="font-heavy text-xl flex items-center">
                                <IndianRupee size={16} strokeWidth={3}/>{listing.rent}
                            </span>
                        </div>
                        <div className="bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-60">
                            <span className="block font-mono text-xs text-gray-500">DEPOSIT</span>
                            <span className="font-heavy text-xl flex items-center">
                                <IndianRupee size={16} strokeWidth={3}/>{listing.deposit}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 3. VIBE TAGS */}
                <div>
                    <h3 className="font-heavy text-xl mb-3 uppercase border-b-2 border-black inline-block">The Vibe</h3>
                    <div className="flex flex-wrap gap-3">
                        {listing.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 font-mono font-bold border-2 border-black bg-white rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 4. DESCRIPTION */}
                <div className="bg-white border-2 border-black p-6 shadow-retro relative">
                    <div className="absolute -top-3 -right-3 bg-brand-yellow px-2 py-1 border-2 border-black font-mono text-xs font-bold rotate-3">
                        READ ME
                    </div>
                    <p className="font-mono leading-relaxed text-sm md:text-base">
                        {listing.description}
                    </p>
                </div>
            </div>

            {/* RIGHT COLUMN: LISTER PROFILE (Sticky) */}
            <div className="md:col-span-1">
                <div className="sticky top-24">
                    <div className="bg-white border-2 border-black p-6 shadow-retro text-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-black mx-auto mb-4 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amit" alt="Avatar" />
                        </div>
                        
                        <h3 className="font-heavy text-xl">{listing.lister.name}</h3>
                        <p className="font-mono text-sm text-gray-500 mb-2">{listing.lister.batch}</p>
                        
                        <div className="flex items-center justify-center gap-1 text-green-600 font-bold text-xs mb-6">
                            <ShieldCheck size={14} /> VERIFIED STUDENT
                        </div>

                        <button className="w-full bg-black text-white font-heavy uppercase py-4 border-2 border-black hover:bg-brand-orange hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                            Chat Now
                        </button>
                        
                        <p className="text-[10px] font-mono text-gray-400 mt-2">
                            Identity hidden until you match.
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* MOBILE FLOATING ACTION BUTTON (Only shows on small screens) */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
        <button className="w-full bg-black text-white font-heavy uppercase py-4 border-2 border-black shadow-retro flex items-center justify-center gap-2">
            <MessageCircle size={20} /> Chat with Amit
        </button>
      </div>

    </main>
  );
}