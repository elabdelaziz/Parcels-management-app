import { Parcel } from "@/types/dataTypes";
import ParcelCard from "./ParcelCard";

export default function Content({
  activeComponent,
  parcels,
  pendingParcels,
}: {
  activeComponent: string;
  parcels: Parcel[];
  pendingParcels: Parcel[];
}) {
  const dropDownList = ["pending", "picked", "delivered"];

  const handleOptionSelection = (option: string) => {
    // TODO: handle option selection
  };
  return (
    <div className="flex-1 px-2 sm:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white/50">
          {activeComponent}
        </h3>
        <div className="inline-flex items-center space-x-2">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </a>
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {activeComponent === "pending" &&
          pendingParcels?.map((parcel: Parcel) => (
            <ParcelCard
              key={parcel.id}
              parcel={parcel}
              options={dropDownList}
              handleOptionSelection={handleOptionSelection}
            />
          ))}
        {activeComponent !== "pending" &&
          parcels
            .filter((parcel: Parcel) => parcel.status === activeComponent)
            .map((parcel: Parcel) => (
              <ParcelCard
                key={parcel.id}
                parcel={parcel}
                options={dropDownList}
                handleOptionSelection={handleOptionSelection}
              />
            ))}
      </div>
    </div>
  );
}
