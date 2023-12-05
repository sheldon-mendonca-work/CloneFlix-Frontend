import { Dispatch, configureStore } from '@reduxjs/toolkit';
import userSlice, { initUserStateType } from './user/user-slice';
import videoListSlice, { videoListStateType } from './videoList/videoList-slice';

export type actionType = {
  payload: any,
  type: String
};

export const backendUrl: String = "http://localhost:8080";

export type ThunkAPIType = {
  state: {
    user: initUserStateType,
    videoList: videoListStateType
  },
  dispatch: Dispatch
}

const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      videoList: videoListSlice.reducer,
      //search
      //recentlywatched
      //favourites
      //location
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
