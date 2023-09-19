import { getParcels } from "@/models/userModels";
import { useQuery } from "@tanstack/react-query";

const useGetParcels = (id: string) => {
  return useQuery(
    ["user-parcels", id],
    async () => {
      const data = await getParcels(id);

      if (!data) {
        return null;
      }
      return data.data.parcels;
    },
    {
      staleTime: 1000 * 60 * 100,
      enabled: id?.length > 0,
    }
  );
};

export default useGetParcels;
