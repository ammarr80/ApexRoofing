import {Link} from "react-router-dom"
import { MapPin, ArrowRight } from "lucide-react";

const AREAS = [
  { name: "Houston",       tag: "Main Office",    primary: true,  desc: "Our home base. Full roofing services across all Houston zip codes." },
  { name: "Round Rock",   tag: "Full Coverage",  primary: false, desc: "Residential and commercial roofing with same-day availability." },
  { name: "Cedar Park",   tag: "Full Coverage",  primary: false, desc: "Repairs, replacements, and inspections for Cedar Park homeowners." },
  { name: "Pflugerville", tag: "Full Coverage",  primary: false, desc: "Fast response roofing services for the Pflugerville area." },
  { name: "Buda",         tag: "Full Coverage",  primary: false, desc: "Full roofing coverage including emergency storm damage repair." },
  { name: "Kyle",         tag: "Full Coverage",  primary: false, desc: "Roof repair and replacement for Kyle and surrounding areas." },
  { name: "Georgetown",   tag: "Full Coverage",  primary: false, desc: "Serving Georgetown homeowners with quality roofing workmanship." },
  { name: "Leander",      tag: "Emergency Only", primary: false, desc: "Emergency roofing dispatch available. Call for full service availability." },
  { name: "Manor",        tag: "Emergency Only", primary: false, desc: "Emergency roofing dispatch available. Call for full service availability." },
];

const TAG_COLOR = {
  "Main Office":    "bg-[#F97316]/15 border-[#F97316]/25 text-[#F97316]",
  "Full Coverage":  "bg-[#1A3C6E]/8 border-[#1A3C6E]/15 text-[#1A3C6E]",
  "Emergency Only": "bg-[#E5E7EB] border-[#E5E7EB] text-[#6B7280]",
};

export default function AreasGrid() {
  return (
    <section className="bg-white py-24" id="areas">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Coverage Map
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            Cities & Communities We Cover
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Apex Roofing serves Houston and the greater metro area. Every area below
            receives the same quality of work and response time — no second-class service.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.entries(TAG_COLOR).map(([label, cls]) => (
            <span key={label}
              className={`inline-flex items-center border text-[0.7rem] font-semibold
                uppercase tracking-wider px-3 py-1 rounded-full ${cls}`}>
              {label}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AREAS.map((a) => (
            <div key={a.name}
              className={`group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-200
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)]
                ${a.primary
                  ? "bg-[#EBF0FA] border-[#1A3C6E]/20 hover:border-[#1A3C6E]/35"
                  : "bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#1A3C6E]/20"
                }`}>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <MapPin size={16}
                    className={a.primary ? "text-[#F97316]" : "text-[#9CA3AF]"}
                    strokeWidth={2} />
                  <h3 className="font-display font-bold text-[#111827] text-[1.05rem]">
                    {a.name}
                  </h3>
                </div>
                <span className={`inline-flex items-center border text-[0.62rem] font-semibold
                  uppercase tracking-wider px-2.5 py-0.5 rounded-full ${TAG_COLOR[a.tag]}`}>
                  {a.tag}
                </span>
              </div>

              <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">
                {a.desc}
              </p>

              <Link
  to="/services#services-grid"
  className="flex items-center gap-1.5 text-[#1A3C6E] text-[0.8rem] font-semibold
    group-hover:gap-2.5 transition-all"
>
  View Services <ArrowRight size={13} />
</Link>
            </div>
          ))}
        </div>

        <p className="text-[#9CA3AF] text-[0.8rem] mt-6">
          Don't see your area? Call us — we cover up to 40 miles from downtown Houston.
        </p>

      </div>
    </section>
  );
}