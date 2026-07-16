import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-white py-14" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-px self-stretch bg-[#F97316] shrink-0 mt-1" />
            <div>
              <p className="text-[#6B7280] text-[0.7rem] font-semibold uppercase tracking-widest mb-1.5">
                Free Estimate · No Obligation
              </p>
              <h2 className="font-display font-extrabold text-[#111827] text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">
                Need a Roof Repair or Replacement?
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+15550183921"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.85rem] px-5 py-2.5 rounded-xl
                shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={14} strokeWidth={2.5} />
              Call (555) 018-3921
            </a>
            <Link
              to="/quote"
              className="flex items-center gap-1.5 text-[#1A3C6E]/70 hover:text-[#1A3C6E]
                font-semibold text-[0.85rem] px-2 py-2.5
                transition-colors"
            >
              Get Your Free Estimate <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}