"use client";

import { useState } from "react";
import Nav from "./Nav";
import LoginModal from "./LoginModal";

const AppLayout = () => {
  const [loginMode, setLoginMode] = useState<string | null>(null);
  return (
    <div className="relative">
      <Nav />
      <div className="w-full flex flex-col justify-center relative h-[calc(100vh-64px)] bg-cover bg-[url('/assets/banner.jpg')]">
        <h1 className="text-5xl mb-[1.5rem] flex lg:absolute top-[40%] left-[12%] text-black justify-center items-center">
          EXPAND YOUR <span className="text-[#8f0000] ml-[1rem]">BUSINESS</span>
        </h1>
        <h2 className="text-2xl flex lg:absolute top-[51.5%] left-[12%] text-black items-center justify-center">
          Simple and fast Parcel Shipping Service in cologne
        </h2>
        <button
          onClick={() => setLoginMode("sender")}
          className="uppercase bg-[#8f0000] font-[500] text-white py-4 px-6 rounded w-[200px] self-center mt-[2rem] lg:mt-0 lg:absolute top-[40%] right-[12%]"
        >
          Login as a sender
        </button>
        <button
          onClick={() => setLoginMode("biker")}
          className="uppercase bg-[#04AA6D] font-[500] text-white py-4 px-6 rounded w-[200px] self-center mt-[2rem] lg:mt-0 lg:absolute top-[50%] right-[12%]"
        >
          Login as a biker
        </button>
      </div>
      {loginMode && (
        <LoginModal loginMode={loginMode} setLoginMode={setLoginMode} />
      )}
    </div>
  );
};
export default AppLayout;
