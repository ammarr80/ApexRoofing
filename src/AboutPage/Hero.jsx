import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, BadgeCheck, Clock } from "lucide-react";

const PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={13} />, text: "GAF Certified" },
  { icon: <Clock       size={13} />, text: "24/7 Emergency" },
];

export default function AboutHero() {
  return (
    <section className="relative bg-[#112951] pt-24 pb-20 overflow-hidden">

      {/* Photo panel on the right, richer treatment than the original */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%]">
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1400&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112951] via-[#112951]/60 to-[#112951]/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#112951]/40 via-transparent to-[#112951]/50" />
      </div>

      {/* Stripe texture, kept subtle over the left/text side */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-52deg, transparent, transparent 38px, rgba(255,255,255,1) 38px, rgba(255,255,255,1) 40px)",
        }}
      />

      <div
        className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 68%)" }}
      />

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

        <h1 className="font-display font-extrabold text-white leading-[1.1]
          text-[clamp(2rem,4.2vw,3.2rem)] mb-4 max-w-xl">
          Springfield's Roofing Company —{" "}
          <span className="text-[#F97316]">Built on Honest Work.</span>
        </h1>

        <p className="text-white/55 text-[0.92rem] leading-relaxed mb-8 max-w-md">
          Full-service residential and commercial roofing across Springfield and Central Illinois.
          Straightforward pricing, certified crews, work built to last.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a href="tel:+15550183921"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
              shadow-[0_6px_22px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
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