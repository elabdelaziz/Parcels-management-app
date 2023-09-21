import instance from "@/utils/axiosInstance";

export const getBikerParcels = async (username: string) => {
  const response = await instance.get(`/biker/${username}/parcels`);
  return response.data;
};
