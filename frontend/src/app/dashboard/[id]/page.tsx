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
        <SenderTable parcels={data.userData} />
      ) : (
        <BikerTable parcels={data.userData} />
      )}
    </>
  );
};

export default UserDashboard;
