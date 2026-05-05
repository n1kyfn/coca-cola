import { baseApi } from "shared/api/baseApi";
import type { ISpace, ISpaceResponse, TSpaceDTO } from "../model/types";

export const spacesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpaces: builder.infiniteQuery<ISpaceResponse, { limit: number }, number>({
            infiniteQueryOptions: {
                initialPageParam: 1,
                getNextPageParam: (lastPage) => {
                    const loadedItems = lastPage.page * lastPage.limit;
                    return loadedItems < lastPage.total ? lastPage.page + 1 : undefined;
                },
            },
            query: ({ queryArg, pageParam }) => ({
                url: `/spaces`,
                params: {
                    page: pageParam,
                    limit: queryArg.limit,
                },
            }),
            providesTags: (result) =>
                result ? [...result.pages.flatMap((page) =>
                    page.data.map(({ id }) => ({ type: 'Space' as const, id }))
                ), { type: 'Space', id: 'LIST' }] : [{ type: 'Space', id: 'LIST' }]
        }),
        createSpace: builder.mutation<ISpace, TSpaceDTO>({
            query: (body) => ({
                url: "/spaces",
                method: "POST",
                body
            }),
            invalidatesTags: (result) => [{ type: "Space", id: result?.id }, { type: "Space", id: "LIST" }]
        }),
        updateSpace: builder.mutation<ISpace, { id: number, data: TSpaceDTO }>({
            query: ({ data, id }) => ({
                url: `/spaces/${id}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: (result) => [{ type: "Space", id: result?.id }, { type: "Space", id: "LIST" }]
        }),
        deleteSpace: builder.mutation<string, { id: number }>({
            query: ({ id }) => ({
                url: `/spaces/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Space"]
        }),
    }),
});

export const { useGetSpacesInfiniteQuery, useCreateSpaceMutation, useDeleteSpaceMutation, useUpdateSpaceMutation } = spacesApi
