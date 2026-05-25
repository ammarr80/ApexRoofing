import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, BadgeCheck, Clock, FileText } from "lucide-react";

const HERO_PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={13} />, text: "GAF Certified" },
  { icon: <Clock       size={13} />, text: "Response in 24 hrs" },
];

const STATS = [
  { num: "1,200+", label: "Roofs completed" },
  { num: "10yr",   label: "Workmanship warranty" },
  { num: "4.9★",   label: "Google rating" },
];

const SERVICES = [
  "Roof Repair",
  "Roof Replacement",
  "Leak Detection",
  "Storm Damage",
  "Gutter Installation",
  "Roof Inspection",
  "Other",
];

export default function QuoteHero() {
  return (
    <section className="relative bg-[#112951] pt-32 pb-28 overflow-hidden">

      {/* Photo bg */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1400&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112951]/95 via-[#112951]/80 to-[#112951]/50" />
      </div>

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-52deg, transparent, transparent 38px, rgba(255,255,255,1) 38px, rgba(255,255,255,1) 40px)",
        }}
      />

      {/* Orange glow orb */}
      <div
        className="absolute -top-40 -right-20 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-[0.75rem] font-medium mb-8">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/60">Get a Free Quote</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F97316]/14 border border-[#F97316]/30
              text-[#FB923C] text-[0.7rem] font-bold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
              Free Estimates — No Obligation
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.08]
              text-[clamp(2.5rem,5vw,3.9rem)] mb-5">
              Get Your Free<br />
              Roofing Estimate<br />
              <em className="not-italic text-[#F97316]">In 24 Hours.</em>
            </h1>

            <p className="text-white/55 text-[1rem] leading-relaxed mb-9 max-w-[460px]">
              Austin's most trusted roofing crew. We show up, inspect your roof, and hand
              you a written quote — with zero pressure and zero cost. Most estimates
              are scheduled within one business day.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#quote-form"
                className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                  text-white font-bold text-[0.92rem] px-7 py-3.5 rounded-xl
                  shadow-[0_6px_24px_rgba(249,115,22,0.42)]
                  transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(249,115,22,0.48)]">
                <FileText size={16} strokeWidth={2.5} />
                Request Free Estimate
              </a>
              <a
                href="tel:+15120000000"
                className="flex items-center gap-2.5 border border-white/22 hover:border-white/48
                  text-white font-semibold text-[0.92rem] px-6 py-3.5 rounded-xl
                  transition-all hover:bg-white/7 hover:-translate-y-0.5">
                <Phone size={15} strokeWidth={2.5} />
                (512) 000-0000
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-6">
              {HERO_PILLS.map((p) => (
                <div key={p.text} className="flex items-center gap-2 text-white/48 text-[0.8rem] font-medium">
                  <span className="text-[#F97316]">{p.icon}</span>
                  {p.text}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/[0.09]">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-black text-white text-[1.75rem] leading-none mb-1">
                    {s.num}
                  </p>
                  <p className="text-[0.72rem] text-white/38 font-medium uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating mini form card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl overflow-hidden
              shadow-[0_32px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.07)]">
              <div className="bg-[#1A3C6E] px-7 py-5 border-b border-white/8">
                <h3 className="font-display font-bold text-white text-[1.1rem] mb-1">
                  Start Your Free Quote
                </h3>
                <p className="text-white/48 text-[0.8rem]">Takes less than 90 seconds.</p>
              </div>
              <div className="bg-white px-7 py-6">
                <div className="flex flex-col gap-3 mb-4">
                  {["Your name", "Phone number", "Street address"].map((ph) => (
                    <input
                      key={ph}
                      type="text"
                      placeholder={ph}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB]
                        text-[0.88rem] text-[#111827] placeholder-[#9CA3AF]
                        focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                        transition-all"
                    />
                  ))}
                  <select className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB]
                    text-[0.88rem] text-[#374151]
                    focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
                    transition-all appearance-none bg-white cursor-pointer">
                    <option value="">Select service type</option>
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <a
                  href="#quote-form"
                  className="flex items-center justify-center gap-2 w-full
                    bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.92rem]
                    py-3.5 rounded-xl transition-all
                    shadow-[0_4px_16px_rgba(249,115,22,0.38)]
                    hover:shadow-[0_6px_22px_rgba(249,115,22,0.46)]
                    hover:-translate-y-0.5">
                  Send My Free Estimate Request
                  <ArrowRight size={15} />
                </a>
                <p className="text-center text-[0.7rem] text-[#9CA3AF] mt-3 flex items-center justify-center gap-1.5">
                  🔒 Your info is never sold or shared.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Diagonal cut */}
      <div
        className="absolute bottom-[-2px] left-0 right-0 h-16 bg-[#F9FAFB] z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }}
      />
    </section>
  );
}