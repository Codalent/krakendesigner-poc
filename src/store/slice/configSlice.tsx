import { createSlice } from "@reduxjs/toolkit";

type SliceState = {
  $schema: string;
  cache_ttl: string;
  name: string;
  output_encoding: string;
  timeout: string;
};

const initialState: SliceState = {
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
      state[action.payload.key as keyof SliceState] = action.payload.value;
    },
  },
});

export default configSlice;
export const { updateConfig } = configSlice.actions;
