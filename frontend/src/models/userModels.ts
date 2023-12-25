import instance from "@/utils/axiosInstance";

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  const response = await instance.post("/user/auth", data);
  return response;
};

export const getParcels = async (username: string) => {
  const response = await instance.get(`/user/${username}/parcels`);
  return response.data;
};

export const getUserData = async (username: string) => {
  const response = await instance.get(`/user/${username}`);
  return response.data;
};
