import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "../components/bankSlice";

export const store = configureStore({
  reducer: {
    bank: bankReducer,
  },
});
