import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const STATS = [
  { num: "5",    label: "Cities Covered" },
  { num: "24/7", label: "Emergency Response" },
  { num: "20+",  label: "Years in Business" },
  { num: "1,400+", label: "Roofs Completed" },
];

const AREAS = ["Springfield", "Lincoln", "Decatur", "Champaign", "Bloomington"];

export default function ServiceAreasHero() {
  return (
    <section className="relative bg-[#112951] pt-28 pb-24 overflow-hidden">

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-52deg, transparent, transparent 38px, rgba(255,255,255,1) 38px, rgba(255,255,255,1) 40px)",
        }}
      />

      <div
        className="absolute -top-40 -right-16 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 68%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-[0.75rem] font-medium mb-8">
          <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/70">Service Areas</span>
        </div>

        {/* Left text / right map */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-center mb-12">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
              px-3 py-1 rounded-full mb-5">
              <MapPin size={11} className="text-[#F97316]" /> Where We Work
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.1]
              text-[clamp(2.1rem,4.4vw,3.3rem)] mb-4">
              Roofing Contractor Serving Springfield &{" "}
              <span className="text-[#F97316]">Central Illinois.</span>
            </h1>

            <p className="text-white/55 text-[0.92rem] leading-relaxed mb-8 max-w-md">
              The same crew, the same standards, and the same 10-year workmanship warranty across Springfield and every surrounding community we serve.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="tel:+15550183921"
                className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                  text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
                  shadow-[0_6px_22px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5">
                <Phone size={14} strokeWidth={2.5} />
                Call (555) 018-3921
              </a>
              <Link to="/quote"
                className="flex items-center gap-2 border border-white/25 hover:border-white/50
                  text-white font-semibold text-[0.85rem] px-5 py-3 rounded-xl
                  transition-all hover:bg-white/8">
                Get a Free Estimate <ArrowRight size={13} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <div key={a} className="flex items-center gap-1.5 bg-white/8 border border-white/12
                  text-white/65 text-[0.75rem] font-medium px-3 py-1 rounded-full">
                  <MapPin size={10} className="text-[#F97316]" />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Right — live map embed. Swap the src once the real location is provided. */}
          <div className="hidden lg:block rounded-2xl overflow-hidden border border-white/12
            shadow-[0_32px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.07)] h-[360px]">
            <iframe
              title="PrimeShield Roofing — Springfield, IL Service Area Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96926.53603915645!2d-89.70312!3d39.78173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b6a6e7a1afb7d%3A0x1b5e7c6b2a4e1234!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
            />
          </div>
        </div>

        {/* Stats stay full-width beneath the split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
          {STATS.map((s) => (
            <div key={s.num}>
              <p className="font-display font-extrabold text-white text-[1.6rem] leading-none mb-0.5">
                {s.num}
              </p>
              <p className="text-white/40 text-[0.65rem] font-medium uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}