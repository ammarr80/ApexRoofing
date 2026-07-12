import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Services",      to: "/services" },
  { label: "Service Areas", to: "/service-areas" },
  { label: "About",         to: "/about" },
  { label: "Contact",       to: "/contact" },
  { label: "Get a Quote",   to: "/quote" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628]">

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3 w-fit">
              <div className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center
                shadow-[0_2px_8px_rgba(249,115,22,0.4)]">
                <Home size={16} color="white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-[1rem] tracking-tight">
                  PrimeShield Roofing
                </span>
                <span className="text-[0.62rem] text-white/40 tracking-widest uppercase">
                  Springfield, Illinois
                </span>
              </div>
            </Link>

            <p className="text-white/40 text-[0.85rem] leading-relaxed max-w-xs">
              Roofing contractor serving Springfield and Central Illinois. Repairs, replacements, and emergency service — backed by a 10-year workmanship warranty.
            </p>

            <div className="flex flex-col gap-3">
              <a href="tel:+15550183921"
                className="flex items-center gap-2.5 text-white/70 hover:text-white
                  text-[0.85rem] font-medium transition-colors">
                <Phone size={14} className="text-[#F97316]" />
                (555) 018-3921
              </a>
              <a href="mailto:contact@primeshieldroofing.com"
                className="flex items-center gap-2.5 text-white/70 hover:text-white
                  text-[0.85rem] font-medium transition-colors">
                <Mail size={14} className="text-[#F97316]" />
                contact@primeshieldroofing.com
              </a>
              <div className="flex items-center gap-2.5 text-white/70 text-[0.85rem] font-medium">
                <MapPin size={14} className="text-[#F97316]" />
                Springfield, IL &amp; Surrounding Areas
              </div>
            </div>
          </div>

          {/* Links col */}
          <div>
            <p className="font-display font-bold text-white text-[0.85rem] uppercase
              tracking-widest mb-5">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <Link key={l.to} to={l.to}
                  className="flex items-center gap-1.5 text-white/50 hover:text-white
                    text-[0.85rem] font-medium transition-colors group w-fit">
                  <ArrowRight size={12} className="text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA col */}
          <div>
            <p className="font-display font-bold text-white text-[0.85rem] uppercase
              tracking-widest mb-5">
              Get a Free Estimate
            </p>
            <p className="text-white/40 text-[0.85rem] leading-relaxed mb-6">
              Call us or request a quote online. We aim to respond quickly — same-day inspections available in most cases.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+15550183921"
                className="flex items-center justify-center gap-2.5
                  bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.85rem]
                  px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5
                  shadow-[0_4px_14px_rgba(249,115,22,0.35)]">
                <Phone size={14} strokeWidth={2.5} />
                Call (555) 018-3921
              </a>
              <Link to="/quote"
                className="flex items-center justify-center gap-2
                  border border-white/15 hover:border-white/30
                  text-white/70 hover:text-white font-semibold text-[0.85rem]
                  px-5 py-3 rounded-xl transition-all">
                Request Free Estimate
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[0.75rem]">
            © {new Date().getFullYear()} PrimeShield Roofing · Springfield, IL · All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[["Privacy Policy", "/privacy"], ["Terms", "/terms"]].map(([l, t]) => (
              <Link key={t} to={t}
                className="text-white/25 hover:text-white/50 text-[0.75rem] transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}