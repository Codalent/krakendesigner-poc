import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  $schema: "https://www.krakend.io/schema/krakend.json",
  cache_ttl: "300s",
  name: "KrakenD - API Gateway",
  output_encoding: "",
  timeout: "3000ms",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    updateConfig: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export default configSlice;
export const { updateConfig } = configSlice.actions;
