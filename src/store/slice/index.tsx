import store from "../store";
import configSlice from "./configSlice";
import endpointsSlice from "./endpointsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  config: configSlice.reducer,
  endpoints: endpointsSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default rootReducer;
