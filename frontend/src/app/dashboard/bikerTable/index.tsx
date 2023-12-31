"use client";

import { Parcel } from "@/types/dataTypes";
import Content from "./Content";
import { useState } from "react";
import Nav from "./Nav";
import Logout from "@/components/Logout";
import { BsFillSendCheckFill } from "react-icons/bs";
import { GoPackage } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";

export default function BikerTable({ parcels }: { parcels: Parcel[] }) {
  const [activeComponent, setActiveComponent] = useState("pending");

  const handleNavClick = (component: string) => {
    setActiveComponent(component);
  };
  const navItems = [
    { id: "pending", icon: <MdPendingActions size={26} /> },
    { id: "picked", icon: <GoPackage size={26} /> },
    {
      id: "delivered",
      icon: <BsFillSendCheckFill size={26} />,
    },
  ];
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 min-h-[100vh] sm:min-h-[90vh] flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-8 sm:rounded-2xl">
        <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
          <Nav
            handleNavClick={handleNavClick}
            activeComponent={activeComponent}
            navItems={navItems}
          />
          <Logout />
        </div>
        <Content activeComponent={activeComponent} parcels={parcels} />
      </div>
    </div>
  );
}
