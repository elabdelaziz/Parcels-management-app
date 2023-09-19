import instance from "@/utils/axiosInstance";

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  const response = await instance.post("/user/auth", data);
  return response;
};

export const getPendingParcels = async () => {
  const response = await instance.get("/user/pendingParcels");
  return response.data;
};

export const getParcels = async (username: string) => {
  const response = await instance.get(`/user/${username}/parcels`);
  return response.data;
};
