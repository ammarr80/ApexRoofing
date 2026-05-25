import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const STATS = [
  { num: "9+",   label: "Cities Covered" },
  { num: "40mi", label: "Service Radius" },
  { num: "24/7", label: "Emergency Response" },
  { num: "500+", label: "Austin Roofs Done" },
];

const AREAS = ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Buda", "Kyle", "Georgetown", "Leander", "Manor"];

export default function ServiceAreasHero() {
  return (
    <section className="relative bg-[#1A3C6E] pt-32 pb-24 overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 42px)"
        }}
      />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-white/4 border border-white/8" />
      <div className="absolute -left-10 top-20 w-48 h-48 rounded-full bg-[#F97316]/8" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-[0.78rem] font-medium mb-8">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Service Areas</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full mb-6">
          <MapPin size={12} /> Where We Work
        </div>

        <h1 className="font-display font-extrabold text-white leading-tight
          text-[clamp(2.4rem,5vw,3.6rem)] mb-5 max-w-2xl">
          Roofing Austin &<br />
          <span className="text-[#F97316]">The Entire Metro Area.</span>
        </h1>

        <p className="text-white/60 text-[1rem] leading-relaxed mb-8 max-w-lg">
          Apex Roofing serves homeowners and businesses across Austin and 8 surrounding
          communities. Same crew, same standards, same 10-year warranty — wherever you are.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a href="tel:+15120000000"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
              shadow-[0_6px_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
            <Phone size={16} strokeWidth={2.5} />
            Call (512) 000-0000
          </a>
          <Link to="/quote"
            className="flex items-center gap-2 border border-white/25 hover:border-white/50
              text-white font-semibold text-[0.9rem] px-6 py-3.5 rounded-xl
              transition-all hover:bg-white/8 hover:-translate-y-0.5">
            Free Estimate <ArrowRight size={15} />
          </Link>
        </div>

        {/* Area pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {AREAS.map((a) => (
            <div key={a} className="flex items-center gap-1.5 bg-white/8 border border-white/12
              text-white/70 text-[0.78rem] font-medium px-3.5 py-1.5 rounded-full">
              <MapPin size={11} className="text-[#F97316]" />
              {a}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          {STATS.map((s) => (
            <div key={s.num}>
              <p className="font-display font-extrabold text-white text-[1.8rem] leading-none mb-1">
                {s.num}
              </p>
              <p className="text-white/45 text-[0.68rem] font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom cut */}
      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}