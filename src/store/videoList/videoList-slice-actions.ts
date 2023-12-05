import { videoListStateType } from "./videoList-slice";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionType } from "../store";

const backendUrl: String = "https://cloneflix-backend.netlify.app";

export const fetchVideosList = createAsyncThunk("videoList/fetchVideos", async()=>{
  const response = await axios.get(`${backendUrl}/`);
  return response.data;
});

export const fetchVideosListPending = (state: videoListStateType) => {
  state.status = 'loading';
}

export const fetchVideosListFulfilled = (state: videoListStateType, action: actionType) => {
  state.status = "idle";
  const response = action.payload;
  const videoListResponse = response.jsonGraph.lists;
  state.videoList = videoListResponse;
  state.videoListId = Object.keys(videoListResponse).map(vList=> {
    return vList;
  });
}

export const fetchVideosListRejected = (state: videoListStateType, action: actionType) => {
  state.status = "failed";
  state.message = "Fetching Failed"; 
}


export const updateVideosListHandler = (state: videoListStateType, action: actionType) =>{
  const response = action.payload;
  const videoListResponse = response.jsonGraph.lists;
  state.videoList = videoListResponse;
  state.videoListId = Object.keys(videoListResponse).map(vList=> {
    return vList;
  });
}

export const updateCurrentVideoHandler = (state: videoListStateType, action: actionType) => {
  state.currentVideo = action.payload;
}