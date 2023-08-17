import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

interface Login {

}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    updatePost: build.mutation<Login, Partial<Login> & Pick<Login, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `post/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      transformResponse: (response: { data: Login }, meta, arg) => response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg,
      ) => response.status,
      invalidatesTags: ['Post'],
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry },
      ) {},
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        },
      ) {},
    }),
  }),
});
