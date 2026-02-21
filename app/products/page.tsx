import React from 'react'
import products from "../../public/products.json"
import ProductCard from '@/components/cards/ProductCard';

function page() {
  return (
    <section className="mb-16">
      <h3 className="mb-8 text-2xl font-bold text-white">
        Latest Product Drops
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default page