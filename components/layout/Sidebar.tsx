export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/5 py-8 pl-6 pr-4 lg:block">
      <nav className="space-y-8">
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
            Categories
          </h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="hover:text-primary cursor-pointer">Electronics</li>
            <li className="hover:text-primary cursor-pointer">Apparel</li>
            <li className="hover:text-primary cursor-pointer">Luxury Goods</li>
            <li className="hover:text-primary cursor-pointer">Home Tech</li>
            <li className="text-primary font-bold">New Arrivals</li>
          </ul>
        </div>

        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
          <p className="text-xs font-bold text-primary">PREMIUM PASS</p>
          <p className="mt-1 text-sm text-slate-400">
            Get early access to drops.
          </p>
          <button className="mt-3 w-full rounded bg-primary py-2 text-xs font-bold text-black">
            UPGRADE
          </button>
        </div>
      </nav>
    </aside>
  );
}