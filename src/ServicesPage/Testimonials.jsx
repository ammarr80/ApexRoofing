import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcus T.",
    location: "Springfield, IL",
    rating: 5,
    date: "March 2024",
    text: "They showed up within 2 hours after the hail storm. Had my roof patched that same evening and fully replaced by Friday. Straightforward the whole time about what actually needed to be done — exactly what you want when your ceiling is leaking.",
  },
  {
    name: "Priya S.",
    location: "Decatur, IL",
    rating: 5,
    date: "January 2024",
    text: "Got three quotes before calling. They weren't the cheapest, but they were the most transparent. The crew arrived on time, cleaned up before leaving, and the new roof looks great. Worth it.",
  },
  {
    name: "Derek & Alicia M.",
    location: "Lincoln, IL",
    rating: 5,
    date: "November 2023",
    text: "We were nervous about the whole process — a new roof is a big expense. They walked us through every step, handled the insurance claim for us, and finished a day ahead of schedule.",
  },
  {
    name: "James O.",
    location: "Champaign, IL",
    rating: 5,
    date: "August 2023",
    text: "Had a leak I'd been putting off for months. Called on a Tuesday morning, they found the source by noon and sealed it the same day. Turned out to be a flashing issue — they could've told me I needed a whole new roof, but they didn't.",
  },
  {
    name: "Sandra K.",
    location: "Bloomington, IL",
    rating: 5,
    date: "June 2023",
    text: "The crew was careful with our property — tarps down everywhere, kept noise low while my kids were napping, and swept the yard before leaving. The roof looks great too.",
  },
  {
    name: "Tony R.",
    location: "Springfield, IL",
    rating: 5,
    date: "April 2023",
    text: "They replaced our 22-year-old roof in a single day. Showed up at 7am, finished by 4pm, and left the place spotless. My neighbor asked who did it the next morning.",
  },
];

export default function ServicesTestimonials() {
  return (
    <section className="bg-white py-24" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1A3C6E]/8 border border-[#1A3C6E]/15
            text-[#1A3C6E] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Reviews
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-extrabold text-[#111827]
                text-[clamp(1.9rem,4vw,2.8rem)] leading-tight mb-2">
                What Springfield Homeowners Say
              </h2>
              <p className="text-[#6B7280] text-[0.95rem]">
                A few reviews from homeowners we've worked with across Central Illinois.
              </p>
            </div>
            {/* Overall rating */}
            <div className="flex items-center gap-4 bg-[#F9FAFB] border border-[#E5E7EB]
              rounded-2xl px-6 py-4 shrink-0">
              <div>
                <p className="font-display font-black text-[#111827] text-[2.2rem] leading-none">4.9</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#F97316" color="#F97316" />
                  ))}
                </div>
              </div>
              <div className="w-px h-12 bg-[#E5E7EB]" />
              <div>
                <p className="font-display font-bold text-[#111827] text-[0.95rem]">Google Rating</p>
                <p className="text-[#6B7280] text-[0.75rem]">Springfield, IL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <div key={r.name}
              className="flex flex-col gap-4 p-6 border border-[#E5E7EB] rounded-2xl
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#1A3C6E]/15
                transition-all duration-200">

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#F97316" color="#F97316" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#374151] text-[0.85rem] leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F3F4F6]">
                <div>
                  <p className="font-display font-bold text-[#111827] text-[0.9rem]">{r.name}</p>
                  <p className="text-[#9CA3AF] text-[0.72rem] font-medium">{r.location}</p>
                </div>
                <p className="text-[#9CA3AF] text-[0.7rem]">{r.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}