const products = [
  { name: "Zyphra Pro Studio X", price: "$299.00" },
  { name: "Zyphra Watch Series S", price: "$449.00" },
  { name: "Zyphra Retro Cam v4", price: "$899.00" },
];

export default function LatestSection() {
  return (
    <section className="mb-16">
      <h3 className="mb-8 text-2xl font-bold text-white">
        Latest Product Drops
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/5 bg-white/2 p-4 hover:border-primary/30"
          >
            <div className="mb-4 aspect-square rounded-lg bg-slate-900" />
            <h4 className="mb-2 text-lg font-bold text-white">
              {product.name}
            </h4>
            <span className="text-xl font-bold text-primary">
              {product.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}