"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/Input.module.css";
import { useForm } from "react-hook-form";
import useLocalStorage from "@/hooks/useLocalStorage";
import { getPendingParcels, loginUser } from "@/models/userModels";
import { useRouter } from "next/navigation";
import useGetPendingParcels from "@/hooks/queries/useGetPendingParcels";

type LoginFormInput = {
  username: string;
  password: string;
};

const LoginModal = ({
  loginMode,
  setLoginMode,
}: {
  setLoginMode: Dispatch<SetStateAction<boolean>>;
  loginMode: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [, setToken] = useLocalStorage("token", null);
  const [userData, setUserData] = useLocalStorage("userData", null);
  const [pendingParcels, setPendingParcels] = useLocalStorage(
    "pendingParcels",
    null
  );

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit = async (data: LoginFormInput) => {
    try {
      const response = await loginUser(data);
      const userToken = response.data.data.token;
      setToken(userToken);
      setUserData(response.data.data);
      router.push("/dashboard");
    } catch (error) {
      throw new Error("cannot login user");
    }
  };

  const handleFormSubmit = async (data: LoginFormInput) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
  };

  return (
    <>
      <div
        onClick={() => setLoginMode(false)}
        className="absolute top-0 z-[3] overlay w-[100vw] h-[100vh] bg-black bg-opacity-[0.5]"
      ></div>
      <div className="absolute top-0 flex items-center justify-center w-[100vw] h-[100vh]">
        <div className="rounded-[10px] z-[4] flex flex-col [&>div]:mb-[1rem] [&>div>label]:mb-[0.5rem] p-[2rem] bg-white w-[100%] max-w-[30rem] max-h-[60rem] h-[fit]">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                {...register("username", { required: "username is required" })}
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
                {...register("password", {
                  required: "Password is required",
                  minLength: 8,
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-500">
                  Password must be at least 8 characters
                </span>
              )}
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
