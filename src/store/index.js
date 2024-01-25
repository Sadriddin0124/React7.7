import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/tasksSlice"
import PostsReducer from "../features/posts/PostSlice";
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        posts: PostsReducer
    }
})

export default store