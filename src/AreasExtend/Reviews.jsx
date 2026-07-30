import { Star, Quote } from "lucide-react";

export default function Reviews({ data, area }) {
  return (
    <section className="bg-white py-24" id="reviews">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Reviews
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-2">
            What {area.city} Homeowners Say
          </h2>
          <p className="text-[#6B7280] text-[0.95rem]">
            Real reviews from homeowners we've worked with in {area.city}, {area.state}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((r) => (
            <div key={r.name}
              className="flex flex-col gap-4 p-6 border border-[#E5E7EB] rounded-2xl
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#1A3C6E]/15
                transition-all duration-200">

              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#F97316" color="#F97316" />
                  ))}
                </div>
                <Quote size={16} className="text-[#F97316]/40 shrink-0" />
              </div>

              <p className="text-[#374151] text-[0.85rem] leading-relaxed flex-1">
                "{r.text}"
              </p>

              <div className="pt-3 border-t border-[#F3F4F6]">
                <p className="font-display font-bold text-[#111827] text-[0.9rem]">{r.name}</p>
                <p className="text-[#9CA3AF] text-[0.72rem] font-medium">{r.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}