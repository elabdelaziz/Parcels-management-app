import { DataState } from "@/reducers/data.reducer";
import { AnyAction } from "@reduxjs/toolkit";

export const onGetUserData = (state: DataState, action: AnyAction) => {
  return { ...state, data: action.payload };
};
