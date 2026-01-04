import Link from "next/link";
import { Zap } from "lucide-react"; // The lightning icon

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full z-50 relative">
      {/* LOGO */}
      <Link href="/" className="text-2xl font-heavy tracking-tighter flex items-center gap-2 group">
        <div className="w-8 h-8 bg-brand-orange border-2 border-black flex items-center justify-center group-hover:rotate-12 transition-transform">
          <Zap size={18} fill="black" />
        </div>
        flatMAITES
      </Link>

      {/* LOGIN BUTTON */}
      <Link 
        href="/login" 
        className="font-mono font-bold border-2 border-black px-6 py-2 bg-white hover:bg-black hover:text-white transition-colors shadow-retro hover:shadow-retro-hover active:shadow-retro-active active:translate-x-[2px] active:translate-y-[2px]"
      >
        LOGIN
      </Link>
    </nav>
  );
}