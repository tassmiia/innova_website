import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import Footer from "./_components/footer";
import InstalledSolutions from "./_components/InstalledSolutions";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <InstalledSolutions />
      <Footer />
    </div>
  );
};

export default LandingPage;
