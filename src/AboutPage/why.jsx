import { 
  Clock, DollarSign, ShieldCheck, BadgeCheck,
  FileText, Wrench, ThumbsUp, Headphones
} from "lucide-react";

const REASONS = [
  {
    icon: <Clock size={20} />,
    title: "Fast Response Times",
    desc: "Same-day service in most Austin zip codes. Emergency calls dispatched within the hour.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Honest, Upfront Pricing",
    desc: "Written quotes before work starts. No mid-job surprises, no upsells you didn't ask for.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "10-Year Workmanship Warranty",
    desc: "Every job is backed by our warranty. If our work fails, we come back and fix it — no questions.",
  },
  {
    icon: <BadgeCheck size={20} />,
    title: "GAF Certified Installation",
    desc: "Manufacturer-certified crews mean better installs and stronger material warranties for you.",
  },
  {
    icon: <FileText size={20} />,
    title: "Insurance Claim Support",
    desc: "We handle storm damage documentation and work directly with your adjuster to get your claim covered.",
  },
  {
    icon: <Wrench size={20} />,
    title: "Premium Materials Only",
    desc: "We stock GAF, Owens Corning, and Firestone products — materials built to handle Texas conditions.",
  },
  {
    icon: <ThumbsUp size={20} />,
    title: "Clean Job Sites",
    desc: "Full cleanup before we leave. No nails in the driveway, no debris in your yard — guaranteed.",
  },
  {
    icon: <Headphones size={20} />,
    title: "Direct Communication",
    desc: "Talk to the same person from first call to final walkthrough. No handoffs, no confusion.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111827] py-24" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
            text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Why Apex
          </div>
          <h2 className="font-display font-extrabold text-white
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            Why Austin Homeowners<br />Choose Apex Roofing
          </h2>
          <p className="text-white/50 text-[0.95rem] leading-relaxed max-w-xl">
            There's no shortage of roofing companies in Austin. Here's what makes the difference
            when you hire Apex — and why most of our new customers come from referrals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REASONS.map((r) => (
            <div key={r.title}
              className="group flex flex-col gap-4 p-6
                bg-white/4 border border-white/8 rounded-2xl
                hover:bg-white/8 hover:border-white/15
                transition-all duration-200">
              <div className="w-10 h-10 bg-[#F97316]/15 border border-[#F97316]/25
                rounded-xl flex items-center justify-center text-[#F97316]
                group-hover:bg-[#F97316]/25 transition-colors">
                {r.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-[0.98rem] mb-1.5">
                  {r.title}
                </h3>
                <p className="text-white/50 text-[0.82rem] leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}