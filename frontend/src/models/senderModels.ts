import instance from "@/utils/axiosInstance";

export const getSenderParcels = async (username: string) => {
  const response = await instance.get(`/sender/${username}/parcels`);
  return response.data;
};
