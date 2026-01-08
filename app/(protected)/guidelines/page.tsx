import Navbar from "@/app/components/Navbar";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-brand-bg pb-20">
      <Navbar />

      <div className="max-w-2xl mx-auto p-4">
        
        <div className="bg-[#FFFDF5] border-2 border-black p-8 shadow-retro relative">
          
          {/* Header */}
          <div className="text-center mb-8">
            <AlertTriangle size={48} className="mx-auto mb-4 text-brand-orange" />
            <h1 className="font-heavy text-4xl uppercase leading-none mb-2">Club Rules</h1>
            <p className="font-mono text-sm font-bold opacity-60">PLEASE READ BEFORE POSTING</p>
          </div>

          <div className="space-y-6 font-mono text-sm">
            
            {/* Rule 1 */}
            <div className="bg-green-50 border-2 border-green-200 p-4">
              <h3 className="font-heavy text-lg flex items-center gap-2 mb-2 text-green-800">
                <CheckCircle size={20} /> DO THIS
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-green-900">
                <li>Be honest about rent and bills.</li>
                <li>Upload real photos of the room.</li>
                <li>Respect privacy in chats.</li>
              </ul>
            </div>

            {/* Rule 2 */}
            <div className="bg-red-50 border-2 border-red-200 p-4">
              <h3 className="font-heavy text-lg flex items-center gap-2 mb-2 text-red-800">
                <XCircle size={20} /> STRICTLY BANNED
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-red-900">
                <li><strong>Brokers/Agents:</strong> Instant perma-ban.</li>
                <li><strong>Harassment:</strong> One strike policy.</li>
                <li><strong>Fake IDs:</strong> Don't even try.</li>
              </ul>
            </div>

            <p className="text-center text-xs text-gray-400 mt-8">
              Breaking these rules will result in your Enrollment ID being blacklisted from flatMAITES forever.
            </p>

            <Link href="/feed">
                <button className="w-full bg-black text-white font-heavy uppercase py-4 mt-4 border-2 border-black hover:bg-white hover:text-black transition-all">
                    I Agree, Take me in
                </button>
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}