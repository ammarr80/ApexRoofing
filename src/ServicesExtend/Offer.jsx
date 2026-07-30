import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Offer({ data }) {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            What's Included
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.items.map((item) => (
            <div key={item.title}
              className="flex flex-col gap-4 p-6 bg-white border border-[#E5E7EB] rounded-2xl
                hover:border-[#1A3C6E]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                transition-all duration-200">
              <div className="w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/20
                rounded-xl flex items-center justify-center text-[#F97316] shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#111827] text-[0.98rem] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/quote"
            className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#142F58]
              text-white font-bold text-[0.88rem] px-7 py-3.5 rounded-xl
              transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(26,60,110,0.25)]">
            Get a Free Estimate <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}