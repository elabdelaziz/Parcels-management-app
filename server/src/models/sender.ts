import { createParcel, getSenderParcels } from "../utils/_DATA";

class SenderStore {
  async getSenderParcels(username: string) {
    try {
      const parcels = getSenderParcels(username);
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
  async createNewRequest(data: {
    pickupAddress: string;
    description: string;
    dropoffAddress: string;
    sender: string;
  }) {
    try {
      const parcel = createParcel(data);
      return parcel;
    } catch (err) {
      throw new Error(
        `There's a problem creating request: ${(err as Error).message}`
      );
    }
  }
}
export default SenderStore;
