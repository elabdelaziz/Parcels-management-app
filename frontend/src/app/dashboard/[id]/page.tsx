import BikerTable from "../bikerTable";
import SenderTable from "../senderTable";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}

const UserDashboard = async ({ params }: Props) => {
  const cookieStore = cookies();
  const userToken = cookieStore.get("token");

  if (!userToken) {
    redirect("/");
  }

  const response = await fetch(`http://localhost:5000/user/${params.id}/`, {
    cache: "no-store",
    next: {
      tags: ["all-parcels"],
    },
  });
  const data = await response.json();

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
