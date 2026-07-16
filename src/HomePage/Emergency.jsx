import { Phone, Zap, Clock } from "lucide-react";

export default function Emergency() {
  return (
    <section className="relative bg-[#F97316] overflow-hidden py-16">

      {/* Background stripes */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 30px, rgba(255,255,255,0.4) 30px, rgba(255,255,255,0.4) 32px)"
        }}
      />
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/10" />
      <div className="absolute -right-10 -bottom-24 w-80 h-80 rounded-full bg-white/8" />

      <div className="relative z-10 max-w-6xl mx-auto px-6
        flex flex-col md:flex-row md:items-center gap-10">

        {/* Left */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="shrink-0 w-16 h-16 bg-white/20 border border-white/30
            rounded-2xl flex items-center justify-center">
            <Zap size={30} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={13} color="white" className="opacity-75" />
              <p className="text-white/75 text-[0.68rem] font-semibold tracking-widest uppercase">
                Always On Call
              </p>
            </div>
            <h2 className="font-display font-extrabold text-white leading-tight
              text-[clamp(1.6rem,3.5vw,2.3rem)] mb-2">
              24/7 Emergency Roof Repair in Springfield, IL
            </h2>
            <p className="text-white/75 text-[0.92rem] leading-relaxed max-w-lg">
              Water coming through the ceiling at 2am? Hail just tore through your neighborhood?
              We dispatch a crew fast — day or night, with no extra charge for after-hours calls.
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="shrink-0 flex flex-col items-start md:items-center gap-3">
          <a
            href="tel:+15559991044"
            className="flex items-center gap-3 bg-white hover:bg-white/90
              text-[#F97316] font-bold text-[1rem] px-8 py-4 rounded-xl
              shadow-[0_8px_28px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call (555) 999-1044
          </a>
          <p className="text-white/60 text-[0.72rem] font-medium tracking-wide">
            Average response time in Springfield: under 60 minutes
          </p>
        </div>

      </div>
    </section>
  );
}