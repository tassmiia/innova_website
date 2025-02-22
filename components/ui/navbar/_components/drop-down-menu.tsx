import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrafficConeIcon,
  FanIcon,
  WindIcon,
  Smile,
  Camera,
  FileCheck2,
  Factory,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white pt-20 px-4 absolute top-20 right-0 xl:hidden">
      <Accordion type="single" collapsible>
        <AccordionItem className="my-6 border-b" value="item-1">
          <AccordionTrigger>Products</AccordionTrigger>
          <AccordionContent>
            <Link
              href="/team-alignment"
              className="flex pt-4"
              onClick={handleLinkClick}
            >
              <TrafficConeIcon className="h-6 w-6 mr-4 text-blue-500" /> ATLAS
              COPCO
            </Link>
            <Link
              href="/marutair"
              className="flex pt-4"
              onClick={handleLinkClick}
            >
              <FanIcon className="h-6 w-6 mr-4 text-cyan-500" /> MARUT AIR
            </Link>
            <Link
              href="/airaindia"
              className="flex pt-4"
              onClick={handleLinkClick}
            >
              <WindIcon className="h-6 w-6 mr-4 text-blue-500" /> AIRA INDIA
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="my-6 border-b" value="item-2">
          <AccordionTrigger>Facilities</AccordionTrigger>
          <AccordionContent>
            <Link href="/" className="flex pt-4" onClick={handleLinkClick}>
              <Smile className="h-6 w-6 mr-4 text-indigo-500" /> Customers
            </Link>
            <Link href="/" className="flex pt-4" onClick={handleLinkClick}>
              <Camera className="h-6 w-6 mr-4 text-orange-500" /> Gallery
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className="my-6 border-b" value="item-3">
          <AccordionTrigger>About Innova</AccordionTrigger>
          <AccordionContent>
            <Link href="/" className="flex pt-4" onClick={handleLinkClick}>
              <FileCheck2 className="h-6 w-6 mr-4 text-red-500" /> Dealership
              Certificates
            </Link>
            <Link
              href="/careers"
              className="flex pt-4"
              onClick={handleLinkClick}
            >
              <Factory className="h-6 w-6 mr-4 text-blue-500" /> Industry we
              serve
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Admin Button */}
      <div className="mt-8 flex justify-center hover:text-[#29375d]">
        <Link href="/admin" onClick={handleLinkClick}>
          {/* <Button className="bg-white text-black px-6 py-2 rounded-md"> */}
          Admin Login
          {/* </Button> */}
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
