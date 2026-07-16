import { Link } from "react-router-dom";
import { ClipboardList, Calculator, HardHat, BadgeCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: <ClipboardList size={24} />,
    title: "Free Roof Inspection",
    desc: "We come out to your home — often same-day. A full roof assessment with no pressure and no obligation.",
  },
  {
    num: "02",
    icon: <Calculator size={24} />,
    title: "Written Estimate",
    desc: "A clear, itemized quote, delivered fast. You'll know exactly what the job costs before we start any work.",
  },
  {
    num: "03",
    icon: <HardHat size={24} />,
    title: "Repair or Installation",
    desc: "Our certified crew gets to work — efficient, clean, and respectful of your home and your schedule.",
  },
  {
    num: "04",
    icon: <BadgeCheck size={24} />,
    title: "Final Walkthrough",
    desc: "We review the completed work with you before we leave, backed by our 10-year workmanship warranty.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#1A3C6E] py-24" id="process">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-4">
              Our Process
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
              From First Call to<br />Finished Roof
            </h2>
            <p className="text-white/55 mt-3 max-w-3xl text-[0.95rem] leading-relaxed">
              No surprises, no runaround. We keep you informed at every step — from your first call to the final walkthrough.
            </p>
          </div>
          <Link to="/quote"
            className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
              text-white font-bold text-[0.88rem] px-7 py-3.5 rounded-xl
              shadow-[0_4px_18px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 shrink-0 w-fit">
            Get Your Free Estimate <ArrowRight size={15} />
          </Link>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative">

              {/* Connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-9 left-[calc(100%_-_10px)] w-full h-px
                  border-t-2 border-dashed border-white/15 z-0" />
              )}

              <div className="relative z-10 bg-white/6 hover:bg-white/10 border border-white/10
                hover:border-white/20 rounded-2xl p-6 transition-all duration-200">

                {/* Step number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 bg-[#F97316]/15 border border-[#F97316]/25
                    rounded-xl flex items-center justify-center text-[#F97316]">
                    {s.icon}
                  </div>
                  <span className="font-display font-black text-white/15 text-[2rem] leading-none">
                    {s.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-[1.05rem] mb-2">
                  {s.title}
                </h3>
                <p className="text-white/50 text-[0.82rem] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}