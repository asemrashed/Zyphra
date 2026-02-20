export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-black">
            ⚡
          </div>
          <h1 className="text-2xl font-extrabold tracking-tighter text-white uppercase">
            Zyphra
          </h1>
        </div>

        {/* Search */}
        <div className="hidden flex-1 px-12 md:flex max-w-2xl">
          <input
            placeholder="Search for luxury tech..."
            className="w-full rounded-lg border border-white/10 bg-white/5 py-2 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-slate-300 hover:text-primary">Account</button>
          <button className="text-slate-300 hover:text-primary">Wishlist</button>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-black">
            Cart (2)
          </button>
        </div>
      </div>
    </header>
  );
}