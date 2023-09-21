"use client";

import React from "react";
import SenderTable from "./senderTable";
import useLocalStorage from "@/hooks/useLocalStorage";
import BikerTable from "./bikerTable";
import useGetParcels from "@/hooks/queries/useGetParcels";
import Loading from "@/components/Loading";

export default function Dashboard() {
  const [userData] = useLocalStorage("userData", null);
  const { data: parcels, isLoading, error } = useGetParcels(userData);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {userData?.type === "sender" ? (
        <SenderTable parcels={parcels} />
      ) : (
        <BikerTable parcels={parcels} />
      )}
    </>
  );
}
