import { HardHat, ClipboardCheck, MessageSquare, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: <HardHat size={24} />,
    title: "Safety on Every Job",
    desc: "Every Apex crew follows strict on-site safety protocols. We protect our workers, your property, and your family — no exceptions, no shortcuts under pressure.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Quality Workmanship",
    desc: "We don't consider a job done until it's done right. Every install is inspected by a crew lead before we pack up. If something isn't right, we fix it before we leave.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Clear Communication",
    desc: "You know what we're doing, why we're doing it, and what it costs — before we start. No surprises mid-job, no vague explanations, no runaround.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Reliability You Can Count On",
    desc: "We show up when we say we will. We finish when we say we will. In an industry full of no-shows and delays, we've built our reputation on just being dependable.",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-white py-24" id="our-approach">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Our Approach
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            How We Work on Every Job
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-xl">
            Our approach is straightforward — do the job right, treat people with respect, and
            back everything we install. These aren't marketing words. They're the standard we
            hold every crew member to on every job site.
          </p>
        </div>

        {/* Two column layout — image left, pillars right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
              alt="Apex Roofing crew performing a professional roof installation in Houston"
              className="w-full h-[480px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-6">
            {PILLARS.map((p, i) => (
              <div key={p.title}
                className="flex items-start gap-5 pb-6 border-b border-[#F3F4F6] last:border-0 last:pb-0">
                <div className="w-12 h-12 bg-[#1A3C6E] rounded-xl
                  flex items-center justify-center text-white shrink-0">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#111827] text-[1.05rem] mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-[#6B7280] text-[0.88rem] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}