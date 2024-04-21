import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
        state.push(action.payload);
    },
    removeUser(state, action) {
        state.splice(action.payload, 1)
    },
    removeAllUsers(state, action) {
        return []
    },
  },
  
});

export const { addUser, removeUser, removeAllUsers } = userSlice.actions;

export default userSlice.reducer;
