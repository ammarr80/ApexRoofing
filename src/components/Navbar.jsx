import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone, Menu, X, Home, ChevronDown, ArrowRight,
  Wrench, Droplets, CloudLightning, Pipette, Search, MapPin,
} from "lucide-react";

/* ----------------------------------------------------------------
   Data — mirrors ServicesGrid + AreasGrid so the nav stays in sync.
   Links WITH a `menu` render a dropdown (info-rich).
   Links WITHOUT a `menu` redirect directly to their page.
------------------------------------------------------------------- */
const SERVICES = [
  { icon: Wrench,        title: "Roof Repair",        slug: "roof-repair",     price: "From $250",        time: "Same day" },
  { icon: Home,          title: "Roof Replacement",   slug: "roof-replacement", price: "From $6,500",     time: "1–2 days" },
  { icon: Droplets,      title: "Leak Detection",     slug: "leak-detection",  price: "From $150",        time: "Same day" },
  { icon: CloudLightning, title: "Storm Damage Repair", slug: "storm-damage",  price: "Insurance covered", time: "Emergency" },
  { icon: Pipette,       title: "Gutter Installation", slug: "gutters",        price: "From $800",        time: "1 day" },
  { icon: Search,        title: "Roof Inspection",    slug: "inspection",      price: "From $99",         time: "Same day" },
];

const AREAS = [
  { name: "Springfield", slug: "springfield", tag: "Main Office",   primary: true,  desc: "Our home base. Full roofing services across all zip codes." },
  { name: "Lincoln",     slug: "lincoln",     tag: "Full Coverage", primary: false, desc: "Residential and commercial with same-day availability." },
  { name: "Decatur",     slug: "decatur",     tag: "Full Coverage", primary: false, desc: "Repairs, replacements, and inspections." },
  { name: "Champaign",   slug: "champaign",   tag: "Full Coverage", primary: false, desc: "Fast response roofing services." },
  { name: "Bloomington", slug: "bloomington", tag: "Full Coverage", primary: false, desc: "Full coverage including emergency storm damage." },
];

