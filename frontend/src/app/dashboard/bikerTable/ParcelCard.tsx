import Toast from "@/components/Toast";
import { Parcel } from "@/types/dataTypes";
import { useEffect, useRef, useState } from "react";

export default function ParcelCard({
  parcel,
  options,
  handleOptionSelection,
}: {
  parcel: Parcel;
  options: string[];
  handleOptionSelection: (option: string) => void;
}) {
  const [DropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // listen for clicks outside of the dropdown
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (
        DropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [DropdownOpen]);

  return (
    <div
      key={parcel.id}
      className="relative group bg-gray-900 py-4 sm:h-fit min-h-[14rem] px-4 flex flex-col justify-between space-y-2 items-center rounded-md hover:bg-gray-900/80 hover:smooth-hover"
    >
      {DropdownOpen && (
        <div className="absolute inset-0 bg-black z-20 opacity-[0.9] hover:opacity-100 transition-opacity duration-600"></div>
      )}
      <p className="text-white/70 mt-[0.5rem] inline-flex self-start text-xs">
        Sent By:{" "}
        <span className="text-white bold ml-[5px]">{parcel.sender}</span>
      </p>
      <p className="flex !m-auto text-white/50">
        Destination: {parcel.dropoffAddress}
      </p>
      <div className="absolute z-[30] !mt-0 top-[1rem] mt-0 right-[1rem]">
        <div className="relative" ref={dropdownRef}>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 p-4 font-medium rounded-full text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setDropdownOpen(!DropdownOpen)}
          >
            <svg
              className="w-2.5 h-2.5 absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            className={`${
              DropdownOpen ? "block" : "hidden"
            } z-10 bg-white absolute right-0 top-[3rem] divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {options.map((option) => (
                <li onClick={() => handleOptionSelection(option)} key={option}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
