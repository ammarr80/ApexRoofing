import { Link } from "react-router-dom";
import {
  Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck,
  Wrench, Home, Droplets, CloudLightning, Pipette, Search,
} from "lucide-react";

const PILLS = [
  { icon: <ShieldCheck size={13} />, text: "Licensed & Insured" },
  { icon: <BadgeCheck  size={13} />, text: "GAF Certified" },
  { icon: <Clock       size={13} />, text: "24/7 Emergency" },
];

const QUICK_LINKS = [
  { icon: <Wrench size={18} />,         label: "Repair",         price: "Most Repairs in 1 Day",   href: "#roof-repair" },
  { icon: <Home size={18} />,           label: "Replacement",    price: "Built to last", href: "#roof-replacement" },
  { icon: <Droplets size={18} />,       label: "Leak Detection", price: "Stop Water Damage Early",   href: "#leak-detection" },
  { icon: <CloudLightning size={18} />, label: "Storm Damage",   price: "Insurance covered", href: "#storm-damage" },
  { icon: <Pipette size={18} />,        label: "Gutters",        price: "Emergency Response",   href: "#gutters" },
  { icon: <Search size={18} />,         label: "Inspection",     price: "Protect Your Foundation",    href: "#inspection" },
];

export default function ServicesHero() {
  return (
    <section className="relative bg-[#112951] pt-28 pb-24 overflow-hidden">

      {/* Photo bg */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112951]/95 via-[#112951]/90 to-[#112951]/70" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-52deg, transparent, transparent 38px, rgba(255,255,255,1) 38px, rgba(255,255,255,1) 40px)",
        }}
      />

      <div
        className="absolute -top-40 -right-16 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 68%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-[0.75rem] font-medium mb-8">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Services</span>
        </div>

        {/* Left text / right 2-col service grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-14 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
              px-3 py-1 rounded-full mb-5">
              What We Offer
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.1]
              text-[clamp(2.1rem,4.4vw,3.3rem)] mb-4">
              Roofing Services for Springfield Homeowners —{" "}
              <span className="text-[#F97316]">Start to Finish.</span>
            </h1>

            <p className="text-white/55 text-[0.92rem] leading-relaxed mb-8 max-w-md">
              From a single shingle repair to a full tear-off, we handle it all.
              Upfront quotes, certified crews, 10-year workmanship warranty.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="tel:+15550183921"
                className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                  text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
                  shadow-[0_6px_22px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
                <Phone size={14} strokeWidth={2.5} />
                Call (555) 018-3921
              </a>
              <Link to="/quote"
                className="flex items-center gap-2 border border-white/25 hover:border-white/50
                  text-white font-semibold text-[0.85rem] px-5 py-3 rounded-xl
                  transition-all hover:bg-white/8">
                Free Estimate <ArrowRight size={13} />
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

          {/* Right — 2-column service card grid */}
          <div className="grid grid-cols-2 gap-3">
            {QUICK_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex flex-col gap-2.5 bg-white/[0.06] hover:bg-white
                  border border-white/12 hover:border-white rounded-2xl px-4 py-4
                  transition-all duration-200 hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-[#F97316]/14
                  flex items-center justify-center text-[#F97316] transition-colors">
                  {s.icon}
                </div>
                <div>
                  <p className="font-display font-bold text-white group-hover:text-[#111827]
                    text-[0.85rem] leading-tight transition-colors">
                    {s.label}
                  </p>
                  <p className="text-white/40 group-hover:text-[#9CA3AF] text-[0.68rem] font-medium transition-colors">
                    {s.price}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}