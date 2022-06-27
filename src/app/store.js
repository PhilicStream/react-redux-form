import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/UserDetails/UserDetailSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
