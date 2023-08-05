import { createSlice } from '@reduxjs/toolkit';

const initUserSignUpState = {
    username: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    currentPlan: "",
    language: "",
    maturity: "",
    planStart: "",
}

const userSignUpSlice = createSlice({
  name: 'userSignUp',
  initialState: initUserSignUpState,
  reducers: {
    
  },
});

export const userSignUpActions = userSignUpSlice.actions;

export default userSignUpSlice;