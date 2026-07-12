import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Is the estimate really free?",
    a: "Yes, completely. We come out, inspect your roof, and hand you a written quote with zero charge and zero obligation. We don't ask for a credit card or any payment information to schedule.",
  },
  {
    q: "How quickly can you come out?",
    a: "Most inspections are scheduled within 24 hours of your request. For emergencies — active leaks, storm damage, fallen trees — we dispatch within the hour during business hours and as fast as possible after hours.",
  },
  {
    q: "Do you help with insurance claims?",
    a: "Yes. We photograph and document all damage in a format your adjuster can use, communicate with your insurance company directly, and walk you through each step of the claims process.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most full replacements are completed in one to two days depending on roof size and complexity. We include a specific project timeline in your written estimate so you know what to expect before we start.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing options for qualifying customers. We also work with most major insurance carriers and can help you understand what your policy covers before any work begins.",
  },
  {
    q: "What areas do you serve?",
    a: "We cover Springfield and surrounding Central Illinois areas including Lincoln, Decatur, Champaign, and Bloomington. Not sure if we cover your area? Call us and we'll tell you straight.",
  },
  {
    q: "What warranty do you offer?",
    a: "Every job comes with a 10-year workmanship warranty backed by us directly. For full replacements using GAF materials, you also receive a manufacturer's warranty on the materials themselves — separate from our own guarantee.",
  },
  {
    q: "Will I be dealing with a salesperson or an actual roofer?",
    a: "An actual roofer. The person who inspects your roof is the same person who manages your job. One point of contact from first call to final walkthrough.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200
        ${isOpen
          ? "border-[#1A3C6E]/25 shadow-[0_4px_20px_rgba(26,60,110,0.08)]"
          : "border-[#E5E7EB] hover:border-[#1A3C6E]/18"
        }`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4
          px-6 py-5 text-left bg-white cursor-pointer">
        <span className={`font-semibold text-[0.92rem] leading-snug transition-colors
          ${isOpen ? "text-[#1A3C6E]" : "text-[#111827]"}`}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
          transition-all duration-200
          ${isOpen
            ? "bg-[#1A3C6E] text-white"
            : "bg-[#F3F4F6] text-[#6B7280]"
          }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-200
        ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <p className="px-6 pb-5 text-[#6B7280] text-[0.88rem] leading-relaxed border-t border-[#F3F4F6] pt-4">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function QuoteFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F9FAFB] py-24 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-bold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-4">
              FAQ
            </div>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.85rem,3vw,2.5rem)] leading-tight mb-4">
              Common<br />
              Questions.
            </h2>
            <p className="text-[#6B7280] text-[0.9rem] leading-relaxed mb-8">
              Still unsure? Call us — we're happy to answer anything before you commit to a single thing.
            </p>
            <a
              href="tel:+15550183921"
              className="inline-flex items-center gap-2 border border-[#E5E7EB]
                text-[#374151] font-semibold text-[0.85rem] px-5 py-2.5 rounded-xl
                hover:border-[#1A3C6E]/30 hover:text-[#1A3C6E] bg-white
                transition-all">
              Call (555) 018-3921
            </a>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}