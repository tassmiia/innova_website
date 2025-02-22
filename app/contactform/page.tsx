import ContactForm from "./components/ContactForm"; // Import ContactForm
import Navbar from "@/components/ui/navbar/navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Centered Contact Form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
