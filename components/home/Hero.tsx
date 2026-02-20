export default function Hero() {
  return (
    <section className="relative mb-12 h-125 w-full overflow-hidden rounded-2xl bg-slate-800 flex items-center px-12">
      <div>
        <span className="mb-4 inline-block font-bold text-primary uppercase text-sm">
          Next Generation Audio
        </span>
        <h2 className="mb-6 max-w-xl text-5xl font-extrabold text-white">
          THE FUTURE OF SOUND.
        </h2>
        <p className="mb-8 max-w-md text-lg text-slate-300">
          Experience unparalleled precision and immersion.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-primary px-8 py-4 text-sm font-bold text-black">
            SHOP NOW
          </button>
          <button className="rounded-lg border border-white/20 px-8 py-4 text-sm font-bold text-white">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}