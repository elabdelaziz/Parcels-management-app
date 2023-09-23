import useLocalStorage from "@/hooks/useLocalStorage";
import { deleteItem } from "@/models/senderModels";
import { useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

type DeleteProps = {
  itemIdToBeDeleted: string;
  setItemIdToBeDeleted: Dispatch<SetStateAction<string>>;
};
const DeleteItemConfirmation = ({
  itemIdToBeDeleted,
  setItemIdToBeDeleted,
}: DeleteProps) => {
  const queryClient = useQueryClient();
  const [userData] = useLocalStorage("userData", null);
  const handleDelete = async () => {
    try {
      const response = await deleteItem(itemIdToBeDeleted);
      if (response.status === 200) {
        queryClient.invalidateQueries(["user-parcels", userData?.id]);
      }
      setItemIdToBeDeleted("");
    } catch (err) {
      throw new Error("cannot delete task from database", err as ErrorOptions);
    }
  };
  return (
    <>
      <div
        onClick={() => setItemIdToBeDeleted("")}
        className="fixed z-[3] top-0 left-0 w-full h-full overlay bg-black bg-opacity-[0.5] overflow-hidden"
      ></div>
      <div className="fixed z-[4] top-1/2 left-1/2 translate-x-[-50%] w-[90%] max-w-[35rem] translate-y-[-50%] flex items-center justify-center">
        <div className="rounded-[10px] z-[4] flex flex-col [&>div]:mb-[1rem] [&>div>label]:mb-[0.5rem] p-[1.5rem] bg-white dark:bg-mainDark w-[100%] max-h-[60rem] h-[fit]">
          <h2 className="text-[#ea5555] mb-[1rem] font-[700] text-[18px]">
            Delete This Package?
          </h2>
          <p className="text-[.8125rem] text-[14px] text-[#828fa3] leading-[23px]">
            Are you sure you want to delete this Package? This action cannot be
            reversed.
          </p>
          <div className="flex mt-[1.5rem] !mb-0">
            <button
              onClick={handleDelete}
              className="button mr-[1rem] text-white bg-[#ea5555] flex justify-center w-full h-auto bg-[#635FC7] p-[0.5rem_1rem] rounded-[24px] text-[.9375rem] font-700"
            >
              Delete
            </button>
            <button
              onClick={() => setItemIdToBeDeleted("")}
              className="flex justify-center w-full h-auto bg-[#635FC7] p-[0.5rem_1rem] rounded-[24px] text-[.9375rem] font-700 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteItemConfirmation;
