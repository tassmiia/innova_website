import ContactForm from "./components/ContactForm";
import Navbar from "@/components/ui/navbar/navbar";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-beige-100 min-h-screen pt-16">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Left side: illustration & contact info */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start">
          <Image
            src="/images/contact_us.svg"
            alt="Contact Illustration"
            width={400}
            height={300}
          />

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-blue-500" size={18} />
              <p>Mumbai, Maharashtra, India</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-blue-500" size={18} />
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-blue-500" size={18} />
              <p>Innova et @ gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>

        {/* Right side: contact form */}
        <div className="lg:w-1/2 w-full bg-white shadow-md rounded-xl p-6 border border-blue-400">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
