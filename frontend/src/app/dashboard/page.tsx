"use client";

import React from "react";
import SenderTable from "./senderTable";
import useLocalStorage from "@/hooks/useLocalStorage";
import BikerTable from "./bikerTable";
import useGetParcels from "@/hooks/queries/useGetParcels";

export default function Dashboard() {
  const [userData] = useLocalStorage("userData", null);
  const { data: parcels } = useGetParcels(userData?.id);

  return (
    <div>
      {userData?.type === "sender" ? (
        <SenderTable parcels={parcels} />
      ) : (
        <BikerTable userData={userData} parcels={parcels} />
      )}
    </div>
  );
}
