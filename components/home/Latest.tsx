import products from '../../public/products.json'
import ProductCard from '../cards/ProductCard';

const latest = products.slice(0, 6);

export default function LatestSection() {
  return (
    <section className="mx-5 md:mx-10">
      <div className="flex items-center justify-between mb-8 ">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary">
          Latest Product
        </h3>
        <button className='btn btn-sm btn-primary'>View All</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3">
        {latest.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}