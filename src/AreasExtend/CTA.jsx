import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA({ data, area }) {
  return (
    <section className="bg-[#1A3C6E] py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

          <div className="max-w-xl">
            <p className="text-white/40 text-[0.7rem] font-semibold uppercase tracking-widest mb-2">
              {area.city}, {area.state} {area.zip}
            </p>
            <h2 className="font-display font-extrabold text-white
              text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight mb-4">
              {data.headline}
            </h2>
            <p className="text-white/50 text-[0.92rem] leading-relaxed">
              {data.text}
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0 lg:min-w-[240px]">
            <a
              href="tel:+15550183921"
              className="flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
                shadow-[0_4px_18px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={15} strokeWidth={2.5} />
              Call (555) 018-3921
            </a>
            <Link
              to="/quote"
              className="flex items-center justify-center gap-1.5
                border border-white/15 hover:border-white/30
                text-white/55 hover:text-white/80 font-semibold text-[0.88rem]
                px-7 py-3 rounded-xl transition-all"
            >
              {data.button} <ArrowRight size={13} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}