import { Link } from "react-router-dom";
import { Wrench, Home, Zap, Search, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: <Wrench size={20} />,
    title: "Roof Repair",
    desc: "Fast, reliable repairs across every service area — shingles, flashing, leaks, and more.",
  },
  {
    icon: <Home size={20} />,
    title: "Roof Replacement",
    desc: "Full tear-off and replacement using GAF and Owens Corning materials, built to last.",
  },
  {
    icon: <Zap size={20} />,
    title: "Emergency Roofing",
    desc: "24/7 emergency dispatch across every listed area, with no after-hours surcharge.",
  },
  {
    icon: <Search size={20} />,
    title: "Roof Inspections",
    desc: "Detailed written inspection reports with photos, available across all of our service areas.",
  },
];

export default function AreaServices() {
  return (
    <section className="bg-[#111827] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-4">
              Services Available
            </div>
            <h2 className="font-display font-extrabold text-white
              text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
              Roofing Services in Every Area We Serve
            </h2>
            <p className="text-white/50 text-[0.95rem] leading-relaxed max-w-xl">
              Every service we offer is available across all of our listed areas — same crew, same standards, same warranty, no matter your zip code.
            </p>
          </div>
          <Link to="/services"
            className="flex items-center gap-2 border border-white/15 hover:border-white/35
              text-white/80 hover:text-white font-semibold text-[0.85rem]
              px-5 py-2.5 rounded-xl transition-all shrink-0 w-fit">
            See All Services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title}
              className="group flex flex-col gap-4 p-6
                bg-white/4 border border-white/8 rounded-2xl
                hover:bg-white/8 hover:border-white/15 transition-all duration-200">
              <div className="w-10 h-10 bg-[#F97316]/15 border border-[#F97316]/25
                rounded-xl flex items-center justify-center text-[#F97316]
                group-hover:bg-[#F97316]/25 transition-colors">
                {s.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-[0.98rem] mb-1.5">
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