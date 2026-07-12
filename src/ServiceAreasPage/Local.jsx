import { Clock, Map, CalendarCheck, HardHat } from "lucide-react";

const REASONS = [
  {
    icon: <Clock size={22} />,
    title: "Fast Response Times",
    desc: "We're based in Springfield — not dispatched from out of state. When you call, a local crew is on the way.",
  },
  {
    icon: <Map size={22} />,
    title: "Local Roofing Knowledge",
    desc: "We know Central Illinois weather — the hail seasons, the winters, the storm patterns. That experience shows in how we work.",
  },
  {
    icon: <CalendarCheck size={22} />,
    title: "Reliable Scheduling",
    desc: "We offer same-day inspections and flexible scheduling across every area we serve.",
  },
  {
    icon: <HardHat size={22} />,
    title: "Quality Workmanship",
    desc: "Every job is backed by our 10-year workmanship warranty. The same standard of work in every city, every time.",
  },
];

export default function WhyLocal() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Why Local Homeowners Choose Us
            </div>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-4">
              A Local Roofer Who<br />
              <span className="text-[#1A3C6E]">Actually Shows Up.</span>
            </h2>
            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-10">
              PrimeShield isn't a national chain routing calls through a call center. We're a Springfield-based crew that knows these neighborhoods and what Illinois roofs deal with every year.
            </p>

            <div className="flex flex-col gap-6">
              {REASONS.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#F97316]/10 border border-[#F97316]/20
                    rounded-xl flex items-center justify-center text-[#F97316] shrink-0">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#111827] text-[1rem] mb-1">
                      {r.title}
                    </h3>
                    <p className="text-[#6B7280] text-[0.85rem] leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&auto=format&fit=crop&q=80"
              alt="PrimeShield Roofing crew serving Springfield area homeowners"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}