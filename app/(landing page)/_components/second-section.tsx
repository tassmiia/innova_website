"use client";

import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Actuator",
    image: "/images/Landing Page Products/actuator.webp",
  },
  {
    id: 2,
    name: "Micro Filters",
    image: "/images/Landing Page Products/micro-filters.jpg",
  },
  {
    id: 3,
    name: "Oil Injected Air Compressor",
    image: "/images/Landing Page Products/oil-injected-air-compressor.jpg",
  },
  {
    id: 4,
    name: "Refrigerated Air Dryer",
    image: "/images/Landing Page Products/refrigerated-air-dryer.jpg",
  },
  {
    id: 5,
    name: "Breakers",
    image: "/images/Landing Page Products/breakers.jpeg",
  },
  {
    id: 6,
    name: "Dust Collector Solenoid Valve",
    image: "/images/Landing Page Products/Dust-Collector-Solenoid-Valve.webp",
  },
];

const SecondSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // For keeping track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className={`relative py-16 px-8 bg-gradient-to-r from-[#5047f7] via-[#cabee8] to-[#cdccd0] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-16 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2b1c50] mb-4 leading-tight tracking-wide">
          We specialize in products from the categories below.
        </h2>
      </div>

      {/* Modern Carousel */}
      <div className="relative">
        {/* Product Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 25}%)`, // Move by 25% per product
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 group min-w-[calc(25%-2rem)] mx-4 border border-transparent group-hover:border-gray-300 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-opacity duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  {/* Product Title */}
                  <h4 className="text-lg font-semibold text-[#2b1c50] mb-4">
                    {product.name}
                  </h4>

                  {/* View Details Button */}
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-md transition-all duration-300 hover:bg-indigo-500">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-500 z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-500 z-10"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default SecondSection;
