import { onGetUserData } from "@/app/actions/dataSlice.actions";
import { createSlice } from "@reduxjs/toolkit";

export interface DataState {
  data: [];
}

const initialState: DataState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getUserData: (state, action) => onGetUserData(state, action),
  },
});

export const { getUserData } = dataSlice.actions;

export default dataSlice.reducer;
