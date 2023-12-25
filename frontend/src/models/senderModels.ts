import { FormData } from "@/types/dataTypes";
import instance from "@/utils/axiosInstance";

export const createNewRequest = async (data: FormData) => {
  const response = await instance.post(`/sender/parcels`, data);
  return response;
};

export const deleteItem = async (id: string) => {
  const response = await instance.delete(`/sender/parcels/${id}`);
  return response;
};
