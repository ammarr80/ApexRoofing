import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const STATS = [
  { num: "5",    label: "Cities Covered" },
  { num: "24/7", label: "Emergency Response" },
  { num: "20+",  label: "Years in Business" },
  { num: "1,400+", label: "Roofs Completed" },
];

const AREAS = ["Springfield", "Lincoln", "Decatur", "Champaign", "Bloomington"];

export default function ServiceAreasHero() {
  return (
    <section className="relative bg-[#1A3C6E] pt-24 pb-20 overflow-hidden">

      <div className="absolute right-0 top-0 bottom-0 w-[55%]">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E] via-[#1A3C6E]/75 to-[#1A3C6E]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C6E]/30 via-transparent to-[#1A3C6E]/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-2 text-white/40 text-[0.75rem] font-medium mb-5">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Service Areas</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
          px-3 py-1 rounded-full mb-4">
          <MapPin size={11} className="text-[#F97316]" /> Where We Work
        </div>

        <h1 className="font-display font-extrabold text-white leading-tight
          text-[clamp(1.9rem,3.8vw,2.9rem)] mb-3 max-w-xl">
          Roofing Springfield &<br />
          <span className="text-[#F97316]">Central Illinois.</span>
        </h1>

        <p className="text-white/55 text-[0.88rem] leading-relaxed mb-6 max-w-md">
          Same crew, same standards, same 10-year warranty — across Springfield and surrounding communities.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <a href="tel:+15550183921"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
              shadow-[0_4px_16px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
            <Phone size={14} strokeWidth={2.5} />
            Call (555) 018-3921
          </a>
          <Link to="/quote"
            className="flex items-center gap-2 border border-white/25 hover:border-white/50
              text-white font-semibold text-[0.85rem] px-5 py-3 rounded-xl
              transition-all hover:bg-white/8">
            Free Estimate <ArrowRight size={13} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {AREAS.map((a) => (
            <div key={a} className="flex items-center gap-1.5 bg-white/8 border border-white/12
              text-white/65 text-[0.75rem] font-medium px-3 py-1 rounded-full">
              <MapPin size={10} className="text-[#F97316]" />
              {a}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
          {STATS.map((s) => (
            <div key={s.num}>
              <p className="font-display font-extrabold text-white text-[1.6rem] leading-none mb-0.5">
                {s.num}
              </p>
              <p className="text-white/40 text-[0.65rem] font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-14 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}