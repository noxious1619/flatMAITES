import Navbar from "@/app/components/Navbar";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#E0E0E0] pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center min-h-[80vh] space-y-8">

                <div className="text-center">
                    <h1 className="font-heavy text-5xl uppercase mb-4">HIT US UP</h1>
                    <p className="font-mono bg-white border border-black inline-block px-3 py-1">
                        Got feedback? Found a bug? Or just wanna say hi?
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full">

                    {/* CONTACT CARD */}
                    <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="font-heavy text-2xl mb-6">CONTACT DEETS</h2>
                        <div className="space-y-6 font-mono">
                            <div className="flex items-center gap-4">
                                <div className="bg-black text-white p-2 rounded-full">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">EMAIL</p>
                                    <p className="text-lg">support@flatmate.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-black text-white p-2 rounded-full">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">PHONE</p>
                                    <p className="text-lg">+91 99999 88888</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-black text-white p-2 rounded-full">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">HQ</p>
                                    <p className="text-lg">MAIT Campus, Rohini, Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM MOCK */}
                    <div className="bg-brand-bg border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                        <div className="absolute -top-3 -right-3 bg-red-500 text-white font-mono text-xs font-bold px-2 py-1 rotate-12 border border-black">
                            FAST RESPONSE
                        </div>
                        <form className="space-y-4 opacity-50 pointer-events-none">
                            <div>
                                <label className="font-mono text-xs font-bold block mb-1">YOUR MESSAGE</label>
                                <textarea className="w-full border-2 border-black p-2 h-32" placeholder="Start typing..."></textarea>
                            </div>
                            <button className="w-full bg-black text-white py-3 font-heavy border-2 border-transparent">SEND IT</button>
                            <p className="text-center font-mono text-xs text-red-600">
                                (Contact form currently under maintenance. Email us instead!)
                            </p>
                        </form>
                    </div>

                </div>

            </div>
        </main>
    );
}
