import React from 'react'
import products from "../../public/products.json"
import Image from 'next/image'
function page() {
  return (
    <section className="mb-16">
      <h3 className="mb-8 text-2xl font-bold text-white">
        Latest Product Drops
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/5 bg-white/2 p-4 hover:border-primary/30"
          >
            <Image src={product.imgUrls[0]} alt={product.name} width={300} height={300} className="mb-4 aspect-square rounded-lg object-cover unoptimized" />
            <h4 className="mb-2 text-lg font-bold text-white">
              {product.name}
            </h4>
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page