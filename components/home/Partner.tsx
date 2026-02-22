export default function Partnership() {
  return (
    <section className="mb-6 md:mb-12 border-y border-white/5 py-6 md:py-12 mx-5 md:mx-10 text-center">
      <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
        In Partnership With
      </p>

      <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:opacity-100">
        <div className="text-2xl font-black text-white">LUMINA</div>
        <div className="text-2xl font-black text-white italic">VORTEX</div>
        <div className="text-2xl font-black text-white underline decoration-primary">
          ONYX
        </div>
        <div className="text-2xl font-black text-white">PRISMA</div>
        <div className="text-2xl font-black text-white">EXODUS</div>
      </div>
    </section>
  );
}