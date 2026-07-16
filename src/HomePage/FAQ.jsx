import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How do I know if my roof needs a repair or a full replacement?",
    a: "If your roof is under 15 years old and the damage is isolated — a few missing shingles, a small leak, cracked flashing — a repair is usually the right call. If it's over 20 years old, has widespread damage, or you're noticing sagging or daylight through the decking, replacement is almost always more cost-effective in the long run. We'll give you a straight, honest assessment when we come out to inspect your roof.",
  },
  {
    q: "Do you work with homeowner insurance for storm damage?",
    a: "Yes. We document all storm and hail damage thoroughly and can communicate directly with your insurance adjuster if needed. We'll make sure nothing gets missed in your claim and walk you through each step of the process.",
  },
  {
    q: "How long does a full roof replacement take?",
    a: "Most standard homes in the Springfield area are done in a single day. Larger properties or complex roof lines may take two days. We show up when we say we will and don't leave a job unfinished.",
  },
  {
    q: "What roofing materials do you use?",
    a: "We install architectural shingles, metal roofing, flat TPO membranes, and more. For most Illinois homes, we recommend GAF or Owens Corning architectural shingles — they hold up well through Midwest winters and come with strong manufacturer warranties. We'll recommend the right material based on your home, budget, and long-term goals.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing options for qualified homeowners. Ask us about it when you call for your free estimate.",
  },
  {
    q: "Is PrimeShield Roofing licensed and insured in Illinois?",
    a: "Yes. We're fully licensed in Illinois, carry general liability insurance, and all of our crews are covered under workers' compensation. Always verify this before hiring any roofing contractor — it protects you as the homeowner.",
  },
  {
    q: "What areas around Springfield do you serve?",
    a: "We serve Springfield and the surrounding Central Illinois area, including Lincoln, Decatur, Champaign, and Bloomington. Not sure if we cover your area? Give us a call.",
  },
];

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
        <span className={`font-display font-bold text-[0.98rem] leading-snug transition-colors
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

export default function FAQ() {
  return (
    <section className="bg-[#F9FAFB] py-24" id="faq">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="font-display font-extrabold text-[#111827] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
            Roof Repair & Replacement FAQs
          </h2>
          <p className="text-[#6B7280] mt-3 text-[0.95rem] leading-relaxed max-w-3xl">
            Answers to the questions we hear most from homeowners about roof repairs, replacements, inspections, and what to expect when you work with PrimeShield.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

      </div>
    </section>
  );
}