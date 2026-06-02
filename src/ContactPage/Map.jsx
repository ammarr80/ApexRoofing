import { MapPin } from "lucide-react";

const AREAS = [
  "Houston", "Round Rock", "Cedar Park", "Pflugerville",
  "Buda", "Kyle", "Georgetown", "Leander", "Manor",
];

export default function ContactMap() {
  return (
    <section className="bg-[#F9FAFB] py-20 border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: service area note */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
              text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
              px-3.5 py-1.5 rounded-full mb-5">
              Service Area
            </div>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.6rem,3vw,2.2rem)] leading-tight mb-4">
              Roofing Services Across<br />Houston & Surrounding Areas
            </h2>
            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed mb-8">
              Apex Roofing provides residential and commercial roofing services throughout
              Houston and the greater metro area. If you're within 40 miles of downtown Houston,
              we've got you covered — same-day response included.
            </p>

            {/* Area pills */}
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <div key={a}
                  className="flex items-center gap-1.5 bg-white border border-[#E5E7EB]
                    hover:border-[#1A3C6E]/25 hover:bg-[#EBF0FA]
                    rounded-full px-4 py-2 transition-all duration-200">
                  <MapPin size={12} className="text-[#F97316]" />
                  <span className="text-[#111827] text-[0.82rem] font-semibold">{a}</span>
                </div>
              ))}
            </div>

            <p className="text-[#9CA3AF] text-[0.78rem] mt-5">
              Not on the list? Call us — we likely cover your area.
            </p>
          </div>

          {/* Right: map */}
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm h-80">
            <iframe
              title="Apex Roofing — Houston, TX Service Area"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220975.39697374294!2d-97.87640313749998!3d30.307801899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
            />
          </div>

        </div>
      </div>
    </section>
  );
}