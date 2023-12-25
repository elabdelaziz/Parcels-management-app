"use client";

import { useState } from "react";
import LoginModal from "./LoginModal";

const LandingPage = () => {
  const [loginMode, setLoginMode] = useState(false);
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center h-[100vh] bg-cover bg-[url('/assets/banner.jpg')]">
        <div>
          <h1 className="text-5xl mb-[1.5rem] flex text-black">
            EXPAND YOUR{" "}
            <span className="text-[#8f0000] ml-[1rem]">BUSINESS</span>
          </h1>
          <h2 className="text-2xl flex text-black">
            Simple and fast Parcel Shipping Service in cologne
          </h2>
        </div>
        <button
          onClick={() => setLoginMode(true)}
          className="uppercase bg-[#8f0000] font-[500] text-white py-4 px-6 mt-[2rem] rounded w-[200px] lg:mt-0"
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
