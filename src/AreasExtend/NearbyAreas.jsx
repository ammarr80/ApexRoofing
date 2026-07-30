import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function NearbyAreas({ data, area }) {
  return (
    <section className="bg-[#F9FAFB] py-20 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Nearby Areas
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.6rem,3vw,2.2rem)] leading-tight mb-3">
            Also Serving Communities Near {area.city}
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            In addition to {area.city}, {area.state}, PrimeShield Roofing provides roof repair, replacement, and inspection services to these nearby communities.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {data.map((a) => (
            <Link
              key={a}
              to={`/service-areas/${toSlug(a)}`}
              className="flex items-center gap-1.5 bg-white border border-[#E5E7EB]
                hover:border-[#1A3C6E]/25 hover:bg-[#EBF0FA]
                rounded-full px-4 py-2 transition-all duration-200"
            >
              <MapPin size={12} className="text-[#F97316]" />
              <span className="text-[#111827] text-[0.82rem] font-semibold">{a}</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}