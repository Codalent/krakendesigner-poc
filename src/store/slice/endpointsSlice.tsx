import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const endpointsSlice = createSlice({
  name: "endpoints",
  initialState,
  reducers: {
    addEndpoint: (state: any, action: any) => {
      state.data = [...state.data, action.payload];
    },
    updateEndpoint: (state: any, action: any) => {
      state.data = action.payload;
    },
    removeEndpoint: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
  },
});

export default endpointsSlice;
export const { addEndpoint, removeEndpoint, updateEndpoint } =
  endpointsSlice.actions;
