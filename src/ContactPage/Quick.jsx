import { Phone, Mail, Clock } from "lucide-react";

const INFO = [
  {
    icon: <Phone size={22} />,
    label: "Call Us",
    value: "(512) 000-0000",
    sub: "Emergency line open 24/7",
    href: "tel:+15120000000",
    highlight: true,
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "info@apexroofingHouston.com",
    sub: "We reply within a few hours",
    href: "mailto:info@apexroofingHouston.com",
    highlight: false,
  },
  {
    icon: <Clock size={22} />,
    label: "Business Hours",
    value: "Mon – Sat: 7am – 7pm",
    sub: "Sunday: Emergency calls only",
    href: null,
    highlight: false,
  },
];

export default function QuickContact() {
  return (
    <section className="bg-white py-20 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Contact Info
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
            Prefer to Reach Out Directly?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INFO.map((item) => (
            <div key={item.label}
              className={`flex flex-col gap-4 p-7 rounded-2xl border transition-all duration-200
                ${item.highlight
                  ? "bg-[#1A3C6E] border-[#1A3C6E]"
                  : "bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#1A3C6E]/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                }`}>

              <div className={`w-11 h-11 rounded-xl flex items-center justify-center
                ${item.highlight
                  ? "bg-[#F97316]/20 border border-[#F97316]/30 text-[#F97316]"
                  : "bg-[#1A3C6E]/8 border border-[#1A3C6E]/12 text-[#1A3C6E]"
                }`}>
                {item.icon}
              </div>

              <div>
                <p className={`text-[0.7rem] font-semibold uppercase tracking-widest mb-1
                  ${item.highlight ? "text-white/50" : "text-[#9CA3AF]"}`}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href}
                    className={`font-display font-bold text-[1.05rem] block mb-1 transition-colors
                      ${item.highlight
                        ? "text-white hover:text-[#F97316]"
                        : "text-[#111827] hover:text-[#1A3C6E]"
                      }`}>
                    {item.value}
                  </a>
                ) : (
                  <p className={`font-display font-bold text-[1.05rem] mb-1
                    ${item.highlight ? "text-white" : "text-[#111827]"}`}>
                    {item.value}
                  </p>
                )}
                <p className={`text-[0.78rem]
                  ${item.highlight ? "text-white/50" : "text-[#9CA3AF]"}`}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}