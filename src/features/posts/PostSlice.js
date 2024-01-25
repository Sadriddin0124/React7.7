import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import sub from "date-fns/sub";
let date = sub(new Date(), { minutes: 1 }).toISOString();
console.log(date);
const initialState = [
  {
    id: 1,
    title: "Learn Modern Redux Toolkit",
    author: "Sadriddin Ravshanov",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vel?",
    date: date,
  },
];

const PostSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, author, content }) {
        return {
          payload: {
            id: nanoid(),
            title: title,
            author: author,
            content: content,
            date: new Date().toISOString()
          },
        };
      },
    },
  },
});
export const getAllPosts = (state) => state.posts;
export const { postAdded } = PostSlice.actions;
export default PostSlice.reducer;
