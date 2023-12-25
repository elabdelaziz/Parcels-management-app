import { Parcel } from "@/types/dataTypes";
import ParcelCard from "./ParcelCard";

export default function Content({
  activeComponent,
  parcels,
}: {
  activeComponent: string;
  parcels: Parcel[];
}) {
  const dropDownList = ["picked", "delivered"];
  return (
    <div className="flex-1 px-2 sm:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white/50">
          {activeComponent}
        </h3>
      </div>
      <div className="mb-10 sm:mb-0 mt-[1.5rem] grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {parcels
          .filter((parcel: Parcel) => parcel.status === activeComponent)
          .map((parcel: Parcel) => (
            <ParcelCard
              key={parcel.id}
              parcel={parcel}
              options={dropDownList}
            />
          ))}
      </div>
    </div>
  );
}
