import { createSlice } from '@reduxjs/toolkit';

const initUserState = {
    userId: "",
    username: "",
    emailAddress: "",
    phoneNumber: "",
    currentPlan: "",
    userToken: "",
    language: "",
    maturity: "",
    planStart: "",
    planEnd: ""
}

const userSlice = createSlice({
  name: 'user',
  initialState: initUserState,
  reducers: {
    
  },
});

export const userActions = userSlice.actions;

export default userSlice;