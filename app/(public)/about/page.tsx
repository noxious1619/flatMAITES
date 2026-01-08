import Navbar from "@/app/components/Navbar";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F0F0F0] pb-20">
            <Navbar />

            <div className="max-w-4xl mx-auto p-4 space-y-12">

                {/* HERO SECTION */}
                <section className="text-center py-10 relative">
                    <h1 className="font-heavy text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-4 rotate-[-2deg]">
                        WE ARE <br /> <span className="text-brand-orange">FLATMATE</span>
                    </h1>
                    <p className="font-mono text-xl max-w-lg mx-auto bg-black text-white p-2 rotate-2 inline-block">
                        No Brokers. No Drama. Just Vibes.
                    </p>
                </section>

                {/* STORY CARD */}
                <section className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-yellow-300 w-32 h-32 rotate-45 translate-x-16 -translate-y-16 border-l-2 border-b-2 border-black"></div>

                    <h2 className="font-heavy text-3xl mb-6 border-b-2 border-black inline-block">THE ORIGIN STORY</h2>
                    <div className="space-y-4 font-mono leading-relaxed">
                        <p>
                            It started in a cramped hostel room in 2025. We were tired of scrolling through shady Facebook groups and dealing with greedy brokers just to find a decent place to live near campus.
                        </p>
                        <p>
                            <span className="font-bold bg-yellow-100 p-1">FlatMATE</span> was born out of frustration and a desire to build a community where students can tackle the housing crisis together.
                        </p>
                        <p>
                            We believe finding a flatmate should be as easy as finding a meme partner. Matches based on vibes, college, and study habits—not just budget.
                        </p>
                    </div>
                </section>

                {/* VALUES GRID */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#FF914D] border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                        <h3 className="font-heavy text-2xl mb-2">STUDENT FIRST</h3>
                        <p className="font-mono text-sm">Built by students, for students. We know the struggle.</p>
                    </div>
                    <div className="bg-[#FFDE59] border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                        <h3 className="font-heavy text-2xl mb-2">VERIFIED</h3>
                        <p className="font-mono text-sm">No fake profiles. We verify college IDs.</p>
                    </div>
                    <div className="bg-[#54D6FF] border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                        <h3 className="font-heavy text-2xl mb-2">ZERO SUITS</h3>
                        <p className="font-mono text-sm">No corporate nonsense. Just raw utility.</p>
                    </div>
                </section>

                {/* CALL TO ACTION */}
                <div className="text-center py-10">
                    <a href="/feed" className="inline-block bg-black text-white font-heavy text-3xl px-8 py-4 border-2 border-black hover:bg-white hover:text-black transition-colors shadow-retro">
                        FIND YOUR SQUAD
                    </a>
                </div>

            </div>
        </main>
    );
}
