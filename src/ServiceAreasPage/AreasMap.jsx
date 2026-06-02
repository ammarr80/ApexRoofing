import { MapPin } from "lucide-react";

export default function AreasMap() {
  return (
    <section className="bg-[#F9FAFB] py-24 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Service Map
          </div>
          <h2 className="font-display font-extrabold text-[#111827]
            text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-3">
            Find Us on the Map
          </h2>
          <p className="text-[#6B7280] text-[0.95rem] leading-relaxed max-w-lg">
            We're based in Houston and cover the full metro area. Call us if you're unsure
            whether we reach your neighborhood — we likely do.
          </p>
        </div>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm w-full h-[440px]">
          <iframe
            title="Apex Roofing — Houston TX Service Area Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220975.39697374294!2d-97.87640313749998!3d30.307801899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
          />
        </div>

        <div className="flex items-center gap-2 text-[#9CA3AF] text-[0.78rem] mt-4">
          <MapPin size={13} />
          Emergency response available 24/7 across all service zones.
        </div>

      </div>
    </section>
  );
}