import { MutationCache, QueryCache, QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      const errorCode = error.response?.data.error?.code as number;
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      // const errorCode = error.response?.data.error.code as number;
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
