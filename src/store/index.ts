import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../modules/events/reducers/filter/filter.slice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
