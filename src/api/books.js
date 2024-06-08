import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://openlibrary.org', 
    credentials:'same-origin'
  }),
  endpoints: (builder) => ({


    getBooks: builder.query({
      query: () => 'search.json?q=all&limit=10&page=1',
      headers: {
        "Content-Type": "application/json",
      },
    }),


    getSearchBooks:builder.query({
      query:(search) => `search.json${search}&limit=10&page=1`,
      headers: {
        "Content-Type": "application/json",
      },
    })


  }),
});

export const { useGetBooksQuery , useGetSearchBooksQuery } = booksApi;
