import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import reducers from "../fetch/reducers";
import postsReducer from "./fetch/postSlice";

const store = configureStore({
     reducer : {
        counter : counterReducer,
        data : reducers,
        posts : postsReducer
     }
})

export default store;