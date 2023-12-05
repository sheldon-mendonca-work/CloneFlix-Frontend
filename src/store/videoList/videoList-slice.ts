import { createSlice } from '@reduxjs/toolkit';
import { fetchVideosList, fetchVideosListFulfilled, fetchVideosListPending, fetchVideosListRejected, updateCurrentVideoHandler } from './videoList-slice-actions';

export type videoListStateType = {
  videoList: { [key: string]: any; };
  videoListId: String[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  message: string | null;
  currentVideo: any | null
};

const initVideoListState: videoListStateType = {
  videoList : {},
  videoListId: [],
  status: "idle",
  message: null,
  currentVideo: null
}

const videoListSlice = createSlice({
  name: 'video',
  initialState: initVideoListState,
  reducers: {
     updateCurrentVideo: updateCurrentVideoHandler
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideosList.pending, fetchVideosListPending)
      .addCase(fetchVideosList.fulfilled, fetchVideosListFulfilled)
      .addCase(fetchVideosList.rejected, fetchVideosListRejected);
  }
  
});

export const videoListActions = videoListSlice.actions;

export default videoListSlice;