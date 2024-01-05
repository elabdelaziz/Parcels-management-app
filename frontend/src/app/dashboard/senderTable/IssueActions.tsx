import Link from "next/link";
import React from "react";

const IssueActions = () => {
  return (
    <button
      className="text-white self-end bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
          text-lg px-5 py-2.5 mr-5 mb-2 mt-[2.5rem] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
    >
      <Link href="/create">Add New Request</Link>
    </button>
  );
};

export default IssueActions;
