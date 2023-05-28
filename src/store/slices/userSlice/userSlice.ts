import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
  userSubName: string;
  isAuth: boolean;
}

const initialState: UserState = {
  userName: "Andrei",
  userSubName: "Dudek",
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default userSlice.reducer;
export const { toggleAuth } = userSlice.actions;
