import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const TRUST = [
  { icon: <ShieldCheck size={14} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={14} />, text: "GAF Certified" },
  { icon: <Clock       size={14} />, text: "Same-Day Available" },
];

export default function ServicesCTA() {
  return (
    <section className="bg-[#1A3C6E] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12
              text-white/60 text-[0.68rem] font-semibold tracking-widest uppercase
              px-3 py-1 rounded-full mb-5">
              Get Started Today
            </div>
            <h2 className="font-display font-extrabold text-white
              text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight mb-4">
              The Longer You Wait,<br />
              <span className="text-[#F97316]">The More It Costs.</span>
            </h2>
            <p className="text-white/45 text-[0.88rem] leading-relaxed mb-6">
              A small leak turns into decking rot. Storm damage gets worse with every rain.
              Call today for a free estimate — same-day inspections are available.
            </p>

            <div className="flex flex-wrap gap-5">
              {TRUST.map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 text-white/40 text-[0.75rem] font-medium">
                  <span className="text-[#F97316]/70">{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked CTAs */}
          <div className="flex flex-col gap-3 shrink-0 lg:min-w-[220px]">
            <a
              href="tel:+15550183921"
              className="flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
                shadow-[0_4px_18px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call (555) 018-3921
            </a>
            <Link
              to="/quote"
              className="flex items-center justify-center gap-1.5
                border border-white/15 hover:border-white/30
                text-white/55 hover:text-white/80 font-semibold text-[0.88rem]
                px-7 py-3 rounded-xl transition-all"
            >
              Request Your Free Estimate <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}