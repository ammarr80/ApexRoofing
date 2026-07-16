import { Link } from "react-router-dom";
import {
  Wrench, Home, Droplets, CloudLightning,
  Pipette, Search, ArrowRight, CheckCircle2, Phone
} from "lucide-react";

const SERVICES = [
  { icon: <Wrench size={22} />,          title: "Roof Repair",           desc: "Cracked shingles, damaged flashing, active leaks — we diagnose it fast and fix it right, before a small issue becomes a costly one." },
  { icon: <Home size={22} />,            title: "Roof Replacement",      desc: "Complete tear-off and new roof installation, built to stand up to everything Central Illinois weather can throw at it." },
  { icon: <Droplets size={22} />,        title: "Leak Detection",        desc: "We track down the actual source of the leak — not just the water stain — and seal it properly so it stays fixed." },
  { icon: <CloudLightning size={22} />,  title: "Storm Damage Repair",   desc: "Hail or wind damage after a storm? We respond quickly and can work directly with your insurance adjuster on the claim." },
  { icon: <Pipette size={22} />,         title: "Gutter Installation",   desc: "Properly sized, properly sloped gutters and downspouts that move water away from your roof and foundation." },
  { icon: <Search size={22} />,          title: "Roof Inspection",       desc: "A thorough, written inspection report — ideal before buying or selling a home, or right after a major storm." },
];

const CHECKS = [
  "Upfront pricing before any work begins",
  "Quality materials and proper tools on every job",
  "Clean, respectful crews who treat your property well",
  "No hidden costs, no surprise charges",
];

export default function Services() {
  return (
    <section className="bg-[#111827] py-24" id="services">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top header row */}
        <div className="flex flex-col justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/25
              text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3 py-1.5 rounded-full mb-4">
              What We Do
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              Roofing Services for Springfield Homeowners
            </h2>
            <p className="text-white/50 mt-3 max-w-4xl text-[0.95rem] leading-relaxed">
              Whether it's an emergency repair or a full roof replacement, we show up on time, give you a clear price upfront, and get the job done right — no callbacks, no runaround.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <Link to="/services"
              className="flex items-center gap-2 border border-white/15 hover:border-white/35
                text-white/80 hover:text-white font-semibold text-[0.82rem]
                px-5 py-2.5 rounded-lg transition-all">
              View All Services <ArrowRight size={14} />
            </Link>
            <a href="tel:+15550183921"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-semibold text-[0.82rem]
                px-5 py-2.5 rounded-lg transition-all
                shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>

        {/* Body: checklist left + cards right */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Cards grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title}
                className="group bg-white/4 hover:bg-[#1A3C6E]/60
                  border border-white/8 hover:border-[#1A3C6E]
                  rounded-2xl p-6 transition-all duration-250 cursor-pointer">

                {/* Icon */}
                <div className="w-11 h-11 bg-[#F97316]/15 group-hover:bg-[#F97316]/25
                  border border-[#F97316]/20 rounded-xl
                  flex items-center justify-center text-[#F97316] mb-5
                  transition-colors duration-200">
                  {s.icon}
                </div>

                <h3 className="font-display font-bold text-white text-[1rem] mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/50 text-[0.82rem] leading-relaxed mb-4">
                  {s.desc}
                </p>
                <Link to="/services"
                  className="flex items-center gap-1.5 text-[#F97316] text-[0.8rem] font-semibold
                    hover:gap-2.5 transition-all">
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}