import { ShieldCheck, Users, Award, ThumbsUp } from "lucide-react";

const VALUES = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Quality First",
    desc: "Every job — repair or replacement — is completed to code using professional-grade materials. No shortcuts, no exceptions.",
  },
  {
    icon: <Users size={20} />,
    title: "Local & Accountable",
    desc: "We're based in Austin and focused on Austin. When you call, you reach the people doing the actual work — not a national call center.",
  },
  {
    icon: <Award size={20} />,
    title: "Certified Crews",
    desc: "Our installers are trained and certified. Every project is supervised by an experienced crew lead who takes responsibility for the outcome.",
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "No Pressure Sales",
    desc: "We assess your roof honestly and tell you what it actually needs. If a repair will solve the problem, we won't push you toward a full replacement.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24" id="who-we-are">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="relative pt-6 pb-8 px-4">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Apex Roofing crew on a residential Austin roof"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating card */}
            <div className="absolute bottom-0 right-0 bg-[#1A3C6E] text-white
              rounded-2xl px-6 py-5 shadow-2xl">
              <p className="font-display font-black text-[2rem] leading-none text-[#F97316]">
                Austin's Own
              </p>
              <p className="text-white/70 text-[0.75rem] font-semibold uppercase tracking-widest mt-1">
                Local Roofing Contractor
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-0 left-0 bg-[#F97316] text-white
              rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-display font-bold text-[0.85rem]">Residential & Commercial</p>
              <p className="text-white/75 text-[0.68rem]">Full-Service Roofing</p>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col">

            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5 w-fit">
              Who We Are
            </div>

            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-5">
              A Roofing Company<br />
              <span className="text-[#1A3C6E]">Austin Homeowners Trust.</span>
            </h2>

            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-4">
              Apex Roofing is a locally operated roofing contractor serving residential and
              commercial clients throughout Austin and the greater metro area. We specialize
              in roof repair, roof replacement, inspections, and emergency roofing services —
              handling every job with the same level of professionalism regardless of size.
            </p>

            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-10">
              Our team is made up of experienced, certified roofing professionals who take
              their craft seriously. We work cleanly, communicate clearly, and stand behind
              everything we install. That's not a tagline — it's how we've built our reputation
              in this city, one roof at a time.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#F97316]/10 border border-[#F97316]/20
                    rounded-lg flex items-center justify-center text-[#F97316] shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-[#111827] text-[0.95rem] mb-0.5">
                      {v.title}
                    </p>
                    <p className="text-[#6B7280] text-[0.8rem] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}