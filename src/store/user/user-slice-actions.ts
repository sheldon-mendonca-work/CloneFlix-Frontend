import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { initUserState, initUserStateType } from "./user-slice";
import { RootState, actionType } from "../store";

const backendUrl: String = "https://cloneflix-backend.netlify.app";

export const updateEmailHandler = (state: initUserStateType, action: actionType) => {
    state.emailAddress = action.payload.userEmail;
}

export const updatePasswordHandler = (state: initUserStateType, action: actionType) => {
    state.password = action.payload.userPassword;
}

export const updateCurrentPlanHandler = (state: initUserStateType, action: actionType) => {
    state.currentPlan = action.payload.currentPlan;
}

export const checkAutoLoginHandler = (state: initUserStateType, action: actionType) => {
    // const localUserId = localStorage.getItem("cloneFlixUserId");
    // const localUsername = localStorage.getItem("cloneFlixUsername");
    // const localUserToken = localStorage.getItem("cloneFlixUserToken");

    // if(!localUserId || !localUsername || !localUserToken){
    //     localStorage.removeItem("cloneFlixUserId");
    //     localStorage.removeItem("cloneFlixUsername");
    //     localStorage.removeItem("cloneFlixUserToken");
    //     // return initUserState;
    // }


}

// LOGIN

export const userLogin = createAsyncThunk('user/login',
    async(userId: string | void, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const response = await axios.post(`${backendUrl}/api/user/login`, {
            emailAddress: state.user.emailAddress,
            password: state.user.password,

        });
        return response.data;
    }
)

export const userLoginPending = (state: initUserStateType) => {
    state.status = 'loading';
}
  
export const userLoginFulfilled = (state: initUserStateType, action: actionType) => {
    const loginUser = action.payload.user;
    state.status = "success";
    state.isLoggedIn = true;
    state.message = loginUser.message;
    state.userId = loginUser.userId;
    state.username = loginUser.username;
    state.emailAddress = loginUser.emailAddress;
    state.password = loginUser.password;
    state.phoneNumber = loginUser.phoneNumber;
    state.currentPlan = loginUser.currentPlan;
    state.userToken = loginUser.userToken;
    state.language = loginUser.language;
    state.maturity = loginUser.maturity;
    state.planStart = loginUser.planStart;
    state.planEnd = loginUser.planEnd; 
    localStorage.setItem("cloneFlixUserId", loginUser.userId);
    localStorage.setItem("cloneFlixUsername", loginUser.username);
    localStorage.setItem("cloneFlixUserToken", loginUser.userToken);
}

export const userLoginRejected = (state: initUserStateType, action: actionType) => {
    state.status = "failed";
    console.log(action)
    state.message = action.payload.message; 
}

// REGISTER

export const userRegister = createAsyncThunk('user/register',
    async(userId: string | void, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const response = await axios.post(`${backendUrl}/api/user/register`, {
            ...state.user
        });

        return response.data;
    }
)

export const userRegisterPending = (state: initUserStateType) => {
    state.status = 'loading';
}
  
export const userRegisterFulfilled = (state: initUserStateType, action: actionType) => {
    const newUser = action.payload.user;
    state.status = "success";
    state.isLoggedIn = true;
    state.message = newUser.message;
    state.userId = newUser.userId;
    state.username = newUser.username;
    state.emailAddress = newUser.emailAddress;
    state.password = newUser.password;
    state.phoneNumber = newUser.phoneNumber;
    state.currentPlan = newUser.currentPlan;
    state.userToken = newUser.userToken;
    state.language = newUser.language;
    state.maturity = newUser.maturity;
    state.planStart = newUser.planStart;
    state.planEnd = newUser.planEnd; 
    localStorage.setItem("cloneFlixUserId", newUser.userId);
    localStorage.setItem("cloneFlixUsername", newUser.username);
    localStorage.setItem("cloneFlixUserToken", newUser.userToken);
}

export const userRegisterRejected = (state: initUserStateType, action: actionType) => {
    state = initUserState;
    state.status = "failed";
    console.log(action.payload)
    state.message = action.payload.message; 
}

// LOGOUT

export const userLogout = createAsyncThunk('user/logout',
    async(userId: string | void) => {
        const response = await axios.get(`${backendUrl}/api/user/logout`);
        return response.data;
    }
)

export const userLogoutPending = (state: initUserStateType) => {
    state.status = 'loading';
}
  
export const userLogoutFulfilled = (state: initUserStateType, action: actionType) => {
    state = initUserState;
    state.message = action.payload.message;
    state.status = "success";
}

export const userLogoutRejected = (state: initUserStateType, action: actionType) => {
    state.status = "failed";
    state.message = "Failed to logout"; 
}