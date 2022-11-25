import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import { SWRConfig } from 'swr'

import { ThemeProvider } from './context/ThemeProvider'
import { fetcher } from './services/fetcher'
import { Home, Layout, Page404, Search } from './App'
import './styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={(
        <SWRConfig value={{ fetcher }}>
          <Layout />
        </SWRConfig>
      )}
      errorElement={<Page404 />}
    >
      <Route errorElement={<Page404 />}>
        <Route index element={<Home />} />
        <Route
          path='/search/:name'
          element={<Search />}
        />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
