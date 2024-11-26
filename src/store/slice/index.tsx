import endpointsSlice from "./endpointsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  endpoints: endpointsSlice.reducer,
});

export default rootReducer;
