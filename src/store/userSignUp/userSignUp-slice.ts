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

// const DUMMY_DATA = [{
//   username: "sheldon123",
//   emailAddress: "sheldonmendonca@gmail.com",
//   phoneNumber: "9008748840",
//   password: "something1",
//   currentPlan: "basic",
//   language: "Englush",
//   maturity: "A",
//   planStart: "Now",
// }]

const userSignUpSlice = createSlice({
  name: 'userSignUp',
  initialState: initUserSignUpState,
  reducers: {
    updateEmail(state, action){
      state.emailAddress = action.payload.userEmail;
    },
    updatePassword(state, action){
      state.password = action.payload.userPassword;
    }
  },
});

export const userSignUpActions = userSignUpSlice.actions;

export default userSignUpSlice;