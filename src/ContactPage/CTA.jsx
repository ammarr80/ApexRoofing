import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#1A3C6E] py-20 relative overflow-hidden">

      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.8) 40px, rgba(255,255,255,0.8) 42px)"
        }}
      />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-white/4 border border-white/8" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
          text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
          px-3.5 py-1.5 rounded-full mb-6">
          Free Estimate
        </div>

        <h2 className="font-display font-extrabold text-white
          text-[clamp(2rem,4.5vw,3.2rem)] leading-tight mb-4">
          Request a Free Estimate —<br />
          <span className="text-[#F97316]">We'll Get Back to You Fast.</span>
        </h2>

        <p className="text-white/55 text-[0.95rem] leading-relaxed mb-10 max-w-lg">
          No obligation, no pressure. Just an honest assessment of your roof and
          a clear quote from Austin's most trusted roofing team.
        </p>

        <div className="flex flex-wrap gap-4">
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

      </div>
    </section>
  );
}