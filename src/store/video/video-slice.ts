import { createSlice } from '@reduxjs/toolkit';

const initVideoState = {

}


const videoSlice = createSlice({
  name: 'video',
  initialState: initVideoState,
  reducers: {
    
  },
});

export const videoActions = videoSlice.actions;

export default videoSlice;