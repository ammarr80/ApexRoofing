import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200
        ${open ? "border-[#1A3C6E]/40 bg-[#EBF0FA]" : "border-[#E5E7EB] bg-white hover:border-[#1A3C6E]/25"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-display font-bold text-[0.95rem] leading-snug transition-colors
          ${open ? "text-[#1A3C6E]" : "text-[#111827]"}`}>
          {q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors
          ${open ? "bg-[#1A3C6E] text-white" : "bg-[#F9FAFB] border border-[#E5E7EB] text-[#6B7280]"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div className={`transition-all duration-300 ${open ? "max-h-96" : "max-h-0"} overflow-hidden`}>
        <p className="px-6 pb-6 text-[#6B7280] text-[0.88rem] leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ({ data, area }) {
  return (
    <section className="bg-[#F9FAFB] py-24" id="faq">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-3">
            {area.city} Roofing Questions
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg">
            Common questions from homeowners in {area.city}, {area.state}. If yours isn't here, just give us a call.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

      </div>
    </section>
  );
}