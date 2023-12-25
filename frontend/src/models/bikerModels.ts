import instance from "@/utils/axiosInstance";

export const updateParcel = async (data: { status: string; id: string }) => {
  const response = await instance.patch(`/biker/parcels`, data);
  return response;
};

export const pickParcel = async (data: {
  userId: string;
  id: string;
  pickupTimestamp: string;
  deliveryTimestamp: string;
}) => {
  const response = await instance.post(`/biker/parcels`, data);
  return response;
};

