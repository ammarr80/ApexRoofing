import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="bg-[#1A3C6E] py-14" id="contact">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-px self-stretch bg-[#F97316] shrink-0 mt-1" />
            <div>
              <p className="text-white/40 text-[0.7rem] font-semibold uppercase tracking-widest mb-1.5">
                Free Quote · No Obligation
              </p>
              <h2 className="font-display font-extrabold text-white text-[clamp(1.4rem,3vw,1.9rem)] leading-tight">
                Need Roofing Help Today?
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
              className="flex items-center gap-1.5 text-white/60 hover:text-white
                font-semibold text-[0.85rem] px-2 py-2.5
                transition-colors"
            >
              Get Estimate <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/8 flex flex-col sm:flex-row
          items-center justify-between gap-3 text-white/20 text-[0.72rem]">
          <p>© {new Date().getFullYear()} PrimeShield Roofing. All rights reserved.</p>
          <p>Springfield, IL</p>
        </div>

      </div>
    </section>
  );
}