import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const endpointsSlice = createSlice({
  name: "endpoints",
  initialState,
  reducers: {
    addEndpoint: (state: any, action: any) => {
      state.data = {
        ...state.data,
        [action.payload.index]: {
          id: action.payload.index,
          ...action.payload.data,
        },
      };
    },
    removeEndpoint: (state, action) => {},
  },
});

export default endpointsSlice;
export const { addEndpoint, removeEndpoint } = endpointsSlice.actions;
