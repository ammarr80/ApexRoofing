import { MapPin } from "lucide-react";

export default function Overview({ data, area }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src={data.image}
              alt={`PrimeShield Roofing serving ${area.city}, ${area.state}`}
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-[#1A3C6E]/90 backdrop-blur-sm
              text-white text-[0.75rem] font-semibold px-3.5 py-2 rounded-full">
              <MapPin size={13} className="text-[#F97316]" />
              {area.city}, {area.state} {area.zip}
            </div>
          </div>

          {/* Right: content */}
          <div>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-5">
              {data.title}
            </h2>
            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed">
              {data.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}