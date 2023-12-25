"use server";

import { revalidateTag } from "next/cache";

interface Data {
  status: string;
  id: string;
  userId: string;
}
export const updateParcelStatus = async (formData: {
  status: string;
  id: string;
  userId: string;
}) => {
  const status = formData.status;
  const id = formData.id;
  const userId = formData.userId;

  if (!status || !id || !userId) return;

  const rawFormData: Data = {
    status,
    id,
    userId,
  };

  await fetch("http://localhost:5000/biker/parcels", {
    method: "PATCH",
    body: JSON.stringify(rawFormData),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["all-parcels"],
    },
  });
  revalidateTag("all-parcels");
};
