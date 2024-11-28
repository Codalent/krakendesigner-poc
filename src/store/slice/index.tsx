import configSlice from "./configSlice";
import endpointsSlice from "./endpointsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  config: configSlice.reducer,
  endpoints: endpointsSlice.reducer,
});

export default rootReducer;
