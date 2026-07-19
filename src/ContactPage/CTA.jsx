import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-white border-t border-[#E5E7EB] py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex items-start gap-4">
          <div className="w-px self-stretch bg-[#F97316] shrink-0 mt-1" />
          <div>
            <p className="text-[#9CA3AF] text-[0.68rem] font-semibold uppercase tracking-widest mb-1.5">
              No Obligation
            </p>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.3rem,2.5vw,1.8rem)] leading-tight mb-1.5">
              Still Have Questions?
            </h2>
            <p className="text-[#6B7280] text-[0.88rem]">
              Call us directly or request a free estimate — we'll get back to you fast.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="tel:+15550183921"
            className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
              shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5"
          >
            <Phone size={14} strokeWidth={2.5} />
            Call (555) 018-3921
          </a>
          <Link
            to="/quote"
            className="flex items-center justify-center gap-1.5
              border border-[#E5E7EB] hover:border-[#1A3C6E]/25
              text-[#374151] hover:text-[#1A3C6E] font-semibold text-[0.85rem]
              px-6 py-3 rounded-xl transition-all"
          >
            Get a Free Estimate <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </section>
  );
}