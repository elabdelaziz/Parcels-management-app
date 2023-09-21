import Nav from "@/components/Nav";
import { Parcel } from "@/types/dataTypes";

export default function SenderTable({ parcels }: { parcels: Parcel[] }) {
  const headerList = [
    "description",
    "pickup Address",
    "destination",
    "biker",
    "status",
    "",
  ];
  return (
    <>
      <Nav />
      <section className="flex flex-col">
        <button
          type="button"
          className="text-white self-end bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
          text-lg px-5 py-2.5 mr-5 mb-2 mt-[2.5rem] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => {
            // TODO: Add new request
          }}
        >
          Add New Request
        </button>
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
                    {/* bg-orange-200 */}
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                        parcel.status === "pending"
                          ? "text-red-400  bg-red-100"
                          : parcel.status === "delivered"
                          ? "text-green-600  bg-green-50"
                          : "bg-blue-50 text-blue-600"
                      } `}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          parcel.status === "pending"
                            ? "bg-red-400"
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
                      <a x-data="{ tooltip: 'Delete' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </a>
                      <a x-data="{ tooltip: 'Edite' }" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                          x-tooltip="tooltip"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
