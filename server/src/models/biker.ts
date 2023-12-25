import { pickParcel, updateSingleParcel } from "../utils/_DATA";

class BikerStore {
  async updateParcel(data: { status: string; id: string; userId: string }) {
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
  async pickParcel(data: {
    userId: string;
    id: string;
    pickupTimestamp: string;
    deliveryTimestamp: string;
  }) {
    try {
      const parcel = pickParcel(data);
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
