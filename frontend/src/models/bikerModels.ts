import instance from "@/utils/axiosInstance";

export const getBikerParcels = async (username: string) => {
  const response = await instance.get(`/biker/${username}/parcels`);
  return response.data;
};

export const updateParcel = async (data: { status: string; id: string }) => {
  const response = await instance.patch(`/biker/parcels`, data);
  return response;
};

