import Image from 'next/image';
import products from '../../public/products.json'

const latest = products.slice(0, 8);

export default function LatestSection() {
  return (
    <section className="mb-6 md:mb-10">
      <div className="flex items-center justify-between mb-8 ">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary">
          Latest Product
        </h3>
        <button className='btn btn-sm btn-primary'>View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
        {latest.map((product, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/5 bg-white/2 p-4 hover:border-primary/30"
          >
            <Image src={product.imgUrls[0]} alt={product.name} width={300} height={300} className="mb-4 aspect-square rounded-lg object-cover unoptimized" />
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