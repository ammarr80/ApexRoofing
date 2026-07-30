import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Pricing({ data }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-[#1A3C6E] rounded-3xl px-8 py-12 sm:px-14 sm:py-14
          flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Pricing
            </div>
            <p className="font-display font-black text-[#F97316] text-[clamp(2.2rem,4vw,3rem)] leading-none mb-3">
              {data.starting}
            </p>
            <p className="text-white/60 text-[0.95rem] leading-relaxed">
              {data.text}
            </p>
            <div className="flex items-center gap-2 mt-5 text-white/45 text-[0.8rem] font-medium">
              <CheckCircle2 size={14} className="text-[#F97316]" />
              Written, itemized estimate before any work begins
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
            <a href="tel:+15550183921"
              className="flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.9rem] px-7 py-3.5 rounded-xl
                shadow-[0_4px_18px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5">
              <Phone size={15} strokeWidth={2.5} />
              Call (555) 018-3921
            </a>
            <Link to="/quote"
              className="flex items-center justify-center gap-1.5
                border border-white/15 hover:border-white/30
                text-white/55 hover:text-white/80 font-semibold text-[0.88rem]
                px-7 py-3 rounded-xl transition-all">
              Request Free Estimate <ArrowRight size={13} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}