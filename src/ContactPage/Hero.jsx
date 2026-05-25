import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative bg-[#1A3C6E] pt-32 pb-20 overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 42px)"
        }}
      />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-[0.78rem] font-medium mb-8">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Contact</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full mb-6">
          Get In Touch
        </div>

        <h1 className="font-display font-extrabold text-white leading-tight
          text-[clamp(2.4rem,5vw,3.6rem)] mb-4 max-w-2xl">
          Contact Apex Roofing —<br />
          <span className="text-[#F97316]">Get a Free Estimate Today.</span>
        </h1>

        <p className="text-white/60 text-[1rem] leading-relaxed max-w-lg mb-8">
          Fill out the form below or call us directly. We respond within the hour —
          same-day inspections available across Austin and surrounding areas.
        </p>

        <a href="tel:+15120000000"
          className="inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
            text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
            shadow-[0_6px_20px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
          <Phone size={16} strokeWidth={2.5} />
          Call (512) 000-0000
        </a>

      </div>

      {/* Bottom cut */}
      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-[#F9FAFB] z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}