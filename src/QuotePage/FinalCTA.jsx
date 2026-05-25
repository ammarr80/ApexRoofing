import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#F9FAFB] border-t border-[#E5E7EB] py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        <div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.5rem,3vw,2rem)] leading-tight mb-2">
            Still Have Questions?
          </h2>
          <p className="text-[#6B7280] text-[0.92rem]">
            Call us directly or request a free estimate — no obligation.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href="tel:+15120000000"
            className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.88rem] px-6 py-3 rounded-xl
              shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5"
          >
            <Phone size={15} strokeWidth={2.5} />
            Call (512) 000-0000
          </a>
          <Link
            to="/quote"
            className="flex items-center gap-2 border border-[#E5E7EB] hover:border-[#1A3C6E]/30
              text-[#111827] font-semibold text-[0.88rem] px-6 py-3 rounded-xl
              transition-all hover:bg-white"
          >
            Free Estimate <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}