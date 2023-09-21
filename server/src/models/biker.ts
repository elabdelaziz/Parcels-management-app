import { getBikerParcels } from "../utils/_DATA";

class BikerStore {
  async getBikerParcels(username: string) {
    try {
      const parcels = getBikerParcels(username);
      if (!parcels) {
        throw new Error("user not found");
      }
      return parcels;
    } catch (err) {
      throw new Error(
        `There's a problem retrieving parcels: ${(err as Error).message}`
      );
    }
  }
}
export default BikerStore;
