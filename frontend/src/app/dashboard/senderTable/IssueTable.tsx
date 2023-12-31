import { Parcel } from "@/types/dataTypes";
import React from "react";

const IssueTable = ({
  parcels,
  setItemIdToBeDeleted,
}: {
  parcels: Parcel[];
  setItemIdToBeDeleted: (id: string) => void;
}) => {
  const headerList = [
    "description",
    "pickup Address",
    "destination",
    "biker id",
    "status",
    "",
  ];
  return (
    <div className="overflo-x-scroll overflow-y-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            {headerList.map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-3 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {parcels.map((parcel: Parcel) => (
            <tr key={parcel.id} className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="text-sm">
                  <div className="font-medium text-gray-700">
                    {parcel.description}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">{parcel.pickupAddress}</td>
              <td className="px-6 py-4">{parcel.dropoffAddress}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">{parcel.biker}</div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                    parcel.status === "pending"
                      ? "text-stone-600  bg-stone-300"
                      : parcel.status === "delivered"
                      ? "text-green-600  bg-green-50"
                      : "bg-blue-50 text-blue-600"
                  } `}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      parcel.status === "pending"
                        ? "bg-stone-400"
                        : parcel.status === "delivered"
                        ? "bg-green-600"
                        : "bg-blue-600"
                    }`}
                  ></span>
                  {parcel.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <button onClick={() => setItemIdToBeDeleted(parcel.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-red-500"
                      x-tooltip="tooltip"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueTable;
