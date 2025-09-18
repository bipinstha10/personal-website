import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice"
import { pexelsApi } from "./api/pexelsApi";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [pexelsApi.reducerPath]: pexelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pexelsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;