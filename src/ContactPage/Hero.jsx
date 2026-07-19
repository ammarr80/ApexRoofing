import { Link } from "react-router-dom";
import { Phone, Clock, MessageSquare, Mail, ArrowRight } from "lucide-react";

const DETAILS = [
  { icon: <Clock size={13} />,         text: "Mon–Sat 7am–7pm" },
  { icon: <Phone size={13} />,         text: "Same-day response" },
  { icon: <MessageSquare size={13} />, text: "Reply within the hour" },
];

export default function ContactHero() {
  return (
    <section className="relative bg-[#112951] pt-28 pb-24 overflow-hidden">

      {/* Photo bg */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
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
          <span className="text-white/70">Contact</span>
        </div>

        {/* Left text / right quick-contact card — mirrors the ServicesHero split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.68rem] font-semibold tracking-widest uppercase
              px-3 py-1 rounded-full mb-5">
              Get In Touch
            </div>

            <h1 className="font-display font-extrabold text-white leading-[1.1]
              text-[clamp(2.1rem,4.4vw,3.3rem)] mb-4">
              Contact PrimeShield Roofing —{" "}
              <span className="text-[#F97316]">Get a Free Estimate Today.</span>
            </h1>

            <p className="text-white/55 text-[0.92rem] leading-relaxed mb-8 max-w-md">
              Fill out the form below or give us a call directly. We respond fast — same-day inspections are available across Springfield and Central Illinois.
            </p>

            <a href="tel:+15550183921"
              className="inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                text-white font-bold text-[0.85rem] px-6 py-3 rounded-xl
                shadow-[0_6px_22px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 mb-8">
              <Phone size={14} strokeWidth={2.5} />
              Call (555) 018-3921
            </a>

            <div className="flex flex-wrap gap-5">
              {DETAILS.map((d) => (
                <div key={d.text} className="flex items-center gap-1.5 text-white/45 text-[0.75rem] font-medium">
                  <span className="text-[#F97316]">{d.icon}</span>
                  {d.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — quick contact card */}
          <div className="hidden lg:block rounded-2xl overflow-hidden
            shadow-[0_32px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.07)]">
            <div className="bg-white/[0.06] border border-white/12 rounded-2xl px-7 py-7 backdrop-blur-sm">
              <h3 className="font-display font-bold text-white text-[1.05rem] mb-5">
                Reach Us Directly
              </h3>

              <div className="flex flex-col gap-4 mb-6">
                <a href="tel:+15550183921" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-[#F97316]/15 border border-[#F97316]/25
                    rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={15} className="text-[#F97316]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[0.65rem] font-semibold uppercase tracking-widest">Call</p>
                    <p className="font-display font-bold text-white text-[0.88rem] group-hover:text-[#F97316] transition-colors">
                      (555) 018-3921
                    </p>
                  </div>
                </a>
                <a href="mailto:info@primeshieldroofing.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 bg-white/10 border border-white/15
                    rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/40 text-[0.65rem] font-semibold uppercase tracking-widest">Email</p>
                    <p className="font-display font-bold text-white text-[0.8rem] group-hover:text-[#F97316] transition-colors">
                      info@primeshieldroofing.com
                    </p>
                  </div>
                </a>
              </div>

              <a href="#contact"
                className="flex items-center justify-center gap-2 w-full
                  bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.85rem]
                  py-3 rounded-xl transition-all hover:-translate-y-0.5
                  shadow-[0_4px_16px_rgba(249,115,22,0.38)]">
                Fill Out the Form
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-[#F9FAFB] z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%)" }} />
    </section>
  );
}