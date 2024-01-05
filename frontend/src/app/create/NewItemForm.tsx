"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { createNewRequest } from "@/models/senderModels";
import { FormData } from "@/types/dataTypes";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const NewItemForm = async () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const [userData] = useLocalStorage("userData", null);

  const onSubmit = async (data: FormData) => {
    data.sender = userData.id;
    const res = await createNewRequest(data);

    if (res.status === 200) {
      router.push("/dashboard");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-[2rem] pt-[6rem] pb-[2rem] h-[100vh] flex flex-col justify-between"
    >
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description<span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          {...register("description", { required: "description is required" })}
        ></textarea>
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
        <div className="grid md:grid-cols-2 md:gap-6 mt-12">
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              id="pickup"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("pickupAddress", { required: "pickup is required" })}
            />
            <label
              htmlFor="pickup"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pickup Address<span className="text-red-500">*</span>
            </label>
            {errors.pickupAddress && (
              <span className="text-red-500">
                {errors.pickupAddress.message}
              </span>
            )}
          </div>
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              id="dropoff"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("dropoffAddress", {
                required: "dropoff is required",
              })}
            />
            <label
              htmlFor="dropoff"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Dropoff Address<span className="text-red-500">*</span>
            </label>
            {errors.dropoffAddress && (
              <span className="text-red-500">
                {errors.dropoffAddress.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto lg:w-[30rem] lg:self-center px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </form>
  );
};

export default NewItemForm;
