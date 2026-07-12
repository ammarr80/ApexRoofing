import { Link } from "react-router-dom";
import {
  Wrench, Home, Search, Zap, Settings, ArrowRight, Check,
} from "lucide-react";

const SERVICES = [
  {
    icon: <Wrench size={26} />,
    title: "Roof Repair",
    desc: "We find the root cause of leaks and damage, then fix it properly — no quick patch jobs.",
    benefits: ["Storm damage", "Leak detection", "Missing shingles"],
    badge: "Insurance Claims Welcome",
    cta: "View Service",
  },
  {
    icon: <Home size={26} />,
    title: "Roof Replacement",
    desc: "Full tear-off and installation with premium materials rated for Illinois weather.",
    benefits: ["Free estimates", "Financing available", "10-year warranty"],
    badge: "Most Popular",
    cta: "Explore Service",
  },
  {
    icon: <Zap size={26} />,
    title: "Emergency Roofing",
    desc: "Active leak or sudden storm damage? We dispatch same day across Springfield and surrounding areas — after-hours included, with no emergency surcharge.",
    benefits: ["Same-day dispatch", "After-hours service", "No surcharge"],
    badge: "Same-Day Service",
    cta: "Get Help Now",
    featured: true,
  },
  {
    icon: <Search size={26} />,
    title: "Roof Inspections",
    desc: "Detailed written reports with photos — for insurance claims, home sales, or maintenance.",
    benefits: ["Written report", "Photo documentation", "Claim support"],
    badge: "Residential & Commercial",
    cta: "See Details",
  },
  {
    icon: <Settings size={26} />,
    title: "Roof Maintenance",
    desc: "Preventative care that extends roof life — we catch small problems before they get costly.",
    benefits: ["Debris clearing", "Resealing", "Annual checkups"],
    badge: "10-Year Warranty",
    cta: "View Service",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#F9FAFB] py-24" id="what-we-do">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-5">
            What We Do
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-display font-extrabold text-[#111827]
                text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-4">
                Full-Service Roofing<br />for Springfield Homes &amp; Businesses
              </h2>
              <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
                PrimeShield handles every aspect of residential and commercial roofing — from a single
                repair call to a full replacement. Every service is backed by a 10-year workmanship warranty.
              </p>
            </div>
            <Link to="/services"
              className="flex items-center gap-2 bg-white border border-[#E5E7EB]
                hover:border-[#1A3C6E]/40 hover:shadow-[0_8px_24px_rgba(26,60,110,0.12)]
                text-[#111827] font-semibold text-[0.85rem] px-5 py-3 rounded-xl
                transition-all duration-200 shrink-0 w-fit">
              See All Services
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service: s }) {
  const featured = s.featured;

  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl border
        transition-all duration-300
        ${featured
          ? "bg-[#1A3C6E] border-[#1A3C6E] shadow-[0_12px_40px_rgba(26,60,110,0.25)] hover:shadow-[0_20px_50px_rgba(26,60,110,0.35)] md:row-span-1"
          : "bg-white border-[#E5E7EB] hover:border-[#1A3C6E]/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
        }`}
    >
      {/* Badge */}
      {s.badge && (
        <span
          className={`absolute top-6 right-6 text-[0.62rem] font-semibold tracking-wide uppercase
            px-2.5 py-1 rounded-full
            ${featured
              ? "bg-[#F97316] text-white"
              : "bg-[#1A3C6E]/8 text-[#1A3C6E]"
            }`}
        >
          {s.badge}
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
          transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3
          ${featured
            ? "bg-[#F97316]/20 border border-[#F97316]/30 text-[#F97316]"
            : "bg-[#1A3C6E]/8 border border-[#1A3C6E]/12 text-[#1A3C6E]"
          }`}
      >
        {s.icon}
      </div>

      {/* Content */}
      <h3 className={`font-display font-bold text-[1.2rem] mb-2.5
        ${featured ? "text-white" : "text-[#111827]"}`}>
        {s.title}
      </h3>
      <p className={`text-[0.88rem] leading-relaxed mb-5
        ${featured ? "text-white/70" : "text-[#6B7280]"}`}>
        {s.desc}
      </p>

      {/* Benefits */}
      <ul className="flex flex-col gap-2 mb-7">
        {s.benefits.map((b) => (
          <li key={b} className="flex items-center gap-2.5">
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0
                ${featured ? "bg-[#F97316] text-white" : "bg-[#1A3C6E]/10 text-[#1A3C6E]"}`}
            >
              <Check size={11} strokeWidth={3} />
            </span>
            <span className={`text-[0.82rem] ${featured ? "text-white/80" : "text-[#374151]"}`}>
              {b}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        to="/services"
        className={`group/cta mt-auto flex items-center gap-1.5 font-semibold text-[0.85rem]
          ${featured ? "text-[#F97316]" : "text-[#1A3C6E]"}`}
      >
        {s.cta}
        <ArrowRight size={15} className="transition-transform duration-200 group-hover/cta:translate-x-1.5" />
      </Link>
    </div>
  );
}
