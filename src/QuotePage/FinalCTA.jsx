import { Phone } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="bg-white border-t border-[#E5E7EB] py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex items-start gap-4">
          <div className="w-px self-stretch bg-[#F97316] shrink-0 mt-1" />
          <div>
            <p className="text-[#9CA3AF] text-[0.68rem] font-semibold uppercase tracking-widest mb-1.5">
              Prefer to Talk?
            </p>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.2rem,2.5vw,1.6rem)] leading-tight mb-1.5">
              We're One Call Away.
            </h2>
            <p className="text-[#6B7280] text-[0.85rem]">
              Call us and we'll get back to you quickly — same-day inspections available in most cases.
            </p>
          </div>
        </div>

        <a
          href="tel:+15550183921"
          className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
            text-white font-bold text-[0.88rem] px-6 py-3 rounded-xl shrink-0
            shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-all hover:-translate-y-0.5"
        >
          <Phone size={14} strokeWidth={2.5} />
          Call (555) 018-3921
        </a>

      </div>
    </section>
  );
}