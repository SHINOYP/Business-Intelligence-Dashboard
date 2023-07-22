import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/sortSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here if you have more slices
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;