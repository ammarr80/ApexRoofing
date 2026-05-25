import { Phone, Zap, Clock } from "lucide-react";

export default function ContactEmergency() {
  return (
    <section className="relative bg-[#F97316] overflow-hidden py-14">

      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 30px, rgba(255,255,255,0.4) 30px, rgba(255,255,255,0.4) 32px)"
        }}
      />
      <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -right-10 -bottom-20 w-72 h-72 rounded-full bg-white/8" />

      <div className="relative z-10 max-w-6xl mx-auto px-6
        flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex items-start gap-6">
          <div className="shrink-0 w-16 h-16 bg-white/20 border border-white/30
            rounded-2xl flex items-center justify-center">
            <Zap size={30} color="white" strokeWidth={2.5} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={13} color="white" className="opacity-75" />
              <p className="text-white/75 text-[0.68rem] font-semibold tracking-widest uppercase">
                Always Available
              </p>
            </div>
            <h2 className="font-display font-extrabold text-white leading-tight
              text-[clamp(1.5rem,3vw,2.1rem)] mb-2">
              Need Emergency Roof Repair?
            </h2>
            <p className="text-white/75 text-[0.92rem] leading-relaxed max-w-lg">
              Active leak, storm damage, or a sudden collapse risk — Apex dispatches
              a crew fast. Day or night, no extra charge for emergency calls.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex flex-col items-center gap-3">
          <a
            href="tel:+15120000000"
            className="flex items-center gap-3 bg-white hover:bg-white/90
              text-[#F97316] font-bold text-[1rem] px-8 py-4 rounded-xl
              shadow-[0_8px_28px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call (512) 000-0000
          </a>
          <p className="text-white/60 text-[0.72rem] font-medium tracking-wide">
            Average Austin response: under 60 minutes
          </p>
        </div>

      </div>
    </section>
  );
}