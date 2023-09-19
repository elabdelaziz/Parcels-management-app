import { MdPendingActions } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { BsFillSendCheckFill } from "react-icons/bs";

export default function Nav({
  activeComponent,
  handleNavClick,
}: {
  activeComponent: string;
  handleNavClick: (component: string) => void;
}) {
  return (
    <nav className="">
      <ul className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2 [&>li]:cursor-pointer">
        <li
          className={`${
            activeComponent === "pending" ? "bg-gray-800" : ""
          } text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover`}
          onClick={() => handleNavClick("pending")}
        >
          <MdPendingActions size={26} />
        </li>
        <li
          className={`${
            activeComponent === "picked" ? "bg-gray-800" : ""
          } text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover`}
          onClick={() => handleNavClick("picked")}
        >
          <GoPackage size={26} />
        </li>
        <li
          className={`${
            activeComponent === "delivered" ? "bg-gray-800" : ""
          } text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover`}
          onClick={() => handleNavClick("delivered")}
        >
          <BsFillSendCheckFill size={26} />
        </li>
      </ul>
    </nav>
  );
}
