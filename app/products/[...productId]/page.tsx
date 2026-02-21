"use client";

import Image from "next/image";
import { useState } from "react";
import products from "../../../public/products.json";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductDetails() {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const params = useParams();
  const productId = Array.isArray(params.productId) ? params.productId[0] : params.productId;
  const product = products.find(p => p.id === parseInt(productId as string));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const specifications = Object.entries(product.specification || {});

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left - Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-base-200">
            <Image
              src={product.imgUrls[selectedImage] || product.imgUrls[0]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-4">
            {product.imgUrls.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 ${
                  selectedImage === index ? "border-primary" : "border-base-300"
                }`}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="badge badge-primary badge-outline mb-4">
              Best Seller
            </div>

            <h1 className="text-4xl font-black mb-2">{product.name}</h1>

            <p className="text-base-content/70 mb-6">{product.subtitle}</p>

            <div className="flex items-center gap-2 mb-6">
              <div className="rating rating-sm">
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" />
                <input
                  type="radio"
                  className="mask mask-star bg-primary"
                  defaultChecked
                />
              </div>
              <span className="font-bold">4.9</span>
              <span className="text-sm text-base-content/60">
                (1,240 Reviews)
              </span>
            </div>

            <div className="text-3xl font-black mb-6">${product.price}</div>

            {/* Description Summary */}
            <div className="mb-6">
              <p className="text-base-content/70">{product.description}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => addToCart(product)} className="btn btn-primary flex-1">Add to Cart</button>
            <button className="btn btn-outline flex-1">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="product_tabs"
            role="tab"
            className="tab"
            aria-label="Description"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content py-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="mb-4 text-base-content/70">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✔</span> High Quality Design
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✔</span> Premium Performance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✔</span> 1 Year Warranty
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-base-200">
                <Image
                  src={product.imgUrls[0]}
                  alt="Product context"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="product_tabs"
            role="tab"
            className="tab"
            aria-label="Specifications"
          />
          <div role="tabpanel" className="tab-content py-10">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  {specifications.map(([key, value]) => (
                    <tr key={key}>
                      <td className="font-bold capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </td>
                      <td>{value as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <input
            type="radio"
            name="product_tabs"
            role="tab"
            className="tab"
            aria-label="Reviews (1,240)"
          />
          <div role="tabpanel" className="tab-content py-10">
            <p className="text-center text-base-content/60 italic">
              Reviews coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
