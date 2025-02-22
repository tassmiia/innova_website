import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ProductListingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="w-full h-40 bg-gradient-to-br from-blue-900 to-gray-800 shadow-lg flex items-center justify-center top-0 z-20">
        <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide uppercase">
          Atlas Copco
        </h1>
      </div>

      {/* Main Sections */}
      <div className="px-6 md:px-20 py-10 md:py-16">
        <h1 className="text-3xl font-extrabold text-center mb-6">
          What are you looking for?
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Our range of products include Atlas Copco Oil Injected Piston
          Compressors, Atlas Copco GX Oil Injected Air Compressors including Oil
          Free Range
        </p>

        {/* Two Sections Side by Side */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Compressors Section */}
          <Link href="/compressors" className="w-full md:w-1/2">
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-0 pb-[50%]">
                {" "}
                {/* Aspect ratio of 2:1 */}
                <Image
                  src="/images/compressors.webp"
                  alt="Compressors"
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  Air and Gas Compressors
                </h3>
                <p className="text-md mt-2">
                  Discover the right air compressor industrial solution for your
                  applications. Our reliable machines offer low life cycle cost.
                </p>
                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </Link>

          {/* Construction Equipment Section */}
          <Link href="/construction-equipment" className="w-full md:w-1/2">
            <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-0 pb-[50%]">
                {" "}
                {/* Aspect ratio of 2:1 */}
                <Image
                  src="/images/constructionalequipments.webp"
                  alt="Construction Equipment"
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-semibold">
                  Construction Equipments
                </h3>
                <p className="text-md mt-2">
                  Our certified service technicians and high-quality parts
                  provide maximum uptime for your compressed air equipment.
                </p>
                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
