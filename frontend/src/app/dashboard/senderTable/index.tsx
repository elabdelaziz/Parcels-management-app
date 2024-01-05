"use client";

import DeleteItemConfirmation from "@/components/DeleteItemConfirmation";
import Nav from "@/components/Nav";
import { Parcel } from "@/types/dataTypes";
import delay from "delay";
import Link from "next/link";
import { useState } from "react";
import IssueActions from "./IssueActions";
import IssueTable from "./IssueTable";

export default function SenderTable({ parcels }: { parcels: Parcel[] }) {
  const [itemIdToBeDeleted, setItemIdToBeDeleted] = useState("");
  // await delay(2000);
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="flex flex-col mt-16">
        <IssueActions />
        <IssueTable
          parcels={parcels}
          setItemIdToBeDeleted={setItemIdToBeDeleted}
        />
        {itemIdToBeDeleted !== "" && (
          <DeleteItemConfirmation
            itemIdToBeDeleted={itemIdToBeDeleted}
            setItemIdToBeDeleted={setItemIdToBeDeleted}
          />
        )}
      </section>
    </>
  );
}
