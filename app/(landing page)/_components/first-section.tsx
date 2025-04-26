"use client"; // Ensure it's a client-side component

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const images = [
  "/images/atlaas.webp",
  "/images/atlas3.webp",
  "/images/atlas.jpg",
  "/images/machine 3.webp",
];

const workflowSteps = [
  {
    title: "Step 1: Initial Consultation",
    description: "Discuss your needs and objectives with our team.",
    illustration: "/images/consultation.svg",
  },
  {
    title: "Step 2: Planning",
    description: "We create a customized plan to meet your requirements.",
    illustration: "/images/planning.svg",
  },
  {
    title: "Step 3: Execution",
    description: "Our team implements the plan to ensure smooth execution.",
    illustration: "/images/execution.svg",
  },
  {
    title: "Step 4: Review & Feedback",
    description: "We review the outcomes and gather your feedback.",
    illustration: "/images/Feedback.svg",
  },
];

const logos = [
  "/images/indiamart-logo.png",
  "/images/marut air.png",
  "/images/atlas logo.png",
  "/images/aira.png",
];

const TrustedPartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-10 bg-[#fdfdfd] flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-10"
    >
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-[#2b1c50] mb-4">
          Trusted Partners We Work With
        </h2>
        <h4 className="text-gray-700 mt-2 leading-relaxed">
          We collaborate with <strong>industry-leading partners</strong> to
          ensure the <strong>highest quality and reliability</strong> in every
          project.
          <br />
          <br />
          Experience the difference that our dedicated partnerships bring to
          your business—<strong>partner with us today!</strong>
        </h4>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6 lg:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`logo-wrapper transition-none duration-300 flex justify-center items-center ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 1.2}s` }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const FirstSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`relative xl:py-24 py-16 px-10 bg-[#fdfdfd] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col items-center z-10">
        <h1 className="lg:text-6xl xl:text-6xl text-5xl font-extrabold text-[#2b1c50] text-center mt-10">
          Your Partner in Industrial Efficiency
        </h1>

        <p className="text-2xl xl:text-3xl font-light text-[#3d2e7c] xl:w-2/3 lg:pt-4 pt-2 text-center">
          From tools to solutions, we’ve got it all to boost your business!
        </p>

        <div className="flex gap-6 py-6">
          <Link href={"/contactform"}>
            <Button
              className="
                xl:text-1xl text-small font-light
                rounded-[10px] border-2 border-indigo-500
                py-6 px-12 xl:py-1 xl:px-8
                transition-all duration-300 shadow-lg
                bg-indigo-100 text-indigo-700
                hover:bg-indigo-400 hover:scale-105
              "
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Spacer to push the carousel down */}
        <div className="mt-12 w-full"></div>

        {/* Infinite Image Carousel */}
        <div className="carousel-container w-full h-[50vh] overflow-hidden mt-8">
          <div className="carousel-track flex">
            {images.map((img, index) => (
              <div key={index} className="min-w-[25%] h-full relative">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="rounded-[10px] w-full h-full object-cover filter grayscale transition duration-300"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
              </div>
            ))}
            {images.map((img, index) => (
              <div
                key={`copy-${index}`}
                className="min-w-[25%] h-full relative"
              >
                <img
                  src={img}
                  alt={`Copy Slide ${index + 1}`}
                  className="rounded-[10px] w-full h-full object-cover filter grayscale transition duration-300"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Section */}
        <section className="py-16 px-10 bg-[#fdfdfd]">
          <h2 className="text-5xl font-bold text-[#2b1c50] text-center mb-10">
            Our Workflow Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between relative rounded-lg border overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-[#e0f2ff] border-[#007bff]"
                style={{ padding: "20px" }}
              >
                <img
                  src={step.illustration}
                  alt={step.title}
                  className="w-40 h-40 object-cover mb-4"
                />
                <div className="text-center p-2">
                  <h3 className="text-xl font-semibold text-[#13263b]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trusted Dealer Section */}
        <TrustedPartnersSection />
      </div>
    </section>
  );
};

export default FirstSection;
