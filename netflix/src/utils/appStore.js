import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice"; 
import movieReducer from "../Slices/movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
