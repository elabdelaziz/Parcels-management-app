import { FormData } from "@/types/dataTypes";
import instance from "@/utils/axiosInstance";

export const getSenderParcels = async (username: string) => {
  const response = await instance.get(`/sender/${username}/parcels`);
  return response.data;
};
export const createNewRequest = async (data: FormData) => {
  const response = await instance.post(`/sender/parcels`, data);
  return response;
};
