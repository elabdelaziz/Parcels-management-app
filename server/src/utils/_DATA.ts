import config from "../config";
import bcrypt from "bcrypt";

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

export let parcels = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "123 Main St, Cologne",
    dropoffAddress: "456 Elm St, Cologne",
    status: "Pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "123 Main St, Cologne",
    dropoffAddress: "456 Elm St, Cologne",
    status: "Pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
  },
  {
    id: "8xf0y6ziyjabvozdd253nb",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "123 Main St, Cologne",
    dropoffAddress: "456 Elm St, Cologne",
    status: "Pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
  },
  {
    id: "8xf0y6ziyjabvozdd253dd",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "123 Main St, Cologne",
    dropoffAddress: "456 Elm St, Cologne",
    status: "Pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
  },
  {
    id: "8xf0y6ziyjabvozdd253ss",
    description:
      "dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    pickupAddress: "123 Main St, Cologne",
    dropoffAddress: "456 Elm St, Cologne",
    status: "Pending",
    pickupTimestamp: null,
    deliveryTimestamp: null,
    sender: "sarahedo",
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
  return users.find((user) => user.id === id);
};
