"use server";
import { revalidateTag } from "next/cache";

export const bikerUpdateParcelStatusAction = async (formData: {
  status: string;
  id: string;
  userId: string;
}) => {
  const { status, id, userId } = formData;
  if (!status || !id || !userId) return;

  await fetch("http://localhost:5000/biker/parcels", {
    method: "PATCH",
    body: JSON.stringify({
      status,
      id,
      userId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["all-parcels"],
    },
  });

  revalidateTag("all-parcels");
};
export const bikerMoveToPickedAction = async (requestData: {
  userId: string;
  id: string;
  pickupTimestamp: string;
  deliveryTimestamp: string;
}) => {
  const { userId, id, pickupTimestamp, deliveryTimestamp } = requestData;
  if (!pickupTimestamp || !deliveryTimestamp || !id || !userId) return;

  await fetch("http://localhost:5000/biker/parcels", {
    method: "POST",
    body: JSON.stringify({
      userId,
      id,
      pickupTimestamp,
      deliveryTimestamp,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["all-parcels"],
    },
  });
  revalidateTag("all-parcels");
};
