import { Phone, Zap, ArrowRight } from "lucide-react";

const SIGNALS = [
  "Active roof leak",
  "Storm or hail damage",
  "Tree fell on roof",
  "Collapsed section",
  "Water inside the home",
];

export default function QuoteEmergency() {
  return (
    <section className="bg-[#F9FAFB] py-16 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#112951]">

          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-52deg, transparent, transparent 38px, rgba(255,255,255,1) 38px, rgba(255,255,255,1) 40px)",
            }}
          />

          {/* Orange glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 68%)",
            }}
          />

          <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">

              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30
                  text-red-400 text-[0.68rem] font-bold tracking-widest uppercase
                  px-3 py-1 rounded-full mb-5">
                  <Zap size={11} className="fill-red-400" />
                  Emergency Roofing Service
                </div>

                <h2 className="font-display font-extrabold text-white
                  text-[clamp(1.7rem,3vw,2.4rem)] leading-tight mb-3">
                  Storm Hit? Roof Leaking Right Now?<br />
                  <em className="not-italic text-[#F97316]">We Dispatch Within the Hour.</em>
                </h2>

                <p className="text-white/55 text-[0.92rem] leading-relaxed mb-6 max-w-lg">
                  Water damage compounds fast. Our emergency crew covers Springfield and the surrounding area 24/7, including weekends and holidays.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                  {SIGNALS.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-white/50 text-[0.8rem] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — call card */}
              <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-7
                flex flex-col items-start gap-5 min-w-[260px]">
                <div>
                  <p className="text-white/45 text-[0.72rem] font-semibold uppercase tracking-widest mb-1">
                    Emergency Hotline
                  </p>
                  <a
                    href="tel:+15559991044"
                    className="font-display font-black text-white text-[1.4rem] leading-none
                      hover:text-[#F97316] transition-colors">
                    (555) 999-1044
                  </a>
                  <p className="text-white/35 text-[0.75rem] mt-1.5">Available 24 hours, 7 days a week</p>
                </div>

                <a
                  href="tel:+15559991044"
                  className="flex items-center gap-2.5 w-full justify-center
                    bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.9rem]
                    px-6 py-3.5 rounded-xl transition-all
                    shadow-[0_6px_20px_rgba(249,115,22,0.4)]
                    hover:shadow-[0_8px_26px_rgba(249,115,22,0.5)]
                    hover:-translate-y-0.5">
                  <Phone size={15} strokeWidth={2.5} />
                  Call Now
                </a>

                <div className="flex items-center gap-2 text-white/30 text-[0.72rem]">
                  <ArrowRight size={11} />
                  Or <a href="#quote-form" className="underline underline-offset-2 hover:text-white/55 transition-colors">
                    submit the form above
                  </a> for non-emergencies
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}