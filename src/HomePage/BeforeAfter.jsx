import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const PAIRS = [
  {
    label: "Storm Damage → Full Repair",
    location: "Springfield, IL",
    duration: "4 days",
    before: "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1200&auto=format&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&auto=format&fit=crop&q=80",
  },
  {
    label: "Old Shingles → New Roof",
    location: "Springfield, IL",
    duration: "6 days",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
    after:  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
  },
];

function Slider({ before, after, label }) {
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(false);
  const dragging = useRef(false);
  const containerRef = useRef(null);

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(Math.max(raw, 0), 100));
  }, []);

  // Track pointer across the whole window so the drag never "sticks"
  // when the cursor leaves the image bounds.
  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    };
    const up = () => {
      dragging.current = false;
      setActive(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [setFromClientX]);

  const startDrag = () => {
    dragging.current = true;
    setActive(true);
  };

  // Click anywhere on the track to jump the handle there.
  const onTrackDown = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setFromClientX(clientX);
    startDrag();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { setPos((p) => Math.max(0, p - 2)); }
    else if (e.key === "ArrowRight") { setPos((p) => Math.min(100, p + 2)); }
    else if (e.key === "Home") { setPos(0); }
    else if (e.key === "End") { setPos(100); }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={onTrackDown}
      onTouchStart={onTrackDown}
      className="group relative w-full aspect-[4/3] md:aspect-[3/2] rounded-3xl overflow-hidden
        select-none cursor-col-resize ring-1 ring-black/5
        shadow-[0_20px_60px_-15px_rgba(17,24,39,0.35)]"
    >
      {/* After image (full-bleed base layer) */}
      <img
        src={after || "/placeholder.svg"}
        alt={`${label} — after`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped by percentage via clip-path) */}
      <img
        src={before || "/placeholder.svg"}
        alt={`${label} — before`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Top scrim for label legibility */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20
        bg-gradient-to-b from-black/45 to-transparent" />

      {/* Labels */}
      <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-1.5
        bg-white/15 backdrop-blur-md text-white text-[0.62rem] font-bold uppercase
        tracking-[0.15em] px-3 py-1.5 rounded-full ring-1 ring-white/25">
        Before
      </div>
      <div className="pointer-events-none absolute top-4 right-4 flex items-center gap-1.5
        bg-[#F97316] text-white text-[0.62rem] font-bold uppercase
        tracking-[0.15em] px-3 py-1.5 rounded-full shadow-lg shadow-[#F97316]/30">
        After
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 w-[3px] -translate-x-1/2
          bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Reveal before and after: ${label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        onMouseDown={(e) => { e.stopPropagation(); startDrag(); }}
        onTouchStart={(e) => { e.stopPropagation(); startDrag(); }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10
          h-12 w-12 rounded-full cursor-grab active:cursor-grabbing outline-none
          focus-visible:ring-4 focus-visible:ring-[#F97316]/50 rounded-full"
        style={{ left: `${pos}%` }}
      >
        {/* Pulse ring while idle */}
        <span
          className={`absolute inset-0 rounded-full bg-white/50 transition-opacity duration-300
            ${active ? "opacity-0" : "opacity-100 animate-ping"}`}
        />
        {/* Knob */}
        <span className="absolute inset-0 rounded-full bg-white/90 backdrop-blur
          shadow-xl ring-1 ring-black/5 flex items-center justify-center gap-0">
          <ChevronLeft size={16} color="#F97316" strokeWidth={3} className="-mr-1" />
          <ChevronRight size={16} color="#F97316" strokeWidth={3} className="-ml-1" />
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20
            text-[#F97316] text-[0.7rem] font-semibold tracking-widest uppercase
            px-3.5 py-1.5 rounded-full mb-4">
            Real Results
          </div>
          <h2 className="font-display font-extrabold text-[#111827] text-[clamp(1.9rem,4vw,2.8rem)] leading-tight">
            Before &amp; After
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-3xl text-[0.95rem] leading-relaxed">
            Drag the slider — or use your arrow keys — to see the difference. These are real jobs we&apos;ve
            completed right here in Springfield, IL. No stock photos, no staging.
          </p>
        </div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PAIRS.map((p) => (
            <div key={p.label} className="group">
              <Slider before={p.before} after={p.after} label={p.label} />
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="font-display font-bold text-[#111827] text-[1rem] leading-snug">
                  {p.label}
                </p>
                <div className="flex items-center gap-1.5 shrink-0 text-[#6B7280] text-[0.75rem] font-medium">
                  <MapPin size={13} className="text-[#F97316]" />
                  {p.location}
                  <span className="mx-1 text-[#D1D5DB]">•</span>
                  {p.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
