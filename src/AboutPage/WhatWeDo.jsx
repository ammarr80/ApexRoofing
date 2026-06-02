import { Link } from "react-router-dom";
import {
  Wrench, Home, Search, Zap, Settings, ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    icon: <Wrench size={22} />,
    title: "Roof Repair",
    desc: "From isolated shingle damage to widespread storm impact, we diagnose the root cause and fix it correctly — not just patch over it.",
  },
  {
    icon: <Home size={22} />,
    title: "Roof Replacement",
    desc: "When repair isn't enough, we handle full tear-off and installation using premium materials rated for Texas weather conditions.",
  },
  {
    icon: <Search size={22} />,
    title: "Roof Inspections",
    desc: "Detailed written inspection reports with photos. Used for insurance claims, real estate transactions, or routine maintenance checks.",
  },
  {
    icon: <Zap size={22} />,
    title: "Emergency Roofing",
    desc: "Active leak or sudden storm damage? We dispatch fast — same day across Houston, after-hours included, no emergency surcharge.",
  },
  {
    icon: <Settings size={22} />,
    title: "Roof Maintenance",
    desc: "Preventative maintenance extends the life of your roof significantly. We clear debris, reseal vulnerable areas, and catch problems early.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#F9FAFB] py-24" id="what-we-do">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            What We Do
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-extrabold text-[#111827]
                text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
                Full-Service Roofing<br />for Houston Homes & Businesses
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
                Apex handles every aspect of residential and commercial roofing — from a single
                repair call to a full replacement project. One company, every service, backed by
                a 10-year workmanship warranty.
              </p>
            </div>
            <Link to="/services"
              className="flex items-center gap-2 border border-[#E5E7EB] hover:border-[#1A3C6E]/30
                text-[#111827] font-semibold text-[0.85rem] px-5 py-2.5 rounded-xl
                transition-all hover:bg-white shrink-0 w-fit">
              See All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Services — alternating layout */}
        <div className="flex flex-col gap-5">
          {SERVICES.map((s, i) => (
            <div key={s.title}
              className={`flex flex-col sm:flex-row items-start gap-6 p-7
                rounded-2xl border transition-all duration-200
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                ${i % 2 === 0
                  ? "bg-white border-[#E5E7EB] hover:border-[#1A3C6E]/20"
                  : "bg-[#1A3C6E] border-[#1A3C6E]"
                }`}>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                ${i % 2 === 0
                  ? "bg-[#1A3C6E]/8 border border-[#1A3C6E]/12 text-[#1A3C6E]"
                  : "bg-[#F97316]/20 border border-[#F97316]/30 text-[#F97316]"
                }`}>
                {s.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`font-display font-bold text-[1.1rem] mb-2
                  ${i % 2 === 0 ? "text-[#111827]" : "text-white"}`}>
                  {s.title}
                </h3>
                <p className={`text-[0.88rem] leading-relaxed
                  ${i % 2 === 0 ? "text-[#6B7280]" : "text-white/60"}`}>
                  {s.desc}
                </p>
              </div>

              {/* CTA */}
              <Link to="/services"
                className={`flex gap-1.5 font-semibold text-[0.82rem]
                  shrink-0 hover:gap-3 transition-all md:items-center md:self-top
                  ${i % 2 === 0 ? "text-[#1A3C6E]" : "text-[#F97316]"}`}>
                Learn More <ArrowRight size={14} />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}