import './index.css';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Loading } from '@/components/shared';
import { queryClient } from '@/lib';

import { App } from './App';

async function deferRender() {
  const { worker } = await import('@/mocks/browser');
  return worker.start({
    onUnhandledRequest(request, print) {
      if (!request.url.includes('/api')) {
        return;
      }

      print.warning();
    },
    quiet: true,
  });
}

void deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loading />}>
            <App />
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
});
