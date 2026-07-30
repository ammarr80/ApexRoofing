export default function Trust({ data }) {
  return (
    <section className="bg-white py-14 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display font-extrabold text-[#1A3C6E] text-[clamp(1.6rem,3vw,2.2rem)] leading-none mb-1.5">
                {s.number}
              </p>
              <p className="text-[#6B7280] text-[0.72rem] font-semibold uppercase tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}