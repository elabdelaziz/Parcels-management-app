import { Parcel } from "@/types/dataTypes";
import ParcelCard from "./ParcelCard";
import { updateParcel } from "@/models/bikerModels";

export default function Content({
  activeComponent,
  parcels,
}: {
  activeComponent: string;
  parcels: Parcel[];
}) {
  const dropDownList = ["pending", "picked", "delivered"];
  const handleUpdateParcel = async (data: { status: string; id: string }) => {
    try {
      await updateParcel(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex-1 px-2 sm:px-0">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white/50">
          {activeComponent}
        </h3>
      </div>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {parcels
          .filter((parcel: Parcel) => parcel.status === activeComponent)
          .map((parcel: Parcel) => (
            <ParcelCard
              key={parcel.id}
              parcel={parcel}
              options={dropDownList}
              handleUpdateParcel={handleUpdateParcel}
            />
          ))}
      </div>
    </div>
  );
}
