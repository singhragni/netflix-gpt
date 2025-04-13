import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    
    initialState: {
        nowPlayingMovies : null,
        youTubekey: null
    },
    reducers: {
        addMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addYouTubekey: (state,action) =>{
            state.youTubekey = action.payload;
        }
    }
})



export const {addMovies,addYouTubekey} = movieSlice.actions;
export default movieSlice.reducer;