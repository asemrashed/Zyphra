import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Mobiles", subtitle: "Next-gen devices", imgUrl: "/categories/mobile.png", path: "/products/mobiles" },
  { title: "Laptops", subtitle: "Powerful performance", imgUrl: "/categories/laptops.png", path: "/products/laptops" },
  { title: "Cases", subtitle: "Stylish protection", imgUrl: "/categories/case.png", path: "/products/cases" },
  { title: "Tablets", subtitle: "Portable productivity", imgUrl: "/categories/tab.png", path: "/products/tablets" },
  { title: "Monitors", subtitle: "Immersive displays", imgUrl: "/categories/monitor.png", path: "/products/monitors" },
  { title: "Power Banks", subtitle: "On-the-go charging", imgUrl: "/categories/powerbank.png", path: "/products/powerbanks" },
];

export default function CategorySection() {
  return (
    <section className="mb-6 md:mb-10">
      <h3 className="text-2xl lg:text-3xl font-bold text-primary">
          Featured Categories
        </h3>

      <div className="flex gap-6 overflow-x-auto py-5 no-scrollbar">
        {categories.map((cat, index) => (
          <Link href={cat.path}
            key={index}
            className="relative h-70 min-w-65 rounded-xl hover:shadow-lg shadow-amber-200 bg-slate-800 p-6 flex flex-col justify-end transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0">
              <Image src={cat.imgUrl} alt={cat.title} width={300} height={300} className="object-cover rounded-xl opacity-90" />
            </div>
            <div className="flex flex-col bg-black/60 p-4 rounded-lg z-10">
              <h4 className="text-xl font-bold text-primary">{cat.title}</h4>
              <p className="text-sm text-white">{cat.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}