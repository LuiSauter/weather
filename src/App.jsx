import { Toaster } from 'react-hot-toast'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Search from './pages/Search'

function App () {
  const location = useLocation()

  return (
    <>
      <Layout>
        <Routes key={location.pathname}>
          <Route element={<Home />} path='/' />
          <Route element={<Search />} path='/search/:name' />
          <Route element={<Page404 />} path='/404' />
          <Route element={<Page404 />} path='*' />
        </Routes>
      </Layout>
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  )
}

export default App
