import { configureStore } from '@reduxjs/toolkit';
import userSlice from './users/user-slice';
import videoListSlice from './videoList/videoList-slice';
import userSignUpSlice from './userSignUp/userSignUp-slice';

const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      videoList: videoListSlice.reducer,
      userSignUp: userSignUpSlice.reducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;