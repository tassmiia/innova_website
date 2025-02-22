"use client";

import React from "react";

const InstalledSolutions: React.FC = () => {
  const solutions = [
    { id: 1, image: "/images/atlaas.webp", colSpan: 2, rowSpan: 1 },
    { id: 2, image: "/images/atlas3.webp", colSpan: 1, rowSpan: 2 },
    { id: 3, image: "/images/atlas.jpg", colSpan: 1, rowSpan: 1 },
    { id: 4, image: "/images/machine 3.webp", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Installed Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Live installations demonstrating the power and reliability of our
            products.
          </p>
          <a
            href="#"
            className="text-indigo-600 text-lg font-medium hover:underline"
          >
            Explore our gallery
          </a>
        </div>

        {/* Right Asymmetric Image Grid Section */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 items-center relative">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`relative bg-gray-200 rounded-lg overflow-hidden ${
                solution.colSpan ? `col-span-${solution.colSpan}` : ""
              } ${solution.rowSpan ? `row-span-${solution.rowSpan}` : ""}`}
            >
              <img
                src={solution.image}
                alt={`Solution ${solution.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstalledSolutions;
