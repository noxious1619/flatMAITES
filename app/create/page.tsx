"use client";

import Navbar from "@/app/components/Navbar";
import { Camera, IndianRupee, MapPin, Check } from "lucide-react";
import { useState } from "react";

export default function CreateListing() {
  // Simple state to handle the "Vibe Tags" selection
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const TAGS = ["AC", "Cooler", "No Brokerage", "Wifi", "Cook", "Maid", "Geyser", "Metro Near", "No Restrictions"];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <main className="min-h-screen bg-brand-bg pb-20">
      <Navbar />

      <div className="max-w-3xl mx-auto p-4">
        
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="font-heavy text-4xl mb-2 uppercase">Post a Room</h1>
          <p className="font-mono text-sm text-gray-500 bg-white border border-black inline-block px-2 py-1 rotate-1">
            Free for students. No brokers allowed.
          </p>
        </div>

        <form className="space-y-8">

          {/* SECTION 1: THE BASICS */}
          <section className="bg-white border-2 border-black p-6 shadow-retro relative">
            <div className="absolute -top-4 left-6 bg-brand-blue text-white font-heavy px-3 py-1 border-2 border-black uppercase tracking-wider">
              Step 1: The Basics
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {/* RENT */}
              <div>
                <label className="font-mono text-xs font-bold block mb-2">EXPECTED RENT (₹)</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="number" 
                    placeholder="e.g. 6500"
                    className="w-full bg-gray-50 border-2 border-black pl-10 p-3 font-mono focus:bg-yellow-50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* DEPOSIT */}
              <div>
                <label className="font-mono text-xs font-bold block mb-2">DEPOSIT / SECURITY (₹)</label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input 
                    type="number" 
                    placeholder="e.g. 6500"
                    className="w-full bg-gray-50 border-2 border-black pl-10 p-3 font-mono focus:bg-yellow-50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* LOCATION */}
              <div className="md:col-span-2">
                <label className="font-mono text-xs font-bold block mb-2">EXACT LOCATION</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <select className="w-full bg-gray-50 border-2 border-black pl-10 p-3 font-mono focus:bg-yellow-50 focus:outline-none appearance-none cursor-pointer">
                    <option>Select Area...</option>
                    <option>Sector 22 - Pocket 4</option>
                    <option>Sector 22 - Pocket 2</option>
                    <option>Sector 24</option>
                    <option>Sector 25</option>
                  </select>
                </div>
              </div>

              {/* GENDER PREFERENCE */}
              <div className="md:col-span-2">
                <label className="font-mono text-xs font-bold block mb-2">WHO ARE YOU LOOKING FOR?</label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="cursor-pointer">
                    <input type="radio" name="gender" className="peer sr-only" />
                    <div className="text-center py-3 border-2 border-black font-heavy text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-all">
                      BOYS
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="gender" className="peer sr-only" />
                    <div className="text-center py-3 border-2 border-black font-heavy text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-all">
                      GIRLS
                    </div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="gender" className="peer sr-only" />
                    <div className="text-center py-3 border-2 border-black font-heavy text-sm hover:bg-gray-100 peer-checked:bg-black peer-checked:text-white transition-all">
                      ANYONE
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: PHOTOS */}
          <section className="bg-white border-2 border-black p-6 shadow-retro relative">
             <div className="absolute -top-4 left-6 bg-brand-orange text-white font-heavy px-3 py-1 border-2 border-black uppercase tracking-wider">
              Step 2: The Evidence
            </div>
            
            <div className="mt-4 border-2 border-dashed border-gray-300 bg-gray-50 p-10 text-center hover:bg-gray-100 transition-colors cursor-pointer group">
              <div className="w-16 h-16 bg-white border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-sm">
                <Camera size={32} />
              </div>
              <h3 className="font-heavy text-lg uppercase">Upload Photos</h3>
              <p className="font-mono text-xs text-gray-500">Max 3 images. Make it look good.</p>
            </div>
          </section>

          {/* SECTION 3: THE VIBE */}
          <section className="bg-white border-2 border-black p-6 shadow-retro relative">
             <div className="absolute -top-4 left-6 bg-brand-yellow text-black font-heavy px-3 py-1 border-2 border-black uppercase tracking-wider">
              Step 3: The Vibe
            </div>

            <div className="mt-4">
              <label className="font-mono text-xs font-bold block mb-4">SELECT ALL THAT APPLY</label>
              <div className="flex flex-wrap gap-3">
                {TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 border-2 font-mono text-xs font-bold transition-all flex items-center gap-2
                      ${selectedTags.includes(tag) 
                        ? "bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]" 
                        : "bg-white text-gray-600 border-gray-300 hover:border-black"
                      }`}
                  >
                    {selectedTags.includes(tag) && <Check size={14} />}
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
               <label className="font-mono text-xs font-bold block mb-2">DESCRIPTION / RULES</label>
               <textarea 
                  rows={4}
                  placeholder="e.g. We are 3rd year CSE students. We study late at night. No smoking inside..."
                  className="w-full bg-gray-50 border-2 border-black p-4 font-mono text-sm focus:bg-yellow-50 focus:outline-none transition-colors"
               ></textarea>
            </div>
          </section>

          {/* SUBMIT BUTTON */}
          <div className="pt-4 pb-12">
            <button type="button" className="w-full bg-black text-white font-heavy text-2xl py-5 border-2 border-black shadow-retro hover:shadow-retro-hover hover:bg-brand-orange hover:text-black transition-all active:translate-y-1 active:shadow-none">
              PUBLISH LISTING
            </button>
            <p className="text-center font-mono text-xs text-gray-400 mt-4">
              Your listing will auto-expire in 30 days.
            </p>
          </div>

        </form>
      </div>
    </main>
  );
}