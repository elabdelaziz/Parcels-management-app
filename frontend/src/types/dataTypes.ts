export interface User {
  id: string;
  name: string;
  type: string;
}

export interface Parcel {
  id: string;
  name: string;
  description: string;
  pickupAddress: string;
  dropoffAddress: string;
  biker: string;
  status: string;
  sender: string;
}

export interface UserData {
  id: string;
  name: string;
  parcels: Parcel[];
  token: string;
  type: string;
}
export interface ParcelGroup {
  picked: Parcel[];
  pending: Parcel[];
  delivered: Parcel[];
}

export interface FormData {
  pickupAddress: string;
  description: string;
  dropoffAddress: string;
  sender: string;
}
