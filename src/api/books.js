import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openlibrary.org', 
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => 'search.json?q=all&limit=10&page=1',
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
