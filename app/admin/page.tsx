import Navbar from "@/app/components/Navbar";
import prisma from "@/app/lib/prisma";
import Link from "next/link";
import { Users, FileText, ShieldAlert } from "lucide-react";

export default async function AdminDashboard() {

    // Fetch stats (parallel)
    const [userCount, listingCount, recentUsers] = await Promise.all([
        prisma.user.count(),
        prisma.listing.count(),
        prisma.user.findMany({
            take: 5,
            orderBy: { createdAt: 'desc' },
            select: { id: true, name: true, email: true, createdAt: true, emailVerified: true }
        })
    ]);

    // Note: Schema in user.prisma showed 'emailVerified' DateTime?, but api/listings used 'isVerified' in select (mock?). 
    // Wait, api/listings/route.ts used select: { isVerified: true } on owner.
    // But user.prisma (Step 26) DID NOT have isVerified. It had `emailVerified DateTime?`.
    // Wait, let me check user.prisma again.
    // Step 26: `emailVerified DateTime?`. No `isVerified` boolean.
    // But line 3 in api/listings/route.ts imported `getTestUser` which had `isVerified: true`.
    // And GET /api/listings included `owner: { select: { isVerified: true } }`. 
    // This implies `User` model MIGHT have `isVerified` or I missed it?
    // Re-reading Step 26: 
    // `id`, `email`, `passwordHash`, `emailVerified`, `accounts`, `sessions`, `isBlacklisted`, `name`, `image`, `phoneNumber`, `contactLink`, `college`, `listings`, `savedListings`, `createdAt`, `updatedAt`.
    // NO `isVerified`.
    // So `isVerified` in API select MUST BE WRONG or based on a computed field? Prisma select acts on DB columns.
    // If API works, then DB has it. If DB doesn't have it, API fails.
    // I suspect `emailVerified` is what we have.
    // I will use `emailVerified` (generic check `!!emailVerified`).

    return (
        <main className="min-h-screen bg-gray-100 pb-20">
            <Navbar />

            <div className="max-w-6xl mx-auto p-4 space-y-8">
                <h1 className="font-heavy text-3xl uppercase">Admin Dashboard</h1>

                {/* STATS ROW */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border-2 border-black p-6 shadow-retro flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full border border-black">
                            <Users size={32} />
                        </div>
                        <div>
                            <h2 className="font-mono font-bold text-gray-500">TOTAL USERS</h2>
                            <p className="font-heavy text-4xl">{userCount}</p>
                        </div>
                    </div>

                    <Link href="/admin/listings">
                        <div className="bg-white border-2 border-black p-6 shadow-retro flex items-center gap-4 hover:bg-yellow-50 transition-colors cursor-pointer">
                            <div className="bg-yellow-100 p-3 rounded-full border border-black">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h2 className="font-mono font-bold text-gray-500">TOTAL LISTINGS</h2>
                                <p className="font-heavy text-4xl">{listingCount}</p>
                            </div>
                        </div>
                    </Link>

                    <div className="bg-white border-2 border-black p-6 shadow-retro flex items-center gap-4">
                        <div className="bg-red-100 p-3 rounded-full border border-black">
                            <ShieldAlert size={32} />
                        </div>
                        <div>
                            <h2 className="font-mono font-bold text-gray-500">SYSTEM STATUS</h2>
                            <p className="font-heavy text-xl text-green-600">ONLINE</p>
                        </div>
                    </div>
                </div>

                {/* RECENT USERS TABLE */}
                <section className="bg-white border-2 border-black p-6 shadow-retro">
                    <h2 className="font-heavy text-xl mb-4 border-b-2 border-black inline-block">RECENT JOINERS</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full font-mono text-sm text-left">
                            <thead className="bg-gray-100 border-b-2 border-black">
                                <tr>
                                    <th className="p-3">NAME</th>
                                    <th className="p-3">EMAIL</th>
                                    <th className="p-3">JOINED</th>
                                    <th className="p-3">STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentUsers.map(u => (
                                    <tr key={u.id} className="border-b border-gray-200 hover:bg-gray-50">
                                        <td className="p-3 font-bold">{u.name || "N/A"}</td>
                                        <td className="p-3">{u.email}</td>
                                        <td className="p-3">{new Date(u.createdAt).toLocaleDateString()}</td>
                                        <td className="p-3">
                                            {u.emailVerified ? (
                                                <span className="text-green-600 font-bold">Verified</span>
                                            ) : (
                                                <span className="text-yellow-600">Pending</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </main>
    );
}
