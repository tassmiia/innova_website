import Image from "next/image";
import Navbar from "@/components/ui/navbar/navbar";

const ConstructionEquipmentPage = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Oil-Injected Rotary Screw Compressor",
      image: "/images/atlas.jpg",
      description:
        "High efficiency, durable, and designed for continuous industrial use. Suitable for a wide range of applications. Provides energy-saving features. Easy to maintain with advanced technology. Ideal for industries requiring continuous operation.",
    },
    {
      id: 2,
      name: "Oil-Free Air Compressor",
      image: "/images/atlas.jpg",
      description:
        "Delivers 100% clean, oil-free air for sensitive applications. Ideal for medical, pharmaceutical, and food-grade uses. Prevents contamination in critical environments. Energy-efficient design for lower operational costs. Robust and reliable in various industrial sectors.",
    },
    {
      id: 3,
      name: "Portable Air Compressor",
      image: "/images/atlas.jpg",
      description:
        "Compact and mobile, ideal for on-the-go operations and fieldwork. Perfect for small projects and outdoor use. Equipped with durable components for heavy-duty tasks. Quick and easy setup for efficiency in the field. Lightweight and easy to transport.",
    },
    {
      id: 4,
      name: "Industrial Air Compressor",
      image: "/images/atlas.jpg",
      description:
        "Heavy-duty performance for large-scale manufacturing and automation. Designed for continuous high-pressure air supply. Advanced cooling systems for long-lasting use. Ideal for large-scale industrial settings. Provides powerful airflow with minimal maintenance.",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] flex items-center justify-center bg-black">
        <Image
          src="/images/constructionalequipments.webp"
          alt="Compressors"
          layout="fill"
          objectFit="cover"
          className="opacity-60"
        />
        <h2 className="absolute text-white text-5xl md:text-7xl font-bold tracking-wider animate-typing">
          Constructional Equipments
        </h2>
      </div>

      {/* Product Showcase Section */}
      <div className="px-6 md:px-20 py-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Top Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all group-hover:scale-105 transform">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-gray-700 rounded-b-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">
                  {product.description.split(". ").slice(0, 5).join(". ") + "."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionEquipmentPage;
