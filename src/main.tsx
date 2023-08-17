import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
