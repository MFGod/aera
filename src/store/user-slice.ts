import { useUserData } from "@/hooks/useUserData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const { userData } = useUserData();
//const { username } = userData


interface UserState {
  username: string;
}

const initialState: UserState = {
  username: userData?.username,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;