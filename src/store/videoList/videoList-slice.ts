import { createSlice } from '@reduxjs/toolkit';

const initVideoListState = {
  videoList : [
    {
      videoId: 81597747,
      narrative: "A veteran statesman and his son are pulled into a violent power struggle when a cold-blooded political scion pursues a vengeful rise.",
      type: "movie",
      isOriginal: false,
      maturity: {
        rating: {
          value: "A",
          maturityDescription: "Content restricted to adults",
          specificRatingReason: "violence",
          maturityLevel: 1000,
          board: "India",
          boardId: 23821,
          ratingId: 23885,
          reasons: [
            {
              id: 23845,
              levelDescription: null,
              reasonDescription: "violence"
            }
          ]
        }
      },
      availability: {
        isPlayable: true,
        availabilityDate: "26 July",
        availabilityStartTime: 1690396200000,
        unplayableCause: null
      },
      releaseYear: 2023,
      numSeasonsLabel: null,
      title: "Maamannan",
      boxArt: {
        videoId: 81597747,
        url: "https://occ-0-3662-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZMWpKdl8lpMkZbQ8eXwGtSkbJRj8rwXHXeRK-W4usfHHxETViREmUVbEAmoi2kGNfZSZZu-MwbuPMrcR-B85X_kWlcgJ8FFXEldLJnhN9C-iSnP88udj-6QTxZXaSKwv-79OgReLr4ftTHYDhexq3xiZIhdVOy1yMg.jpg?r=352",
      },
    },
  ]
}

const videoListSlice = createSlice({
  name: 'video',
  initialState: initVideoListState,
  reducers: {
    
  },
});

export const videoListActions = videoListSlice.actions;

export default videoListSlice;