import { getParcels, getPendingParcels } from "@/models/userModels";
import { useQuery } from "@tanstack/react-query";

const useGetPendingParcels = (type: string) => {
  return useQuery(
    ["pending-parcels", type],
    async () => {
      const res = await getPendingParcels();

      console.log(res);

      if (!res) {
        return null;
      }
      return res.data;
    },
    {
      staleTime: 1000 * 60 * 100,
      enabled: type === "biker",
    }
  );
};

export default useGetPendingParcels;
