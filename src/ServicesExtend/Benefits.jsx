import { ShieldCheck } from "lucide-react";

export default function Benefits({ data }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Why PrimeShield
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-3">
            What You Get With Every Job
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Clear pricing, certified materials, and a crew that stands behind its work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((b) => (
            <div key={b.title}
              className="group flex flex-col gap-4 p-6
                border border-[#E5E7EB] rounded-2xl
                hover:border-[#1A3C6E]/25 hover:shadow-[0_8px_30px_rgba(26,60,110,0.08)]
                transition-all duration-200">
              <div className="w-11 h-11 bg-[#1A3C6E]/6 border border-[#1A3C6E]/12
                group-hover:bg-[#1A3C6E]/10 rounded-xl
                flex items-center justify-center text-[#1A3C6E] transition-colors">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#111827] text-[1rem] mb-1.5">
                  {b.title}
                </h3>
                <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}