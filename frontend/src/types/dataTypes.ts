export interface User {
  id: string;
  name: string;
  type: string;
}

export interface Parcel {
  id: number;
  name: string;
  description: string;
  pickupAddress: string;
  dropoffAddress: string;
  parcels: {}[];
  biker: string;
  status: string;
  sender: string;
}
