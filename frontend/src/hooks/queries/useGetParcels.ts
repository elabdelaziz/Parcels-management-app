// import { getBikerParcels } from "@/models/bikerModels";
// import { getSenderParcels } from "@/models/senderModels";
import { useQuery } from "@tanstack/react-query";

const useGetParcels = (userData: any) => {
  // return useQuery(
  //   ["user-parcels", userData?.id],
  //   async () => {
  //     let res;
  //     if (userData.type === "biker") {
  //       res = await getBikerParcels(userData.id);
  //     } else if (userData?.type === "sender") {
  //       res = await getSenderParcels(userData.id);
  //     }
  //     const parcels = res.data.parcels;
  //     return parcels;
  //   },
  //   {
  //     staleTime: 1000 * 60 * 100,
  //     enabled: userData.id.length > 0,
  //   }
  // );
};

export default useGetParcels;
