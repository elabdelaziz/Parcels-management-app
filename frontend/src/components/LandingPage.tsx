"use client";

import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";

const LandingPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [loginMode, setLoginMode] = useState(false);
  const [userData] = useLocalStorage("userData", null);

  // to resolve react hydration error
  useEffect(() => {
    setIsClient(true);
  }, []);

  // to ensure that we render next router after the component is mounted
  useEffect(() => {
    if (userData?.id) {
      router.push("/dashboard/");
    }
  }, [userData, router]);

  if (!isClient || userData?.id) {
    return null;
  }

  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center h-[100vh] bg-cover bg-[url('/assets/banner.jpg')]">
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-6xl mb-6 flex justify-center md:justify-normal text-black">
            EXPAND YOUR
            <span className="text-[#8f0000] ml-3 md:ml-4">BUSINESS</span>
          </h1>
          <h2 className="text-sm md:text-2xl flex text-black">
            <span className="text-[#be8d4a] mx-2 font-semibold">Simple</span>
            and
            <span className="text-[#be8d4a] mx-2 font-semibold">fast</span>
            Parcel Shipping Service in cologne
          </h2>
        </div>
        <button
          onClick={() => setLoginMode(true)}
          className="uppercase absolute lg:relative bottom-20 lg:bottom-auto bg-mainBtn font-[500] text-white py-4 px-6 mt-[2rem] rounded w-[200px] lg:mt-0"
        >
          Login Now
        </button>
      </div>
      {loginMode && (
        <LoginModal loginMode={loginMode} setLoginMode={setLoginMode} />
      )}
    </div>
  );
};
export default LandingPage;
