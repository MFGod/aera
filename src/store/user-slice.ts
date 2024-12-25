import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  userimage: string;
}

const initialState: UserState = {
  username: '',
  userimage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setUserImage(state, action: PayloadAction<string>) {
      state.userimage = action.payload;
    },
  },
});

export const { setUsername, setUserImage } = userSlice.actions;

export default userSlice.reducer;
