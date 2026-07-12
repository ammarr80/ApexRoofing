import { useState } from "react";
import {
  ArrowRight, Lock, Upload, CheckCircle2, Phone,
  Clock, DollarSign, FileText, Wrench, Star
} from "lucide-react";

const SERVICES = [
  "Roof Repair",
  "Roof Replacement",
  "Leak Detection",
  "Storm Damage",
  "Gutter Installation",
  "Roof Inspection",
  "Other",
];

const PERKS = [
  {
    icon: <Clock size={20} />,
    title: "Response within 24 hours",
    desc: "We call or email you back the same day — most quotes are scheduled within 24 hours of your request.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Free, no obligation",
    desc: "No pressure, no upsells. Just a written estimate you can keep.",
  },
  {
    icon: <FileText size={20} />,
    title: "Insurance claim help included",
    desc: "We document everything for your adjuster and handle the paperwork side of storm claims.",
  },
  {
    icon: <Wrench size={20} />,
    title: "GAF Certified installation",
    desc: "Every job is backed by manufacturer warranties — not just our word.",
  },
];

export default function QuoteForm() {
  const [fileName, setFileName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleFile(e) {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="quote-form" className="bg-[#F9FAFB] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 items-start">

          {/* Left — context */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-bold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Get Your Quote
            </div>

            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.9rem,3.5vw,2.7rem)] leading-tight mb-4">
              Honest Pricing.<br />
              <em className="not-italic text-[#F97316]">No Surprises.</em>
            </h2>

            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-10 max-w-[400px]">
              Fill out the form and someone from our team will call you to schedule a free on-site inspection. Most estimates are delivered the same day we visit.
            </p>

            {/* Perks */}
            <div className="flex flex-col gap-6 mb-10">
              {PERKS.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#1A3C6E]/7 border border-[#1A3C6E]/10
                    flex items-center justify-center text-[#1A3C6E] flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827] text-[0.9rem] mb-0.5">{p.title}</h4>
                    <p className="text-[#6B7280] text-[0.82rem] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#E5E7EB]
              rounded-xl px-4 py-3 shadow-sm">
              <span className="font-bold text-[0.92rem] tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC04]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-[0.82rem] text-[#374151]">
                <strong className="font-bold text-[#111827]">4.9</strong> · Springfield, IL
              </span>
            </div>
          </div>

          {/* Right — main form card */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden
            shadow-[0_12px_48px_rgba(0,0,0,0.10)]">

            <div className="bg-[#1A3C6E] px-8 py-6 border-b border-white/8">
              <h3 className="font-display font-bold text-white text-[1.2rem] mb-1.5">
                Request a Free Estimate
              </h3>
              <p className="text-white/50 text-[0.82rem]">
                We'll get back to you within one business day.
              </p>
              <div className="inline-flex items-center gap-2 mt-3
                bg-[#F97316]/18 border border-[#F97316]/30
                text-[#FB923C] text-[0.68rem] font-bold tracking-widest uppercase
                px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                Typically responds in &lt; 24 hrs
              </div>
            </div>

            <div className="px-8 py-7">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200
                    flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-600" />
                  </div>
                  <h4 className="font-display font-bold text-[#111827] text-[1.3rem]">
                    Request Sent!
                  </h4>
                  <p className="text-[#6B7280] text-[0.88rem] leading-relaxed max-w-xs">
                    We've received your request and will call you within 24 hours to schedule your free inspection.
                  </p>
                  <div className="flex items-center gap-2 text-[#F97316] text-[0.82rem] font-semibold mt-2">
                    <Phone size={14} />
                    Or call us now: (555) 018-3921
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                        Full Name <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text" required placeholder="Jane Smith"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[0.88rem]
                          text-[#111827] placeholder-[#9CA3AF] focus:outline-none
                          focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                        Phone Number <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="tel" required placeholder="(555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[0.88rem]
                          text-[#111827] placeholder-[#9CA3AF] focus:outline-none
                          focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email" placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[0.88rem]
                        text-[#111827] placeholder-[#9CA3AF] focus:outline-none
                        focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                      Property Address <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      type="text" required placeholder="1424 West Maple Street, Springfield, IL"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[0.88rem]
                        text-[#111827] placeholder-[#9CA3AF] focus:outline-none
                        focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                      Service Needed <span className="text-[#F97316]">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[0.88rem]
                        text-[#374151] focus:outline-none
                        focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10 transition-all
                        appearance-none bg-white cursor-pointer">
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the issue, when it started, any storm damage, etc."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5E7EB] text-[0.88rem]
                        text-[#111827] placeholder-[#9CA3AF] focus:outline-none resize-none
                        focus:border-[#1A3C6E] focus:ring-2 focus:ring-[#1A3C6E]/10 transition-all
                        leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.78rem] font-semibold text-[#374151] mb-1.5">
                      Upload Photos{" "}
                      <span className="text-[#9CA3AF] font-normal">(optional)</span>
                    </label>
                    <label
                      htmlFor="photoUpload"
                      className="flex flex-col items-center justify-center gap-2 py-5
                        border-2 border-dashed border-[#E5E7EB] rounded-xl cursor-pointer
                        hover:border-[#1A3C6E]/40 hover:bg-[#1A3C6E]/[0.02]
                        transition-all text-center">
                      <Upload size={20} className="text-[#9CA3AF]" />
                      {fileName ? (
                        <span className="text-[0.8rem] text-[#1A3C6E] font-medium">{fileName}</span>
                      ) : (
                        <>
                          <span className="text-[0.8rem] text-[#6B7280] font-medium">
                            Click to upload roof photos
                          </span>
                          <span className="text-[0.7rem] text-[#9CA3AF]">
                            JPG, PNG, HEIC up to 10MB
                          </span>
                        </>
                      )}
                    </label>
                    <input
                      id="photoUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFile}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 w-full flex items-center justify-center gap-2
                      bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold text-[0.95rem]
                      py-4 rounded-xl transition-all
                      shadow-[0_6px_20px_rgba(249,115,22,0.38)]
                      hover:shadow-[0_8px_26px_rgba(249,115,22,0.46)]
                      hover:-translate-y-0.5">
                    Send My Estimate Request
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-[0.7rem] text-[#9CA3AF] flex items-center justify-center gap-1.5">
                    <Lock size={10} />
                    We never sell or share your information.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}