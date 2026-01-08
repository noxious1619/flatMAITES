"use client";

import Link from "next/link";
import Image from "next/image";
import logoIcon from "../logo-icon.png";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto w-full z-50 relative">
      {/* LOGO */}
      <Link href="/" className="text-2xl font-heavy tracking-tighter flex items-center gap-2 group">
        <Image src={logoIcon} alt="flatMATE Logo" width={40} height={40} />
        flatMATE
      </Link>

      <div className="flex items-center gap-4">
      {/* LOGIN BUTTON */}
      <Link
        href="/login"
        className="font-mono font-bold border-2 border-black px-6 py-2 bg-white hover:bg-black hover:text-white transition-colors shadow-retro hover:shadow-retro-hover active:shadow-retro-active active:translate-x-[2px] active:translate-y-[2px]"
      >
        LOGIN
      </Link>      

      {/* SignOut */}
       <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="flex items-center gap-2 font-mono font-bold text-red-600 hover:bg-red-50 px-4 py-2 border-2 border-transparent hover:border-red-200 transition-all">
            <LogOut size={18} /> LOGOUT
        </button>
        </div>
    </nav>
  );
}