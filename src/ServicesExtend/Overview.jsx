export default function Overview({ data }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: content */}
          <div>
            <h2 className="font-display font-extrabold text-[#111827]
              text-[clamp(1.8rem,3.5vw,2.5rem)] leading-tight mb-5">
              {data.title}
            </h2>
            <p className="text-[#6B7280] text-[0.95rem] leading-relaxed">
              {data.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}