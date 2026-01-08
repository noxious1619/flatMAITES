import Navbar from "@/app/components/Navbar";
import prisma from "@/app/lib/prisma";
import { ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    if (!id) {
        notFound();
    }

    const user = await prisma.user.findUnique({
        where: { id },
        include: {
            listings: {
                where: { isAvailable: true }, // Only show active listings
                orderBy: { createdAt: 'desc' }
            }
        }
    });

    if (!user) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-brand-bg pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto p-4 space-y-8">

                {/* 1. ID CARD SECTION */}
                <section className="bg-white border-2 border-black p-8 shadow-retro flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">

                    <div className="w-24 h-24 bg-gray-200 rounded-full border-2 border-black overflow-hidden flex-shrink-0">
                        <img src={user.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name || 'User'}`} alt="Profile" />
                    </div>

                    <div className="text-center md:text-left flex-grow">
                        <h1 className="font-heavy text-3xl uppercase">{user.name || "Anonymous"}</h1>
                        <p className="font-mono text-sm text-gray-500 mb-2">{user.college || "Student"}</p>

                        {user.emailVerified ? (
                            <div className="inline-block bg-green-100 text-green-800 border-2 border-green-600 px-3 py-1 font-mono text-xs font-bold uppercase">
                                ✅ Verified Student
                            </div>
                        ) : (
                            <div className="inline-block bg-gray-100 text-gray-800 border-2 border-gray-600 px-3 py-1 font-mono text-xs font-bold uppercase">
                                Unverified
                            </div>
                        )}

                        {user.contactLink && (
                            <div className="mt-2 text-xs font-mono">
                                <a href={user.contactLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                    Contact / Socials
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* 2. ACTIVE LISTINGS SECTION */}
                <section>
                    <h2 className="font-heavy text-xl mb-4 border-b-2 border-black inline-block">
                        ACTIVE LISTINGS
                    </h2>

                    {user.listings.length === 0 && (
                        <p className="font-mono text-gray-500">
                            This user hasn't posted any active listings.
                        </p>
                    )}

                    <div className="space-y-4">
                        {user.listings.map((listing) => (
                            <Link href={`/listing/${listing.id}`} key={listing.id} className="block group">
                                <div
                                    className="bg-white border-2 border-black p-4 flex gap-4 items-start shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    <div className="w-20 h-20 bg-gray-200 border border-black flex-shrink-0">
                                        <img
                                            src={listing.images?.[0] || "/placeholder.png"}
                                            className="w-full h-full object-cover"
                                            alt={listing.title}
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="font-heavy text-lg leading-none group-hover:underline">{listing.title}</h3>
                                        <p className="font-mono text-xs text-gray-500 mb-2">₹{listing.price}</p>
                                        {/* Address snippet if available */}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
