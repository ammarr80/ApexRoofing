import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const TRUST = [
  { icon: <ShieldCheck size={15} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={15} />, text: "GAF Certified" },
  { icon: <Clock       size={15} />, text: "Same-Day Available" },
];

export default function AreasCTA() {
  return (
    <section className="bg-[#1A3C6E] py-24 relative overflow-hidden">

      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 42px)"
        }}
      />
      <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px]
        rounded-full bg-white/4 border border-white/8" />
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-[#F97316]/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full mb-6">
          Get Started
        </div>

        <h2 className="font-display font-extrabold text-white
          text-[clamp(2rem,5vw,3.2rem)] leading-tight mb-5">
          Serving Your Area —<br />
          <span className="text-[#F97316]">Request a Free Estimate.</span>
        </h2>

        <p className="text-white/55 text-[0.95rem] leading-relaxed mb-10 max-w-lg">
          Call Apex Roofing or fill out our quote form. We'll confirm your area,
          schedule an inspection, and get you a written estimate — same day in most cases.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="tel:+15120000000"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.95rem] px-8 py-4 rounded-xl
              shadow-[0_6px_24px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5"
          >
            <Phone size={17} strokeWidth={2.5} />
            Call (512) 000-0000
          </a>
          <Link
            to="/quote"
            className="flex items-center gap-2 border border-white/25 hover:border-white/50
              text-white font-semibold text-[0.95rem] px-8 py-4 rounded-xl
              transition-all hover:bg-white/8 hover:-translate-y-0.5"
          >
            Request Free Estimate <ArrowRight size={15} />
          </Link>
        </div>

        <div className="flex flex-wrap gap-6">
          {TRUST.map((t) => (
            <div key={t.text} className="flex items-center gap-2 text-white/50 text-[0.82rem] font-medium">
              <span className="text-[#F97316]">{t.icon}</span>
              {t.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}