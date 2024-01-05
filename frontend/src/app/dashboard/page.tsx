import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import BikerTable from "./bikerTable";
import SenderTable from "./senderTable";

const UserDashboard = async () => {
  const cookieStore = cookies();
  const userToken = cookieStore.get("token");

  if (!userToken) {
    redirect("/");
  }

  const response = await fetch(`http://localhost:5000/user/me`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${userToken.value}`,
    },
    next: {
      tags: ["all-parcels"],
    },
  });
  const data = await response.json();

  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.userData.type === "sender" ? (
        <SenderTable parcels={data?.userData?.parcels} />
      ) : (
        <BikerTable parcels={data?.userData?.parcels} />
      )}
    </>
  );
};

export default UserDashboard;
