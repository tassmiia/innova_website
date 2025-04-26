"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="flex items-center md:justify-end md:space-x-6 sm:px-10">
      <div className="flex lg:space-x-4 items-center">
        {/* Contact Us Button */}
        <Link href={"/contactform"}>
          <Button className="hidden md:flex text-md font-light rounded-[10px] border-2 border-indigo-400 py-6 bg-[#7e81de] transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#6a7dff] hover:scale-105">
            Contact Us
          </Button>
        </Link>

        {/* Phone Number Button */}
        <Link href={"/contact"}>
          <Button className="hidden text-[#090a22] text-md font-light bg-[#eff0ff] p-6 rounded-[10px] transition-all duration-300 shadow-md md:hidden lg:flex hover:shadow-lg hover:bg-[#dfe6f9] hover:scale-105">
            +91 4555 XXXXX
          </Button>
        </Link>
      </div>

      {/* Toggle Menu Buttons */}
      {isDropdownVisible ? (
        <div
          onClick={toggleDropdown}
          className="bg-[#565add] p-3 rounded-full xl:hidden"
        >
          <X className="h-6 w-6 text-[#eff0ff]" />
        </div>
      ) : (
        <div
          onClick={toggleDropdown}
          className="bg-[#eff0ff] p-3 rounded-full xl:hidden"
        >
          <AlignJustify className="h-6 w-6 text-[#565add]" />
        </div>
      )}

      {/* Dropdown Menu */}
      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
