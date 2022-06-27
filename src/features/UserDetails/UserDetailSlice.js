import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", class: "", phone: "" },

  reducers: {
    savedUser: (state, action) => {
      state.name = action.payload.name;
      state.class = action.payload.class;
      state.phone = action.payload.phone;
    },
    deleteuser: (state, action) => {
      state.name = "";
      state.class = "";
      state.phone = "";
    },
  },
});

export default userSlice;
