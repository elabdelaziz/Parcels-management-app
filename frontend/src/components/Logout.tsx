import Link from "next/link";

export default function Logout({ isSender }: { isSender?: boolean }) {
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
  };
  return (
    <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
      <Link
        onClick={handleLogout}
        className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
        href="/"
        tabIndex={0}
      >
        {isSender && (
          <span className="flex items-center mr-2 text-red-500">Logout</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-6 sm:w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}
