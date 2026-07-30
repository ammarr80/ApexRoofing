import { Link } from "react-router-dom";
import { Phone, ArrowRight, MapPin, ShieldCheck, Clock } from "lucide-react";

export default function Hero({ data, area }) {
  return (
    <section className="relative bg-[#112951] pt-28 pb-24 overflow-hidden">

      {/* Photo bg */}
      <div className="absolute inset-0">
        <img
          src={data.img}
          alt=""
          className="w-full h-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#112951]/95 via-[#112951]/90 to-[#112951]/70" />
      </div>

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
          <Link to="/service-areas" className="hover:text-white/70 transition-colors">Service Areas</Link>
          <span>/</span>
          <span className="text-white/70">{area.city}, {area.state}</span>
        </div>

        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
            text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
            px-3 py-1 rounded-full mb-5">
            <MapPin size={11} className="text-[#F97316]" />
            {data.badge}
          </div>

          <h1 className="font-display font-extrabold text-white leading-[1.1]
            text-[clamp(2.1rem,4.2vw,3.2rem)] mb-4">
            {data.headline}
          </h1>

          <p className="text-white/55 text-[0.95rem] leading-relaxed mb-8 max-w-xl">
            {data.sub}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a href="tel:+15550183921"
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A]
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

          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-1.5 text-white/45 text-[0.75rem] font-medium">
              <ShieldCheck size={13} className="text-[#F97316]" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-1.5 text-white/45 text-[0.75rem] font-medium">
              <Clock size={13} className="text-[#F97316]" />
              Serving {area.city}, {area.state} {area.zip}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}