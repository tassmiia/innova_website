"use client"; // Ensure it's a client-side component

import { useState, useEffect } from "react";

const Footer = () => {
  // Visibility state for smooth reveal animation
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer
      className={`bg-gradient-to-r from-[#787ed8] via-[#e0e0e0] to-[#ffffff] text-[#333333] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } py-16 px-8`}
    >
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div>
            <h4 className="text-2xl font-semibold text-[#2b1c50] mb-4 tracking-wide uppercase">
              About Us
            </h4>
            <p className="text-black-600">
              We offer high-quality industrial tools built to improve your
              workflow. Our products combine advanced technology and durability,
              ensuring the best performance.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-[#2b1c50] mb-4 tracking-wide uppercase">
              Contact Us
            </h4>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> Innova E&T @company.com
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +91 XX12343434
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> Mumbai, Maharashtra, India
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-[#2b1c50] mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#007bff] transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#007bff] transition-all duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#007bff] transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#007bff] transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4S mt-10">
        <p className="text-center text-gray-600 text-lg">
          © 2024 Innova E&T. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
