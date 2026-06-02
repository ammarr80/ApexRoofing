import { Link } from "react-router-dom";
import { Phone, Clock, MessageSquare } from "lucide-react";

const DETAILS = [
  { icon: <Clock size={13} />,         text: "Mon–Sat 7am–7pm" },
  { icon: <Phone size={13} />,         text: "Same-day response" },
  { icon: <MessageSquare size={13} />, text: "Reply within the hour" },
];

export default function ContactHero() {
  return (
    <section className="relative bg-[#1A3C6E] pt-24 pb-20 overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-white/4 border border-white/8" />
      <div className="absolute right-32 bottom-0 w-48 h-48 rounded-full bg-[#F97316]/8" />
      <div className="absolute -left-12 bottom-8 w-48 h-48 rounded-full bg-white/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-2 text-white/40 text-[0.75rem] font-medium mb-5">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Contact</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
          px-3 py-1 rounded-full mb-4">
          Get In Touch
        </div>

        <h1 className="font-display font-extrabold text-white leading-tight
          text-[clamp(1.9rem,3.8vw,2.9rem)] mb-3 max-w-xl">
          Contact Apex Roofing —<br />
          <span className="text-[#F97316]">Get a Free Estimate Today.</span>
        </h1>

        <p className="text-white/55 text-[0.88rem] leading-relaxed max-w-md mb-6">
          Fill out the form below or call us directly. We respond within the hour —
          same-day inspections available across Houston.
        </p>

        <a href="tel:+15120000000"
          className="inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
            text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
            shadow-[0_4px_16px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 mb-8">
          <Phone size={14} strokeWidth={2.5} />
          Call (512) 000-0000
        </a>

        <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
          {DETAILS.map((d) => (
            <div key={d.text} className="flex items-center gap-1.5 text-white/40 text-[0.75rem] font-medium">
              <span className="text-[#F97316]/70">{d.icon}</span>
              {d.text}
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-14 bg-[#F9FAFB] z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}