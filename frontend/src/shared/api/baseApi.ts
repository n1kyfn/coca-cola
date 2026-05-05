import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../config/consts";
import { ELSNames } from "../config/enums";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { logout, setToken } from "../../entities/auth/model/authSlice";

interface RefreshResult {
    accessToken: string
}

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(ELSNames.ACCESS_TOKEN)
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithRefetch: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error?.status === 401 && result.error && String(result.error.status).startsWith("4")) {
        const refreshToken = localStorage.getItem(ELSNames.REFRESH_TOKEN)

        if (refreshToken) {

            const refreshResult = await baseQuery({
                url: "/auth/refresh",
                method: "POST",
                body: { refreshToken }
            }, api, extraOptions)

            if (refreshResult.data && !refreshResult.error) {
                const newAccessToken = (refreshResult.data as RefreshResult).accessToken

                if (newAccessToken) {
                    api.dispatch(setToken(newAccessToken))
                    result = await baseQuery(args, api, extraOptions)
                }
            }
            else {
                api.dispatch(logout())
            }
        }
        else {
                api.dispatch(logout())
        }
    }

    return result
}

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithRefetch,
    endpoints: () => ({}),
    tagTypes: ["User", "Space", "Booking", "Review"]
})