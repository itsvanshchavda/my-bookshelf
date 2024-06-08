import { configureStore } from '@reduxjs/toolkit'

import booksReducer from '../slices/BookShelf'
import { booksApi } from '../api/books'

const store = configureStore({
    reducer: {
        userbooks: booksReducer,
        [booksApi.reducerPath]: booksApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            booksApi.middleware,
        ),

    devTools: true,
});


export default store