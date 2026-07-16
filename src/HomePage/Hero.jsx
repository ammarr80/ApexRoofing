import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck, Star } from "lucide-react";

const PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed, Bonded & Insured" },
  { icon: <BadgeCheck size={13} />, text: "10-Year Workmanship Warranty" },
  { icon: <Clock size={13} />, text: "Same-Day Estimates Available" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1A3C6E] pt-[104px] pb-24">

      {/* Background image on the right — same pattern as ServicesHero */}
      <div className="absolute right-0 top-0 bottom-0 hidden w-[55%] lg:block">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />

        {/* Solid navy block with a diagonal edge — hard cut instead of a fade */}
        <div
          className="absolute inset-0 bg-[#1A3C6E]"
          style={{ clipPath: "polygon(0 0, 38% 0, 12% 100%, 0 100%)" }}
        />

        {/* Floating cards anchored to the section's right region (scale with %) */}
        <div className="absolute right-[8%] top-[56%] z-50 rounded-2xl bg-[#1A3C6E]/95 px-6 py-5 text-white shadow-2xl backdrop-blur">
          <div className="mb-1 flex items-center gap-2">
            <Clock size={14} color="#F97316" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/60">Emergency Roof Repair</p>
          </div>
          <p className="font-display text-[0.95rem] font-bold">Open 24/7</p>
          <p className="mt-0.5 text-[0.68rem] text-white/50">Storm Damage? We're On Call</p>
        </div>
        <div className="absolute bottom-[18%] right-[30%] rounded-2xl bg-white px-5 py-5 shadow-2xl">
          <div className="mb-1 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} fill="#F97316" color="#F97316" />
            ))}
          </div>
          <p className="font-display text-[1.5rem] font-extrabold leading-none text-[#111827]">4.9</p>
          <p className="mt-0.5 text-[0.7rem] font-medium text-[#6B7280]">Rated by 400+ Local Homeowners</p>
        </div>
      </div>

      {/* Content — SAME container as the rest of the site: max-w-6xl mx-auto px-6 */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-white/90">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F97316]" />
            24/7 Emergency Roofing Services in Springfield
          </div>
          {/* Headline */}
          <h1 className="mb-5 font-display text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] text-white text-balance">
            Roof Repair & Replacement
            <br />
            You Can <span className="text-[#F97316]">Count On.</span>
          </h1>
          {/* Sub */}
          <p className="mb-8 max-w-md text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-white/65 text-pretty">
            Leaks, storm damage, or a roof that's finally due for replacement — PrimeShield Roofing gets it done right the first time, backed by a written warranty.
          </p>
          {/* CTAs */}
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="tel:+10000000000"
              className="flex items-center gap-2.5 rounded-xl bg-[#F97316] px-7 py-3.5 text-[0.9rem] font-bold text-white shadow-[0_6px_20px_rgba(249,115,22,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#EA6C0A]"
            >
              <Phone size={16} strokeWidth={2.5} />
              Call Now for a Free Quote
            </a>
            <Link
              to="/quote"
              className="flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-[0.9rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              Get a Free Estimate <ArrowRight size={15} />
            </Link>
          </div>
          {/* Pills */}
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {PILLS.map((p) => (
              <div key={p.text} className="flex items-center gap-1.5 text-[0.78rem] font-medium text-white/60">
                <span className="text-[#F97316]">{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Angled white transition into the next section — same as ServicesHero */}
      <div
        className="absolute bottom-[-2px] left-0 right-0 z-10 h-14 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }}
      />
    </section>
  );
}