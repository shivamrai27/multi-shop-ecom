// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    // 1 router handle hua hai get all products ka...check below for '/products'
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),

    endpoints: (builder) => ({

        // Mutation start {we can add multiple end point after one an other }
        registerUser: builder.mutation({
            query: (data) => ({
                url: `/auth/register`,
                method: 'POST',
                body: data,
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: `/auth/login`,
                method: 'POST',
                body: data,
            })
        })
    }),


})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation } = authApi;