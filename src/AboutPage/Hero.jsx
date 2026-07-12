import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={13} />, text: "GAF Certified" },
  { icon: <Clock       size={13} />, text: "24/7 Emergency" },
];

export default function AboutHero() {
  return (
    <section className="relative bg-[#1A3C6E] pt-24 pb-20 overflow-hidden">

      <div className="absolute right-0 top-0 bottom-0 w-[50%]">
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3C6E] via-[#1A3C6E]/70 to-[#1A3C6E]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A3C6E]/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-2 text-white/40 text-[0.75rem] font-medium mb-5">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">About</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#F97316]" />
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
            text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
            px-3 py-1 rounded-full">
            About PrimeShield Roofing
          </div>
        </div>

        <h1 className="font-display font-extrabold text-white leading-tight
          text-[clamp(1.9rem,3.8vw,2.9rem)] mb-3 max-w-xl">
          Springfield's Roofing Company —<br />
          <span className="text-[#F97316]">Built on Honest Work.</span>
        </h1>

        <p className="text-white/55 text-[0.88rem] leading-relaxed mb-6 max-w-md">
          Full-service residential and commercial roofing across Springfield and Central Illinois.
          Straightforward pricing, certified crews, work built to last.
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
            Get Free Estimate <ArrowRight size={13} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-5">
          {PILLS.map((p) => (
            <div key={p.text} className="flex items-center gap-1.5 text-white/45 text-[0.75rem] font-medium">
              <span className="text-[#F97316]">{p.icon}</span>
              {p.text}
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-14 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}