import { ArrowRight, Phone } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Submit Your Request",
    desc: "Fill out the form above or give us a call. Takes less than 90 seconds. Tell us what's going on and we'll take it from there.",
    detail: "No account needed. No paperwork upfront.",
  },
  {
    num: "02",
    title: "We Schedule Your Inspection",
    desc: "One of our team members calls you back within 24 hours to book a free on-site visit at a time that works for you.",
    detail: "Same-day appointments available in most Austin zip codes.",
  },
  {
    num: "03",
    title: "You Get a Written Estimate",
    desc: "Our inspector walks your roof, documents everything with photos, and hands you a detailed written quote before leaving your property.",
    detail: "No vague ballparks. Line-item pricing you can actually compare.",
  },
  {
    num: "04",
    title: "We Get to Work",
    desc: "You approve the estimate, we pull permits if needed and schedule your crew. Most jobs start within a week of approval.",
    detail: "You're kept updated from start to final walkthrough.",
  },
];

export default function QuoteProcess() {
  return (
    <section className="bg-[#F9FAFB] py-24 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header — left aligned */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-bold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            How It Works
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,3.5vw,2.7rem)] leading-tight mb-3">
            From Request to Finished Roof —<br />
            <em className="not-italic text-[#F97316]">Here's Exactly What Happens.</em>
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg">
            No mystery. No vague timelines. Every Apex job follows the same clear four-step
            process so you always know what's coming next.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {STEPS.map((s, i) => (
            <div key={s.num}
              className="group relative flex gap-6 p-7
                border border-[#E5E7EB] rounded-2xl bg-white
                hover:border-[#1A3C6E]/20 hover:shadow-[0_8px_32px_rgba(26,60,110,0.07)]
                transition-all duration-200 overflow-hidden">

              {/* Step number watermark */}
              <div className="absolute top-4 right-5 font-display font-black text-[3.5rem]
                text-[#1A3C6E]/[0.04] leading-none select-none pointer-events-none">
                {s.num}
              </div>

              {/* Number badge */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1A3C6E] flex items-center
                justify-center font-display font-black text-white text-[0.95rem] self-start">
                {s.num}
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="font-display font-bold text-[#111827] text-[1.08rem]">
                  {s.title}
                </h3>
                <p className="text-[#6B7280] text-[0.85rem] leading-relaxed">
                  {s.desc}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
                  <span className="text-[0.78rem] text-[#F97316] font-semibold">{s.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4
          bg-white border border-[#E5E7EB] rounded-2xl px-7 py-5">
          <div className="flex-1">
            <p className="font-semibold text-[#111827] text-[0.95rem] mb-0.5">
              Ready to start step one?
            </p>
            <p className="text-[#6B7280] text-[0.82rem]">
              The form takes 90 seconds. We'll handle everything after that.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+15120000000"
              className="flex items-center gap-2 border border-[#E5E7EB] text-[#374151]
                font-semibold text-[0.85rem] px-5 py-2.5 rounded-xl
                hover:border-[#1A3C6E]/30 hover:text-[#1A3C6E] transition-all">
              <Phone size={14} />
              (512) 000-0000
            </a>
            <a href="#quote-form"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.85rem] px-5 py-2.5 rounded-xl
                shadow-[0_4px_14px_rgba(249,115,22,0.38)]
                hover:shadow-[0_6px_18px_rgba(249,115,22,0.46)]
                transition-all hover:-translate-y-0.5">
              Request Free Estimate
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}