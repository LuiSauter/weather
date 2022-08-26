import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <main className='h-full bg-white dark:bg-gray-900 relative overflow-y-auto'>
      <Header />
      {children}
    </main>
  )
}

export default Layout
