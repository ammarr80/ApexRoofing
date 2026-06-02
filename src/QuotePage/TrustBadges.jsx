import { Link } from "react-router-dom";
import {
  ShieldCheck, BadgeCheck, Star, Clock, Zap, DollarSign, Phone, ArrowRight
} from "lucide-react";

const TRUST_BADGES = [
  { icon: <ShieldCheck size={20} />, label: "Licensed & Insured",  sub: "State of Texas" },
  { icon: <BadgeCheck  size={20} />, label: "GAF Certified",        sub: "Master Elite Contractor" },
  { icon: <Star        size={20} />, label: "4.9 / 5.0 Rating",     sub: "180+ Google Reviews" },
  { icon: <Clock       size={20} />, label: "Same-Day Response",    sub: "Mon–Sat 7am–7pm" },
  { icon: <Zap         size={20} />, label: "10-Year Warranty",     sub: "Workmanship guaranteed" },
  { icon: <DollarSign  size={20} />, label: "Financing Available",  sub: "0% for 12 months" },
];

const REVIEWS = [
  {
    name: "Marcus T.",
    location: "South Houston",
    rating: 5,
    text: "Apex came out within two hours of my call after the hail storm. Had everything documented for my insurance claim the same day. Roof was done in 48 hours. Unbelievable service.",
  },
  {
    name: "Jennifer K.",
    location: "Round Rock",
    rating: 5,
    text: "Three other roofers gave me vague quotes. Apex showed up, walked me through everything in plain English, and handed me a written estimate before they left. Exactly what I needed.",
  },
  {
    name: "David R.",
    location: "Cedar Park",
    rating: 5,
    text: "The crew was on time, professional, and cleaned up every nail in the driveway. My neighbor already used them after seeing how smooth the job went.",
  },
];

function GoogleWordmark() {
  return (
    <span className="font-bold text-[0.82rem] tracking-tight">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC04]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export default function TrustSection() {
  return (
    <section className="bg-white py-24" id="trust">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/8 border border-[#F97316]/18
            text-[#F97316] text-[0.7rem] font-bold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Why Houston Trusts Apex
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.85rem,3.5vw,2.6rem)] leading-tight mb-3">
            Every Promise. Every Job. Backed in Writing.
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Roofing is expensive and trust is hard to earn. Here's why over 1,200 Houston
            homeowners chose Apex — and why most refer us to their neighbors.
          </p>
        </div>

        {/* Trust badge grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-16">
          {TRUST_BADGES.map((b) => (
            <div key={b.label}
              className="group flex items-center gap-4 px-5 py-4
                border border-[#E5E7EB] rounded-2xl bg-[#F9FAFB]
                hover:border-[#1A3C6E]/20 hover:bg-white
                hover:shadow-[0_6px_20px_rgba(26,60,110,0.06)]
                transition-all duration-200">

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl
                bg-[#1A3C6E] flex items-center justify-center
                text-white flex-shrink-0">
                {b.icon}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="font-bold text-[#111827] text-[0.85rem] leading-snug truncate">
                  {b.label}
                </p>
                <p className="text-[#9CA3AF] text-[0.72rem] font-medium truncate">{b.sub}</p>
              </div>

            </div>
          ))}
        </div>

        <div className="border-t border-[#E5E7EB] mb-16" />

        {/* Reviews */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-7 flex-wrap gap-3">
            <h3 className="font-display font-bold text-[#111827] text-[1.3rem]">
              What Houston Homeowners Say
            </h3>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] font-semibold text-[#1A3C6E] hover:text-[#F97316]
                flex items-center gap-1.5 transition-colors">
              See all 180+ reviews →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name}
                className="flex flex-col gap-4 p-6 border border-[#E5E7EB] rounded-2xl bg-[#F9FAFB]
                  hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] hover:border-[#E5E7EB]/80
                  transition-all duration-200">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <p className="text-[#374151] text-[0.84rem] leading-relaxed flex-1">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#E5E7EB]">
                  <div className="w-8 h-8 rounded-full bg-[#1A3C6E]/10
                    flex items-center justify-center font-bold text-[#1A3C6E] text-[0.75rem]
                    flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#111827] text-[0.82rem]">{r.name}</p>
                    <p className="text-[#9CA3AF] text-[0.72rem]">{r.location}</p>
                  </div>
                  <GoogleWordmark />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="bg-[#1A3C6E] rounded-2xl px-8 py-7
          flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-display font-bold text-white text-[1.1rem] mb-1">
              Ready to get your free estimate?
            </p>
            <p className="text-white/50 text-[0.82rem]">
              No pressure. No obligation. Just honest pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+15120000000"
              className="flex items-center gap-2 border border-white/22 text-white
                font-semibold text-[0.85rem] px-5 py-2.5 rounded-xl
                hover:bg-white/8 hover:border-white/40 transition-all">
              <Phone size={14} />
              (512) 000-0000
            </a>
            <a
              href="#quote-form"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.85rem] px-5 py-2.5 rounded-xl
                shadow-[0_4px_14px_rgba(249,115,22,0.4)]
                hover:shadow-[0_6px_18px_rgba(249,115,22,0.48)]
                transition-all hover:-translate-y-0.5">
              Get Free Estimate
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}