import { useState } from "react";
import { Send, CheckCircle2, Check, CheckCircle } from "lucide-react";

const SERVICES = [
  "Roof Repair",
  "Roof Replacement",
  "Roof Inspection",
  "Storm Damage Repair",
  "Leak Detection",
  "Gutter Installation",
  "Emergency Service",
  "Other",
];

const inputClass = `bg-white border border-[#E5E7EB] rounded-xl px-4 py-3
  text-[0.9rem] text-[#111827] placeholder:text-[#9CA3AF]
  focus:outline-none focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10
  transition-all w-full`;

const labelClass = `text-[0.75rem] font-semibold text-[#374151] uppercase tracking-wide mb-1.5 block`;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });

  const handle = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="bg-[#F9FAFB] py-24" id="contact-form">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: header */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Free Estimate
            </div>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-4">
              Tell Us About Your Roof
            </h2>
            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-6">
              Fill out the form and an Apex team member will call you back within the hour.
              No pressure, no obligation — just a straight answer from a real roofer.
            </p>
            <div className="flex flex-col gap-3 text-[0.85rem] text-[#6B7280]">
              <p className="flex items-center gap-2"> <CheckCircle className="text-[#F97316] w-5 h-5" /> Free estimate — no commitment</p>
              <p className="flex items-center gap-2"> <CheckCircle className="text-[#F97316] w-5 h-5" /> Same-day inspection available</p>
              <p className="flex items-center gap-2"> <CheckCircle className="text-[#F97316] w-5 h-5" /> Response within 60 minutes</p>
              <p className="flex items-center gap-2"> <CheckCircle className="text-[#F97316] w-5 h-5" /> Licensed & insured crew</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center
                bg-white border border-[#E5E7EB] rounded-2xl p-14 gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} color="#16a34a" />
                </div>
                <h3 className="font-display font-extrabold text-[#111827] text-[1.5rem]">
                  We'll Call You Shortly
                </h3>
                <p className="text-[#6B7280] text-[0.9rem] max-w-sm leading-relaxed">
                  Thanks for reaching out. An Apex team member will contact you within
                  the hour to schedule your free inspection.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-8 flex flex-col gap-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handle}
                      placeholder="John Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input name="phone" required value={form.phone} onChange={handle}
                      placeholder="(512) 000-0000" type="tel" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email <span className="text-[#9CA3AF] normal-case font-normal">(optional)</span></label>
                    <input name="email" value={form.email} onChange={handle}
                      placeholder="john@email.com" type="email" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Service Needed *</label>
                    <select name="service" required value={form.service} onChange={handle}
                      className={`${inputClass} appearance-none`}>
                      <option value="" disabled>Select a service</option>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea name="message" value={form.message} onChange={handle}
                    rows={4} placeholder="Describe the issue or what you need..."
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit"
                  className="flex items-center justify-center gap-2.5
                    bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.95rem]
                    py-4 rounded-xl transition-all hover:-translate-y-0.5
                    shadow-[0_4px_16px_rgba(249,115,22,0.35)]">
                  <Send size={16} />
                  Send Request — We'll Call Within the Hour
                </button>

                <p className="text-[#9CA3AF] text-[0.72rem] text-center">
                  No spam. No obligation. Just honest roofing advice.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}