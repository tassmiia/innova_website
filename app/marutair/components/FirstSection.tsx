"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const products = [
  {
    name: "Atlas Copco Piston Compressor",
    image: "/images/atlaas.webp",
    link: "/product1",
  },
  {
    name: "GX Oil Injected Air Compressor",
    image: "/images/product2.webp",
    link: "/product2",
  },
  {
    name: "Industrial Air Dryer",
    image: "/images/product3.webp",
    link: "/product3",
  },
  {
    name: "Oil-Free Air Compressor",
    image: "/images/product4.webp",
    link: "/product4",
  },
  {
    name: "Rotary Screw Compressor",
    image: "/images/product5.webp",
    link: "/product5",
  },
  {
    name: "Centrifugal Compressor",
    image: "/images/product6.webp",
    link: "/product6",
  },
  {
    name: "Portable Air Compressor",
    image: "/images/product7.webp",
    link: "/product7",
  },
  {
    name: "High-Pressure Air System",
    image: "/images/product8.webp",
    link: "/product8",
  },
];

const ProductListingPage = () => {
  const bannerRef = useRef(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* 🔥 Interactive Banner */}
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          ref={bannerRef}
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-cyan-800 to-blue-700"
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white opacity-20 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 5 + 3
                }s infinite ease-in-out`,
              }}
            ></div>
          ))}
        </div>

        {/* Glitch Text */}
        <h1 className="relative text-5xl md:text-7xl font-bold uppercase tracking-widest animate-pulse">
          Marut Air
        </h1>
      </div>

      {/*  Unique Grid Layout */}
      <div className="px-6 md:px-20 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-100">
          Explore Our Best Products
        </h1>
        <p className="text-lg text-center text-gray-400 mb-12">
          Find the perfect industrial solution with our reliable and
          energy-efficient air systems.
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <Link
              href={product.link}
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="relative bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-4 shadow-2xl overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-blue-500/50">
                {/* Image with Glow */}
                <div className="relative w-full h-56 overflow-hidden rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    className="object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Slide-in Text on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white bg-black bg-opacity-40 transition-all duration-300 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <div className="mt-4 flex justify-end">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Glow Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-xl transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Keyframes for Floating Particles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .glitch {
          position: relative;
          display: inline-block;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: white;
          background: transparent;
          overflow: hidden;
        }
        .glitch::before {
          left: -2px;
          text-shadow: -2px 0 red;
          animation: glitch 0.8s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: 2px;
          text-shadow: 2px 0 blue;
          animation: glitch 0.8s infinite linear alternate;
        }

        @keyframes glitch {
          0% {
            clip-path: inset(0 0 95% 0);
          }
          20% {
            clip-path: inset(10% 0 80% 0);
          }
          40% {
            clip-path: inset(20% 0 60% 0);
          }
          60% {
            clip-path: inset(30% 0 40% 0);
          }
          80% {
            clip-path: inset(40% 0 20% 0);
          }
          100% {
            clip-path: inset(50% 0 10% 0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductListingPage;
