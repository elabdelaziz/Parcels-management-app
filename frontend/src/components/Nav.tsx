"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import Logout from "./Logout";

const Nav = () => {
  const [userData] = useLocalStorage("userData", null);
  return (
    <nav className="w-full fixed bg-gray-800 top-0 h-[64px] text-white px-5 flex justify-between items-center">
      <p>Parcels Management</p>
      <div className="flex items-center">
        <p className="mr-5">
          Welcome{" "}
          <span className="text-[#be8d4a] font-bold text-4">
            {userData?.name || ""}
          </span>
        </p>
        <button
          className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg 
          text-lg dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700"
        >
          <Logout isSender />
        </button>
      </div>
    </nav>
  );
};
export default Nav;
