"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/Input.module.css";

const LoginModal = ({
  loginMode,
  setLoginMode,
}: {
  setLoginMode: Dispatch<SetStateAction<string | null>>;
  loginMode: string | null;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div
        onClick={() => setLoginMode(null)}
        className="absolute top-0 z-[3] overlay w-[100vw] h-[100vh] bg-black bg-opacity-[0.5]"
      ></div>
      <div className="absolute top-0 flex items-center justify-center w-[100vw] h-[100vh]">
        <div className="rounded-[10px] z-[4] flex flex-col [&>div]:mb-[1rem] [&>div>label]:mb-[0.5rem] p-[2rem] bg-white w-[100%] max-w-[30rem] max-h-[60rem] h-[fit]">
          <form>
            <div className="mb-10">
              <h2 className="mt-6 text-center text-3xl font-bold">
                Login as {loginMode}
              </h2>
            </div>
            <div className={styles.inputContainer}>
              <input
                id="username"
                placeholder="Username"
                onFocus={(event) => (event.target.placeholder = "")}
                className={styles.inputField}
                type="text"
              />
              <label htmlFor="username" className={styles.inputLabel}>
                Username
              </label>
              <span className={styles.inputHighlight}></span>
            </div>
            <div className={styles.inputContainer}>
              <input
                id="password"
                placeholder="password"
                onFocus={(event) => (event.target.placeholder = "")}
                className={styles.inputField}
                type="password"
              />
              <label htmlFor="password" className={styles.inputLabel}>
                password
              </label>
              <span className={styles.inputHighlight}></span>
            </div>
            <button
              className="flex justify-center w-full h-auto bg-[#635FC7] p-[0.5rem_1rem] rounded-[24px] text-white text-[.9375rem]"
              type="submit"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
