import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/lib/axios';

interface Task {
  id: string;
  title: string;
  description: string;
}

export const tasks = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getTasks: build.query<
      Task[],
      { search: string; _page: string; _limit: string }
    >({
      query: ({ search, _page, _limit }) => ({
        url: `/tasks`,
        params: {
          q: search,
          _page,
          _limit,
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),
    addTask: build.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: `/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    getTask: build.query<Task, string>({
      query: (id) => `tasks/${id}`,
      providesTags: (_, __, id) => [{ type: 'Post', id }],
    }),
    updateTask: build.mutation<void, Pick<Task, 'id'> & Partial<Task>>({
      query: ({ id, ...patch }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (_, __, { id }) => [{ type: 'Post', id }],
    }),
    deleteTask: build.mutation<{ success: boolean; id: number }, string>({
      query(id) {
        return {
          url: `/tasks/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (_, __, id) => [{ type: 'Post', id }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useLazyGetTasksQuery,
} = tasks;
