import { createSlice } from '@reduxjs/toolkit';
import { checkAutoLoginHandler, updateCurrentPlanHandler, updateEmailHandler, updatePasswordHandler, userLogin, userLoginFulfilled, userLoginPending, userLoginRejected, userRegister, userRegisterFulfilled, userRegisterPending, userRegisterRejected } from './user-slice-actions';

export type initUserStateType = {
  userId: string;
  username: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
  currentPlan: string;
  userToken: string;
  language: string;
  maturity: string;
  planStart: string;
  planEnd: string;
  isLoggedIn: boolean;
  status: 'idle' | 'loading' | 'success' | 'failed',
  message: string | null,
}

export const initUserState: initUserStateType = {
    userId: "",
    username: "",
    emailAddress: "",
    password: "",
    phoneNumber: "",
    currentPlan: "",
    userToken: "",
    language: "",
    maturity: "",
    planStart: "",
    planEnd: "",
    isLoggedIn: false,
    status: "idle",
    message: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initUserState,
  reducers: {
    updateEmail: updateEmailHandler,
    updatePassword: updatePasswordHandler,
    updateCurrentPlan: updateCurrentPlanHandler,
    checkAutoLogin: checkAutoLoginHandler,

  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, userLoginPending)
    .addCase(userLogin.fulfilled, userLoginFulfilled)
    .addCase(userLogin.rejected, userLoginRejected);

    builder.addCase(userRegister.pending, userRegisterPending)
    .addCase(userRegister.fulfilled, userRegisterFulfilled)
    .addCase(userRegister.rejected, userRegisterRejected);
  }
});

export const userActions = userSlice.actions;

export default userSlice;