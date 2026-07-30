import { ArrowRight } from "lucide-react";

export default function Process({ data }) {
  return (
    <section className="bg-[#F9FAFB] py-24" id="process">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-3">
            From First Call to Final Sign-Off
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg">
            Four straightforward steps — you'll know what's happening and what to expect at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((s, i) => (
            <div key={s.step}
              className="relative bg-white border border-[#E5E7EB] rounded-2xl p-6
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:border-[#1A3C6E]/20
                transition-all duration-200">

              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-[#1A3C6E] rounded-xl
                  flex items-center justify-center font-display font-black text-white text-[0.9rem]">
                  {s.step}
                </div>
                <span className="font-display font-black text-[#E5E7EB] text-[2.2rem] leading-none">
                  {s.step}
                </span>
              </div>

              <h3 className="font-display font-bold text-[#111827] text-[1.02rem] mb-2">
                {s.title}
              </h3>
              <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">
                {s.text}
              </p>

              {i < data.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10
                  w-6 h-6 bg-white border border-[#E5E7EB] rounded-full
                  items-center justify-center text-[#9CA3AF]">
                  <ArrowRight size={12} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}