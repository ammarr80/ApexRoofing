import { Link } from "react-router-dom";
import {
  Wrench, Home, Droplets, CloudLightning, Pipette, Search, ArrowRight,
} from "lucide-react";

const ICONS = {
  "Roof Repair": <Wrench size={22} />,
  "Roof Replacement": <Home size={22} />,
  "Leak Detection": <Droplets size={22} />,
  "Storm Damage Repair": <CloudLightning size={22} />,
  "Gutter Installation": <Pipette size={22} />,
  "Roof Inspection": <Search size={22} />,
};

const SLUGS = {
  "Roof Repair": "roof-repair",
  "Roof Replacement": "roof-replacement",
  "Leak Detection": "leak-detection",
  "Storm Damage Repair": "storm-damage",
  "Gutter Installation": "gutters",
  "Roof Inspection": "inspection",
};

export default function Services({ area }) {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Services Available
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-3">
            Roofing Services in {area.city}, {area.state}
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Every service PrimeShield Roofing offers is fully available to homeowners throughout {area.city} — same crew, same standards, same warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {area.services.map((s) => (
            <Link
              key={s}
              to={`/services/${SLUGS[s] || ""}`}
              className="group flex items-center gap-4 p-6 bg-white border border-[#E5E7EB] rounded-2xl
                hover:border-[#1A3C6E]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                transition-all duration-200"
            >
              <div className="w-11 h-11 bg-[#F97316]/10 border border-[#F97316]/20
                group-hover:bg-[#F97316]/20 rounded-xl
                flex items-center justify-center text-[#F97316] shrink-0 transition-colors">
                {ICONS[s] || <Wrench size={22} />}
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-[#111827] text-[0.95rem]">
                  {s}
                </p>
              </div>
              <ArrowRight size={15} className="text-[#9CA3AF] group-hover:text-[#F97316] group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}