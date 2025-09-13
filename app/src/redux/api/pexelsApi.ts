// src/services/pexelsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export const pexelsApi = createApi({
  reducerPath: "pexelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pexels.com/v1/collections/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", API_KEY!);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCollectionMedia: builder.query<any, string>({
      query: (collectionId) => `${collectionId}?per_page=12`,
    }),
  }),
});

// Hooks you’ll use in components
export const {
  useGetCollectionMediaQuery,
} = pexelsApi;
