import { createSlice } from '@reduxjs/toolkit';
import { database } from '../../db/database';

const initVideoListState = {
  videoResponse : database,
  videoTitleList : [],
  videoList : [],
}


const videoListSlice = createSlice({
  name: 'video',
  initialState: initVideoListState,
  reducers: {
    fetchTitleList(state){
      
    }
  },
});

export const videoListActions = videoListSlice.actions;

export default videoListSlice;