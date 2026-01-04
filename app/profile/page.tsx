import Navbar from "@/app/components/Navbar";
import { LogOut, Trash2, MapPin } from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-brand-bg pb-20">
      <Navbar />

      <div className="max-w-4xl mx-auto p-4 space-y-8">
        
        {/* 1. ID CARD SECTION */}
        <section className="bg-white border-2 border-black p-8 shadow-retro flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          {/* Watermark */}
          <div className="absolute top-[-20px] right-[-20px] text-9xl opacity-5 font-heavy rotate-12 pointer-events-none">
            148
          </div>

          <div className="w-24 h-24 bg-gray-200 rounded-full border-2 border-black overflow-hidden flex-shrink-0">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dishant" alt="Profile" />
          </div>
          
          <div className="text-center md:text-left flex-grow">
            <h1 className="font-heavy text-3xl uppercase">Dishant Pandey</h1>
            <p className="font-mono text-sm text-gray-500 mb-2">CSE • Batch 2025</p>
            <div className="inline-block bg-green-100 text-green-800 border-2 border-green-600 px-3 py-1 font-mono text-xs font-bold uppercase">
              ✅ Verified Student
            </div>
          </div>

          <button className="flex items-center gap-2 font-mono font-bold text-red-600 hover:bg-red-50 px-4 py-2 border-2 border-transparent hover:border-red-200 transition-all">
            <LogOut size={18} /> LOGOUT
          </button>
        </section>

        {/* 2. MY LISTINGS SECTION */}
        <section>
          <h2 className="font-heavy text-xl mb-4 border-b-2 border-black inline-block">MY ACTIVE LISTINGS</h2>
          
          <div className="bg-white border-2 border-black p-4 flex gap-4 items-start shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="w-20 h-20 bg-gray-200 border border-black flex-shrink-0">
              <img 
                 src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=200&q=60" 
                 className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-heavy text-lg leading-none">Shared Room in Sec 22</h3>
              <p className="font-mono text-xs text-gray-500 mb-2">Posted 2 days ago</p>
              <div className="flex gap-2 text-xs font-mono font-bold">
                <span className="bg-gray-100 px-2 py-1">₹6,500</span>
                <span className="bg-gray-100 px-2 py-1">34 Views</span>
              </div>
            </div>

            <button className="text-red-600 hover:bg-red-100 p-2 border border-transparent hover:border-red-200 transition-colors" title="Delete Listing">
              <Trash2 size={20} />
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}