import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import App from './App'

import { SWRConfig } from 'swr'
import { fetcher } from './services/fetcher'
import './styles/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <SWRConfig value={{ fetcher }}>
          <App />
        </SWRConfig>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
