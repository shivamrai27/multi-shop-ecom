import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shopfever-api.vercel.app/api/',
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        processPayment: builder.mutation({
            query: (data) => ({
                url: `/payment`,
                method: 'POST',
                body: data,
            })
        })
    })
})


export const { useProcessPaymentMutation } = paymentApi