const LINKS = [
  { label: "Services", to: "/services", menu: "services" },
  { label: "Service Areas", to: "/service-areas", menu: "areas" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

/* ---------------- Desktop dropdown panels ---------------- */

function ServicesMenu() {
  return (
    <div className="w-[620px] p-3">
      <div className="grid grid-cols-2 gap-1">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.06]"
            >
              <div
                className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
                  bg-white/[0.06] text-[#F97316] transition-colors group-hover/item:bg-[#F97316]/15"
              >
                <Icon size={18} strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <span className="block text-[0.85rem] font-semibold text-white">
                  {s.title}
                </span>
                <span className="mt-0.5 flex items-center gap-2 text-[0.72rem] text-white/55">
                  <span className="font-semibold text-[#F97316]">{s.price}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  {s.time}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        to="/services"
        className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-white/10
          py-2.5 text-[0.8rem] font-semibold text-white transition-all hover:border-[#F97316]/40 hover:text-[#F97316]"
      >
        View all services <ArrowRight size={14} />
      </Link>
    </div>
  );
}

const TAG_STYLE = {
  "Main Office": "bg-[#F97316]/15 text-[#F97316]",
  "Full Coverage": "bg-white/10 text-white/70",
};

function AreasMenu() {
  return (
    <div className="w-[420px] p-3">
      <ul className="flex flex-col gap-0.5">
        {AREAS.map((a) => (
          <li key={a.slug}>
            <Link
              to={`/service-areas/${a.slug}`}
              className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.06]"
            >
              <MapPin
                size={16}
                strokeWidth={2}
                className={`mt-0.5 shrink-0 ${a.primary ? "text-[#F97316]" : "text-white/40"}`}
              />
              <div className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="text-[0.85rem] font-semibold text-white">{a.name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider ${TAG_STYLE[a.tag]}`}
                  >
                    {a.tag}
                  </span>
                </span>
                <span className="mt-0.5 block text-[0.75rem] leading-snug text-white/55">
                  {a.desc}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/service-areas"
        className="mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-white/10
          py-2.5 text-[0.8rem] font-semibold text-white transition-all hover:border-[#F97316]/40 hover:text-[#F97316]"
      >
        View all areas <ArrowRight size={14} />
      </Link>
    </div>
  );
}

/* ---------------- Mobile / tablet accordion content ---------------- */

function MobileServices() {
  return (
    <div className="flex flex-col gap-0.5 pb-2">
      {SERVICES.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
          >
            <Icon size={16} strokeWidth={2} className="shrink-0 text-[#F97316]" />
            <span className="text-[0.83rem] font-medium text-white/85">{s.title}</span>
            <span className="ml-auto text-[0.7rem] font-semibold text-[#F97316]">{s.price}</span>
          </Link>
        );
      })}
      <Link to="/services" className="px-3 py-2.5 text-[0.8rem] font-semibold text-[#F97316]">
        View all services &rarr;
      </Link>
    </div>
  );
}

function MobileAreas() {
  return (
    <div className="flex flex-col gap-0.5 pb-2">
      {AREAS.map((a) => (
        <Link
          key={a.slug}
          to={`/service-areas/${a.slug}`}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
        >
          <MapPin size={15} strokeWidth={2} className={`shrink-0 ${a.primary ? "text-[#F97316]" : "text-white/40"}`} />
          <span className="text-[0.83rem] font-medium text-white/85">{a.name}</span>
          <span className="ml-auto text-[0.62rem] font-semibold uppercase tracking-wider text-white/45">
            {a.tag}
          </span>
        </Link>
      ))}
      <Link to="/service-areas" className="px-3 py-2.5 text-[0.8rem] font-semibold text-[#F97316]">
        View all areas &rarr;
      </Link>
    </div>
  );
}

/* ---------------- Navbar ---------------- */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown label
  const [openAccordion, setOpenAccordion] = useState(null); // mobile accordion label

  const navRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    setOpenAccordion(null);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close desktop dropdown on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const navClass =
    "text-[0.82rem] font-medium px-3.5 py-2 rounded-md transition-all duration-150";

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[#1A3C6E] shadow-[0_4px_24px_rgba(26,60,110,0.35)] py-3" : "bg-[#1A3C6E] py-4"}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div
            className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center
            shadow-[0_2px_8px_rgba(249,115,22,0.4)] group-hover:bg-[#EA6C0A] transition-colors"
          >
            <Home size={17} color="white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-display font-bold text-white text-[1rem] tracking-tight">
              PrimeShield Roofing
            </span>
            <span className="text-[0.62rem] text-white/50 tracking-widest uppercase font-medium">
              Springfield, IL
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {LINKS.map((l) => {
            const isActive = pathname === l.to || pathname.startsWith(l.to + "/");
            const isDropdownOpen = openDropdown === l.label;

            // Simple link: redirect directly.
            if (!l.menu) {
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`${navClass} ${
                    isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {l.label}
                </Link>
              );
            }

            // Info-rich link: click to open dropdown panel.
            return (
              <div key={l.to} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(isDropdownOpen ? null : l.label)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  className={`${navClass} flex items-center gap-1 ${
                    isActive || isDropdownOpen
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`absolute left-0 top-full mt-3 origin-top rounded-2xl border border-white/10
                    bg-[#142F58] shadow-[0_20px_50px_rgba(10,25,50,0.5)] transition-all duration-150
                    ${isDropdownOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1"}`}
                >
                  {l.menu === "services" ? <ServicesMenu /> : <AreasMenu />}
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <a
            href="tel:+15550183921"
            className="flex items-center gap-2 text-white/90 hover:text-white text-[0.85rem] font-semibold transition-colors"
          >
            <Phone size={14} strokeWidth={2.5} />
            (555) 018-3921
          </a>
          <Link
            to="/quote"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold text-[0.82rem]
              px-5 py-2.5 rounded-lg transition-all duration-150
              shadow-[0_2px_10px_rgba(249,115,22,0.4)] hover:-translate-y-px"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="lg:hidden ml-auto p-2 text-white/80 hover:text-white transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#142F58] border-t border-white/10
        ${open ? "max-h-[820px]" : "max-h-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => {
            const isAccordionOpen = openAccordion === l.label;

            // Simple link: redirect directly.
            if (!l.menu) {
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-[0.9rem] font-medium text-white/80 hover:text-white
                    py-3 border-b border-white/[0.08] transition-colors"
                >
                  {l.label}
                </Link>
              );
            }

            // Info-rich link: tap to expand accordion.
            return (
              <div key={l.to} className="border-b border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isAccordionOpen ? null : l.label)}
                  aria-expanded={isAccordionOpen}
                  className="flex w-full items-center justify-between py-3
                    text-[0.9rem] font-medium text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                  <ChevronDown
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${isAccordionOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isAccordionOpen ? "max-h-[560px]" : "max-h-0"}`}>
                  {l.menu === "services" ? <MobileServices /> : <MobileAreas />}
                </div>
              </div>
            );
          })}

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+15550183921"
              className="flex items-center justify-center gap-2 border border-white/25
                text-white font-semibold text-sm py-3 rounded-lg"
            >
              <Phone size={15} />
              (555) 018-3921
            </a>
            <Link
              to="/quote"
              className="bg-[#F97316] text-white font-semibold text-sm text-center py-3 rounded-lg"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}