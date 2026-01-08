"use client";

import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import { Trash2, Eye, Loader2 } from "lucide-react";
import Link from "next/link";

type Listing = {
    id: string;
    title: string;
    price: number;
    isAvailable: boolean;
    createdAt: string;
    owner: {
        name: string | null;
        email: string | null;
    };
};

export default function AdminListings() {
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // We need an API to fetch ALL listings for admin.
        // GET /api/listings returns all *available* listings.
        // Admin might want ALL (even unavailable).
        // I can reuse GET /api/listings for now, or create a specific admin route.
        // Given the constraints, I'll use /api/listings (Feed) but ideally Admin needs a separate one.
        // Let's assume for this MVP, Admin sees what Feed sees, OR I add a query param ?all=true handled by API?
        // OR: I just make a Server Action inside this file if I could.
        // But since I'm using "use client", I'll stick to client fetch.
        // I'll fetch /api/listings for now. If it filters unavailable, so be it for now.

        // Better: GET /api/listings?admin=true (if I implement it).
        // Or I just use Server Component for this page.
        // Let's switch to Server Component pattern for this page to get ALL listings using Prisma directly.
        // But I entered "use client" to handle Delete comfortably without Server Actions setup.
        // I'll stick to "use client" and fetch /api/listings.

        fetch("/api/listings")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setListings(data);
            })
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete/mark filled?")) return;
        try {
            await fetch(`/api/listings/${id}`, { method: "DELETE" });
            setListings(prev => prev.filter(l => l.id !== id));
        } catch (e) {
            alert("Failed to delete");
        }
    }

    if (loading) return <div className="p-10 text-center">Loading...</div>;

    return (
        <main className="min-h-screen bg-gray-100 pb-20">
            <Navbar />
            <div className="max-w-6xl mx-auto p-4 space-y-8">
                <h1 className="font-heavy text-3xl uppercase">Manage Listings</h1>

                <div className="bg-white border-2 border-black p-6 shadow-retro overflow-x-auto">
                    <table className="w-full font-mono text-sm text-left">
                        <thead className="bg-gray-100 border-b-2 border-black">
                            <tr>
                                <th className="p-3">TITLE</th>
                                <th className="p-3">OWNER</th>
                                <th className="p-3">PRICE</th>
                                <th className="p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listings.map(l => (
                                <tr key={l.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-3 font-bold truncate max-w-xs">{l.title}</td>
                                    <td className="p-3">
                                        <div className="text-xs text-gray-500">{l.owner.name}</div>
                                        <div className="text-[10px] text-gray-400">{l.owner.email}</div>
                                    </td>
                                    <td className="p-3">₹{l.price}</td>
                                    <td className="p-3 flex gap-2">
                                        <Link href={`/listing/${l.id}`} className="p-2 border border-black hover:bg-black hover:text-white transition-colors">
                                            <Eye size={16} />
                                        </Link>
                                        <button onClick={() => handleDelete(l.id)} className="p-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors">
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {listings.length === 0 && (
                                <tr><td colSpan={4} className="p-4 text-center">No listings found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
