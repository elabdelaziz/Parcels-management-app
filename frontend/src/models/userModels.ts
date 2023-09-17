import instance from "@/utils/axiosInstance";

export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  const response = await instance.post("/user/auth", data);
  return response;
};
