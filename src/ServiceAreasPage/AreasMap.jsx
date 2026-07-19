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
            We're based in Springfield and cover the surrounding Central Illinois area. Give us a call if you're not sure whether we reach your neighborhood.
          </p>
        </div>

        {/* Map embed */}
        <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm w-full h-[440px]">
          <iframe
            title="PrimeShield Roofing — Springfield, IL Service Area Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96926.53603915645!2d-89.70312!3d39.78173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b6a6e7a1afb7d%3A0x1b5e7c6b2a4e1234!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000"
          />
        </div>

        <div className="flex items-center gap-2 text-[#9CA3AF] text-[0.78rem] mt-4">
          <MapPin size={13} />
          24/7 emergency roof repair available across all service zones.
        </div>

      </div>
    </section>
  );
}