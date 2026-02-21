"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import { useCart } from "@/context/CartContext";

function ProductCard({
  product,
}: {
  product: {
    id: number;
    name: string;
    price: number;
    imgUrls: Array<string>;
  };
}) {
  const { addToCart } = useCart();

  return (
    <div
      key={product.id}
      className="rounded-xl border border-white/5 bg-white/2 p-4 hover:border-primary/30 flex flex-col"
    >
      <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
        <Image
          src={product.imgUrls[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-110"
        />
      </div>
      <h4 className="mb-2 text-lg font-bold text-primary line-clamp-1">{product.name}</h4>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xl font-bold text-white">${product.price}</span>
        <button 
          onClick={() => addToCart(product)}
          className="btn btn-circle btn-ghost btn-sm text-xl cursor-pointer hover:bg-primary hover:text-white transition-all"
          title="Add to Cart"
        >
          <BsFillBagPlusFill />
        </button>
      </div>
      <Link
        href={`/products/${product.id}`}
        className="btn btn-sm btn-primary mt-4 w-full"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
