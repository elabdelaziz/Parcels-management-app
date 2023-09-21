"use client";

import Logout from "./Logout";

const Nav = () => {
  return (
    <nav className="w-full bg-gray-800 h-[64px] text-white px-5 flex justify-between items-center">
      <p>Parcels Management</p>
      <Logout isSender />
    </nav>
  );
};
export default Nav;
