"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
  TrafficConeIcon,
  FanIcon,
  WindIcon,
  FileCheck2,
  Factory,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}

const items: MenuItem[] = [
  {
    title: "Products",
    menu: "Products",
    options: [
      {
        label: "ATLAS COPCO",
        emoji: <TrafficConeIcon className="text-blue-500" />,
        href: "/team-alignment",
      },
      {
        label: "MARUT AIR",
        emoji: <FanIcon className="text-cyan-500" />,
        href: "/marutair",
      },
      {
        label: "AIRA INDIA",
        emoji: <WindIcon className="text-blue-500" />,
        href: "/airaindia",
      },
    ],
  },

  {
    title: "Facilities",
    menu: "facilities",
    options: [
      {
        label: "Customers",
        emoji: <Smile className="text-indigo-500" />,
        href: "/",
      },

      {
        label: "Gallery",
        emoji: <Camera className="text-orange-500" />,
        href: "/",
      },
    ],
  },

  {
    title: "About Innova",
    menu: "About Innova",
    options: [
      {
        label: "Dealership Certificates",
        emoji: <FileCheck2 className="text-red-500" />,
        href: "/",
      },
      {
        label: "Industry we serve",
        emoji: <Factory className="text-blue-500" />,
        href: "/careers",
      },
      // {
      //   label: "Newsroom",
      //   emoji: <Newspaper className="text-blue-500" />,
      //   href: "/newsroom",
      // },
    ],
  },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="
         flex
         items-center
         relative
         "
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-24">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="
        hidden
        text-md
        font-light
        space-x-4
        w-full 
        items-center
        xl:flex
        h-24
        
        "
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
