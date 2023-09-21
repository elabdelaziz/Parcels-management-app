import { getBikerParcels, updateSingleParcel } from "../utils/_DATA";

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
  async updateParcel(data: { status: string; id: string }) {
    try {
      const parcel = updateSingleParcel(data);
      if (!parcel) {
        throw new Error("user not found");
      }
      return parcel;
    } catch (err) {
      throw new Error(
        `There's a problem retrieving parcels: ${(err as Error).message}`
      );
    }
  }
}
export default BikerStore;
