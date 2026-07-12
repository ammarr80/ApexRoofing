import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const TRUST = [
  { icon: <ShieldCheck size={14} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={14} />, text: "GAF Certified" },
  { icon: <Clock       size={14} />, text: "Same-Day Available" },
];

export default function AboutCTA() {
  return (
    <section className="bg-[#1A3C6E] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12
              text-white/60 text-[0.68rem] font-semibold tracking-widest uppercase
              px-3 py-1 rounded-full mb-5">
              Work With Us
            </div>
            <h2 className="font-display font-extrabold text-white
              text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight mb-4">
              A Roofer You Can<br />
              <span className="text-[#F97316]">Actually Trust.</span>
            </h2>
            <p className="text-white/45 text-[0.88rem] leading-relaxed">
              We'll come out, give you an honest assessment, and tell you exactly what your roof needs — nothing more, nothing less.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 shrink-0 lg:items-end">
            <div className="flex flex-col gap-3 lg:min-w-[220px]">
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
                Request Free Estimate <ArrowRight size={13} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
              {TRUST.map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 text-white/35 text-[0.72rem] font-medium">
                  <span className="text-[#F97316]/60">{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}