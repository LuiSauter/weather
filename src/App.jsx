import { Toaster } from 'react-hot-toast'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import Page404 from './pages/Page404'

function App () {
  const loaction = useLocation()
  return (
    <>
      <Layout>
        <Routes key={loaction.pathname}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/search/:name' element={<Search />} /> */}
          <Route path='/404' element={<Page404 />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Layout>
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  )
}

export default App
