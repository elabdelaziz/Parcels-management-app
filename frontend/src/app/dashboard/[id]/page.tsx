import instance from "@/utils/axiosInstance";
import BikerTable from "../bikerTable";
import SenderTable from "../senderTable";

interface Props {
  params: {
    id: string;
  };
}

const UserDashboard = async ({ params }: Props) => {
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

  console.log(data.userData.type);
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
