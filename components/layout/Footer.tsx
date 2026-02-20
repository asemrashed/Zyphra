export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-dark py-16 px-10">
      <div className="mx-auto max-w-screen-2xl grid grid-cols-2 gap-12 md:grid-cols-4">

        <div className="col-span-2">
          <h2 className="text-xl font-black text-white uppercase">
            Zyphra
          </h2>
          <p className="mt-4 text-sm text-slate-400 max-w-sm">
            Pioneering the intersection of luxury and technology.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase text-white">
            Shop
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>New Arrivals</li>
            <li>Electronics</li>
            <li>Apparel</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase text-white">
            Support
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Shipping</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-xs text-slate-500 text-center">
        © 2024 ZYPHRA SYSTEMS INC.
      </div>
    </footer>
  );
}