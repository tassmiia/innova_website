import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-beige-100 min-h-screen">
      {/* Contact Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Illustration & Contact Info */}
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
              <p>Mumbai, Maharshtra, India</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-blue-500" size={18} />
              <p>+123 456 7890</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-blue-500" size={18} />
              <p>innovaE&Tofficial@gmai</p>
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

        {/* Right: Compact Contact Form */}
        <div className="lg:w-1/2 w-full bg-white shadow-md rounded-xl p-6 border border-blue-400">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full p-3 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            {/* Small, Unique Send Button */}
            <button
              type="submit"
              className="flex items-center gap-2 text-blue-600 font-medium py-2 px-4 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Send <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
