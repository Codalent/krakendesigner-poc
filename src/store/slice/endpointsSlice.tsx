import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  data: {
    endpoint: string;
    method: Methods;
    output_encoding: string;
    backend: [
      {
        url_pattern: string;
        encoding: string;
        sd: string;
        method: Methods;
      }
    ];
  }[];
};

const initialState: SliceState = { data: [] };

const endpointsSlice = createSlice({
  name: "endpoints",
  initialState,
  reducers: {
    addEndpoint: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateEndpoint: (state, action) => {
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
