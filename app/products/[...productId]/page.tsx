"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjoElrN18DwfhtPte6rhCLo92e1zHOHQOAsDnjj--BsEsCVU7OzITDwoglpVPWXTBsuiQ1DwBeTt_n-dw3moqkprwY-pZSrsbWR_8YQu-Kif8zcHRkhTpU6HeBelHhENxlp2B7da5rtFXm00FBLU5biOxlI1C7CGyyFo8s2XLxC-OFUyYSX90bugAIg8Mj3yv9Qsvpy0WMtIopydJy1Ok4J57C7-edOEbgZCCqe7oqZqAJqoENjDJupDbrovT_e7NzdLtp5JiKUcI",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmoeanpGo1454p9AxIoCF8Sv7n-JlC-6zJG7J_XxcCy8sTXIli-9uUGWyne7GfImnbQk9QC3hjNjRwfP4sf2x2eWZ1mfu3S5uff49bbarucnb3aqRPcMpovs1EWUreT64w7zBSyOHNHpi4GyV8yFAiN4DpCibp0wM5Ho8woj04auGYiNS2C_igc_e_2icLgafm6fCyBrgryBDq2zuNRFTfVGJ3ZZLwbzGfMGVu8rVz9ZemS036qv46UV97xTkXzgJn6DXFo4wz3Yc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAemWimcRMvw3OLSljxWFDDgZCKBVfMbB22FN4pzk0AVEpB6WF7DtzEFaeeDCxORxBnUbKKZHA3rccoudpwuqbVnUKR8A4JMAuW2zZkM_NzkqW6ENpS1p1T480y6B5z0P2ybOJB7N6YIzzBSKGNqcr97XyIzeodGhfggLmB1K7-nHEmPcnNWggo3r7t1OGNkn7RU870ZwPNzKlkhD8OG8H8Mt_xFGKALK6DxH9SqgnyyRh9UCj77OHozR-KjP_xoNIQU7DQlLxh7Rw",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Left - Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-base-200">
            <Image
              src={images[selectedImage]}
              alt="Elite Audio Pro"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-base-300"
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

        {/* Right - Info */}
        <div className="flex flex-col justify-between">

          <div>
            <div className="badge badge-primary badge-outline mb-4">
              Best Seller
            </div>

            <h1 className="text-4xl font-black mb-2">
              Elite Audio Pro
            </h1>

            <p className="text-base-content/70 mb-6">
              Professional Grade Active Noise-Canceling Wireless Headphones
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="rating rating-sm">
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" />
                <input type="radio" className="mask mask-star bg-primary" defaultChecked />
              </div>
              <span className="font-bold">4.9</span>
              <span className="text-sm text-base-content/60">
                (1,240 Reviews)
              </span>
            </div>

            <div className="text-3xl font-black mb-6">
              $349.00
            </div>

            {/* Color */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Color</p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-black border-2 border-primary"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-400"></button>
                <button className="w-8 h-8 rounded-full bg-gray-400"></button>
              </div>
            </div>

            {/* Fit */}
            <div className="mb-8">
              <p className="font-semibold mb-2">Ear Cushion Fit</p>
              <div className="flex gap-4">
                <button className="btn btn-outline btn-primary">
                  Standard Leather
                </button>
                <button className="btn btn-outline">
                  Velour Comfort
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary flex-1">
              Add to Cart
            </button>
            <button className="btn btn-outline flex-1">
              Buy Now
            </button>
          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" className="tab tab-active">
            Description
          </a>
          <a role="tab" className="tab">
            Specifications
          </a>
          <a role="tab" className="tab">
            Reviews (1,240)
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Studio Sound, Anywhere.
            </h3>

            <p className="mb-4 text-base-content/70">
              Engineered for the discerning audiophile, featuring 50mm
              beryllium-coated drivers with Adaptive Noise Cancellation.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                Hybrid ANC up to 45dB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                LDAC & aptX HD Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                40-Hour Battery Life
              </li>
            </ul>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_X2kRMpMlmDo8zufPNcqutbU5pOUi20ttG6upJT_QDtAyGWGr4GpVF9WzxfgXsteB8qjrm05Y5_6AyyRL3zS1p5GDJdzXrjZ5ZzWLw7ccVriqyywqzboT6GV0F3DMWc3xZOIG-L0grExaiEh5m4DhWLej2afZhMWmYBwGDRDtnNXXwLhNMJVEeV_SIwdPBYInaPZ-yl41-gZ3NuQ0Sjek9aOqKy2vTiblp2qU1XdCbOphHmJBMTKXSUJdadrIjuo8M-x7nBx00xg"
              alt="Studio usage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}