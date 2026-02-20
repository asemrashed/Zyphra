const categories = [
  { title: "Mobile Tech", subtitle: "Next-gen devices" },
  { title: "Timepieces", subtitle: "Precision engineering" },
  { title: "Footwear", subtitle: "High-end style" },
  { title: "Gadgets", subtitle: "Future flight" },
];

export default function CategorySection() {
  return (
    <section className="mb-16">
      <h3 className="mb-6 text-2xl font-bold text-white">
        Featured Categories
      </h3>

      <div className="flex gap-6 overflow-x-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative h-80 min-w-65 rounded-xl bg-slate-800 p-6 flex flex-col justify-end"
          >
            <h4 className="text-xl font-bold text-white">{cat.title}</h4>
            <p className="text-sm text-primary">{cat.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}