// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    // 1 router handle hua hai get all products ka...check below for '/products'
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),

    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
        }),

        // Mutation start {we can add multiple end point after one an other }
        addNewProduct: builder.mutation({
            query: (data) => ({
                url: `/new/product`,
                method: 'POST',
                body: data,
            })
        })
    }),


})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useAddNewProductMutation } = productApi;