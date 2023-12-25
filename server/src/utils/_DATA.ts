import config from "../config";
import bcrypt from "bcrypt";

interface Parcels {
  id: string;
  description: string;
  pickupAddress: string | null;
  dropoffAddress: string | null;
  status: string;
  pickupTimestamp: string | null;
  deliveryTimestamp: string | null;
  sender: string;
  biker: string | null;
}

export let users = [
  {
    id: "sarahedo",
    name: "Sarah Edo",
    parcels: [
      "8xf0y6ziyjabvozdd253nd",
      "6ni6ok3ym7mf1p33lnez",
      "8xf0y6ziyjabvozdd253nb",
    ],
    password: "",
    type: "sender",
  },
  {
    id: "tyleredo",
    name: "Tyler edo",
    parcels: ["8xf0y6ziyjabvozdd253dd", "8xf0y6ziyjabvozdd253ss"],
    password: "",
    type: "sender",
  },
  {
    id: "johndoe",
    name: "John Doe",
    parcels: [],
    password: "",
    type: "sender",
  },
  {
    id: "bensmith",
    name: "Ben Smith",
    parcels: [],
    password: "",
    type: "sender",
  },
  {
    id: "drake",
    name: "Drake",
    parcels: [],
    password: "",
    type: "sender",
  },
  {
    id: "jackdoe",
    name: "Jack Doe",
    parcels: ["8xf0y6ziyjabvozdd253nd", "6ni6ok3ym7mf1p33lnez"],
    password: "",
    type: "biker",
  },
  {
    id: "kendrickdoe",
    name: "Kendrick Doe",
    parcels: ["8xf0y6ziyjabvozdd253nb", "8xf0y6ziyjabvozdd253dd"],
    password: "",
    type: "biker",
  },
  {
    id: "brandondoe",
    name: "Brandon Doe",
    parcels: ["8xf0y6ziyjabvozdd253ss"],
    password: "",
    type: "biker",
  },
  {
    id: "travis",
    name: "Travis",
    parcels: [],
    password: "",
    type: "biker",
  },
  {
    id: "ali",
    name: "Ali",
    parcels: [],
    password: "",
    type: "biker",
  },
  {
    id: "bob",
    name: "Bob",
    parcels: [],
    password: "",
    type: "biker",
  },
  {
    id: "awad",
    name: "Awad",
    parcels: [],
    password: "",
    type: "biker",
  },
  {
    id: "sayed",
    name: "Sayed",
    parcels: [],
    password: "",
    type: "biker",
  },
  {
    id: "fathy",
    name: "Fathy",
    parcels: [],
    password: "",
    type: "biker",
  },
  {
    id: "nina",
    name: "Nina",
    parcels: [],
    password: "",
    type: "biker",
  },
];

export let parcels: Parcels[] = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    description: "dolor sit amet, consectetur adipiscing elit",
    pickupAddress: "Brooklyn 123",
    dropoffAddress: "Brooklyn 456",
    status: "delivered",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: "jackdoe",
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    description: "dolor sit amet, consectetur adipiscing elit",
    pickupAddress: "Queens 123",
    dropoffAddress: "Queens 456",
    status: "picked",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: "jackdoe",
  },
  {
    id: "8xf0y6ziyjabvozdd253nb",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "123 Main St, Cologne",
    dropoffAddress: "456 Elm St, Cologne",
    status: "picked",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: "kendrickdoe",
  },
  {
    id: "8xf0y6ziyjabvozdd253dd",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "New York 123",
    dropoffAddress: "New York 456",
    status: "picked",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: "kendrickdoe",
  },
  {
    id: "8xf0y6ziyjabvozdd253ss",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "Nivada 123",
    dropoffAddress: "Nivada 456",
    status: "picked",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: "brandondoe",
  },
  {
    id: "8xf0y6ziyjabvozdd253pp",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "Frankfurt 123",
    dropoffAddress: "Frankfurt 456",
    status: "pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: null,
  },
  {
    id: "8xf0y6ziyjabvozdd253yy",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "munchen 123",
    dropoffAddress: "munchen 456",
    status: "pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
    biker: null,
  },
];

const mockPassword = config.generalPassword as string;

// assigning and hashing passwords
const hashPass = (pass: string) => {
  const salt = parseInt(config.salt as string, 10);
  return bcrypt.hashSync(`${pass}${config.pepper}`, salt);
};

const assignMockPasswords = async () => {
  // Assign and hash passwords for senders
  for (const user of users) {
    user.password = hashPass(mockPassword);
  }
};

assignMockPasswords();

export const getUser = (id: string) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return null;
  }

  return {
    ...user,
  };
};

export const getUserParcels = (id: string) => {
  const user = getUser(id);
  if (!user) {
    return null;
  }
  if (user.type === "biker") {
    const bikerParcels = parcels.filter(
      (parcel) => parcel.status === "pending" || parcel.biker === id
    );
    return bikerParcels;
  } else {
    const senderParcels = parcels.filter((parcel) => parcel.sender === id);
    return senderParcels;
  }
};

export const createParcel = (data: {
  pickupAddress: string;
  description: string;
  dropoffAddress: string;
  sender: string;
}) => {
  const { pickupAddress, description, dropoffAddress, sender } = data;
  const parcel: Parcels = {
    id: Math.random().toString(),
    description,
    pickupAddress,
    dropoffAddress,
    status: "pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: sender,
    biker: null,
  };

  parcels.push(parcel);
};

export const updateSingleParcel = (data: {
  status: string;
  id: string;
  userId: string;
}) => {
  const { status, id, userId } = data;
  const parcel = parcels.find((parcel) => parcel.id === id);
  if (!parcel) {
    return null;
  }
  parcel.status = status;

  return parcel;
};

export const pickParcel = (data: {
  userId: string;
  id: string;
  pickupTimestamp: string;
  deliveryTimestamp: string;
}) => {
  const { userId, id, pickupTimestamp, deliveryTimestamp } = data;
  const parcel = parcels.find((parcel) => parcel.id === id);
  if (!parcel) {
    return null;
  }
  if (parcel.biker === null) {
    parcel.biker = userId;
  }
  parcel.status = "picked";
  parcel.pickupTimestamp = pickupTimestamp;
  parcel.deliveryTimestamp = deliveryTimestamp;

  return parcel;
};

export const deleteParcel = (id: string) => {
  const parcel = parcels.find((parcel) => parcel.id === id);
  if (!parcel) {
    return null;
  }
  parcels.splice(parcels.indexOf(parcel), 1);

  return parcel;
};

