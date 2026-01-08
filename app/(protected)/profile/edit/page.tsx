"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        image: "",
        college: "",
        phoneNumber: "",
        contactLink: "",
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch("/api/user/me");
                if (res.ok) {
                    const data = await res.json();
                    setFormData({
                        name: data.name || "",
                        image: data.image || "",
                        college: data.college || "",
                        phoneNumber: data.phoneNumber || "",
                        contactLink: data.contactLink || "",
                    });
                }
            } catch (err) {
                console.error("Failed to load profile", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const res = await fetch("/api/user/me", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error("Failed to update");
            }

            router.push("/profile");
            router.refresh();
        } catch (err) {
            console.error("Update failed", err);
            alert("Failed to update profile");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-brand-bg flex items-center justify-center">
                <Loader2 className="animate-spin" size={48} />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-brand-bg pb-20">
            <Navbar />

            <div className="max-w-2xl mx-auto p-4">
                <Link href="/profile" className="inline-flex items-center gap-2 font-mono font-bold mb-6 hover:underline">
                    <ArrowLeft size={20} /> BACK TO PROFILE
                </Link>

                <div className="bg-white border-2 border-black p-8 shadow-retro">
                    <h1 className="font-heavy text-3xl mb-6 uppercase border-b-2 border-black inline-block">Edit Profile</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* PREVIEW IMAGE */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-black overflow-hidden flex-shrink-0">
                                <img
                                    src={formData.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-xs font-mono text-gray-500">
                                Avatar auto-generates from name if no image URL provided.
                            </div>
                        </div>

                        <div>
                            <label className="block font-mono font-bold text-sm mb-1">FULL NAME</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                placeholder="e.g. Dishant Pandey"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-mono font-bold text-sm mb-1">COLLEGE / BATCH</label>
                            <input
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                placeholder="e.g. CSE - 2025"
                            />
                        </div>

                        <div>
                            <label className="block font-mono font-bold text-sm mb-1">PROFILE IMAGE URL</label>
                            <input
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                placeholder="https://..."
                            />
                        </div>

                        <div>
                            <label className="block font-mono font-bold text-sm mb-1">PHONE NUMBER (Optional)</label>
                            <input
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                placeholder="+91..."
                            />
                        </div>

                        <div>
                            <label className="block font-mono font-bold text-sm mb-1">CONTACT LINK (Instagram/LinkedIn)</label>
                            <input
                                name="contactLink"
                                value={formData.contactLink}
                                onChange={handleChange}
                                className="w-full border-2 border-black p-3 font-mono focus:bg-yellow-50 focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                placeholder="https://instagram.com/..."
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={saving}
                                className="w-full bg-black text-white font-heavy text-xl py-4 border-2 border-black hover:bg-brand-orange hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {saving ? <Loader2 className="animate-spin" /> : <Save />}
                                {saving ? "SAVING..." : "SAVE CHANGES"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </main>
    );
}
