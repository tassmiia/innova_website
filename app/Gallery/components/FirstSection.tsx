"use client";

import Image from "next/image";

const images = [
  {
    id: 1,
    src: "https://marutair.com/images/product1.jpg",
    alt: "Marut Air Product 1",
  },
  {
    id: 2,
    src: "https://marutair.com/images/product2.jpg",
    alt: "Marut Air Product 2",
  },
  {
    id: 3,
    src: "https://marutair.com/images/product3.jpg",
    alt: "Marut Air Product 3",
  },
  {
    id: 4,
    src: "https://marutair.com/images/product4.jpg",
    alt: "Marut Air Product 4",
  },
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Installed Marut Air Products Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map(({ id, src, alt }) => (
          <div key={id} className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={src}
              alt={alt}
              width={400}
              height={400} // square images
              className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
