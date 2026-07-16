import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AREAS = [
  { name: "Springfield",  primary: true,  tag: "Main Office" },
  { name: "Lincoln",      primary: false, tag: "Full Coverage" },
  { name: "Decatur",      primary: false, tag: "Full Coverage" },
  { name: "Champaign",    primary: false, tag: "Full Coverage" },
  { name: "Bloomington",  primary: false, tag: "Full Coverage" },
];

const TAG_STYLES = {
  "Main Office":    "bg-[#F97316] border-[#F97316] text-white",
  "Full Coverage":  "bg-white/10 border-white/20 text-white/80",
  "Emergency Only": "bg-transparent border-white/20 text-white/40",
};

export default function ServiceAreas() {
  return (
    <section className="bg-[#1A3C6E] py-24" id="service-areas">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-14 items-start">

          {/* Left — copy */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15
              text-white/80 text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Where We Work
            </div>
            <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,4vw,2.6rem)] leading-tight mb-4">
              Roofing Contractor Serving<br />Springfield & Central Illinois
            </h2>
            <p className="text-white/55 text-[0.95rem] leading-relaxed mb-8">
              We provide roof repair, replacement, and inspection services throughout Springfield and the surrounding Central Illinois area, with emergency response available across every area we serve, day or night.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-2 mb-10">
              {Object.entries(TAG_STYLES).map(([label, cls]) => (
                <span key={label} className={`inline-flex items-center border text-[0.65rem] font-semibold
                  uppercase tracking-wider px-3 py-1 rounded-full ${cls}`}>
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <a href="tel:+15550183921"
                  className="flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6C0A]
                    text-white font-bold text-[0.88rem] px-6 py-3 rounded-xl
                    shadow-[0_4px_18px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-0.5 w-fit">
                  <Phone size={15} strokeWidth={2.5} />
                  Call (555) 018-3921
                </a>
                <Link to="/quote"
                  className="flex items-center gap-2 border border-white/25 hover:border-white/60
                    text-white font-semibold text-[0.9rem] px-6 py-3.5 rounded-xl
                    transition-all hover:bg-white/8 hover:-translate-y-0.5">
                    Get a Free Quote <ArrowRight size={15} />
                </Link>
              </div>
              <p className="text-white/35 text-[0.75rem]">
                Don't see your town listed? Call us — there's a good chance we cover your area too.
              </p>
            </div>
          </div>

          {/* Right — map + grid */}
          <div className="flex-1 w-full flex flex-col gap-5">

            {/* Google Maps Embed — Springfield, IL */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl w-full h-72">
              <iframe
                title="PrimeShield Roofing Service Area — Springfield, IL"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96926.53603915645!2d-89.70312!3d39.78173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b6a6e7a1afb7d%3A0x1b5e7c6b2a4e1234!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
              />
            </div>

            {/* Area cards grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
              {AREAS.map((a) => (
                <div
                  key={a.name}
                  className={`group flex items-center justify-between
                    rounded-xl px-5 py-4 border transition-all duration-200
                    ${a.primary
                      ? "bg-white/10 border-white/20 hover:bg-white/15"
                      : "bg-white/4 border-white/8 hover:bg-white/8"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      className={a.primary ? "text-[#F97316]" : "text-white/30"}
                      strokeWidth={2}
                    />
                    <span className={`font-display font-bold text-[0.95rem]
                      ${a.primary ? "text-white" : "text-white/70"}`}>
                      {a.name}
                    </span>
                  </div>
                  <span className={`inline-flex items-center border text-[0.62rem] font-semibold
                    uppercase tracking-wider px-2 py-0.5 rounded-full ${TAG_STYLES[a.tag]}`}>
                    {a.tag}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white/35 text-[0.78rem]">
              <MapPin size={13} />
              <span>24/7 emergency roof repair available across all listed service areas.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}