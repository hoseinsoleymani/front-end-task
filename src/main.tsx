import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './components/shared/index.js'

async function deferRender() {
  const { worker } = await import("@/mocks/browser")
  return worker.start({
    onUnhandledRequest(request, print) {
      if (!request.url.includes('/api')) {
        return
      }

      print.warning()
    },
    quiet: true
  })
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Provider store={store}>
            <App />
          </Provider>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>,
  )
})