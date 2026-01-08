export default function PoliceTape() {
  return (
    <div className="absolute top-32 left-0 w-full z-0 overflow-hidden pointer-events-none -rotate-2 opacity-90 mix-blend-hard-light">
      <div className="bg-black text-white py-3 border-y-2 border-white">
        {/* We duplicate text to make the loop seamless */}
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          <span className="font-heavy text-xl uppercase tracking-widest">
            ⚡ Verified Students Only ⚡ No Brokers Allowed ⚡ PG & Flats⚡
          </span>
          <span className="font-heavy text-xl uppercase tracking-widest">
            ⚡ Verified Students Only ⚡ No Brokers Allowed ⚡ PG & Flats⚡
          </span>
          <span className="font-heavy text-xl uppercase tracking-widest">
             ⚡ Verified Students Only ⚡ No Brokers Allowed ⚡ PG & Flats⚡
          </span>
        </div>
      </div>
    </div>
  );
}