import { baseApi } from "../../../shared/api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData
            }),
            invalidatesTags: ['User']
        }),

        login: builder.mutation({
            query: (userData) => ({
                url: '/auth/login',
                method: 'POST',
                body: userData
            }),
            invalidatesTags: ['User']
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi