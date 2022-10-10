import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <main className='h-full bg-white dark:bg-gray-900 relative overflow-y-auto'>
      <Header />
      {children}
      <footer className='flex w-full justify-center py-4 max-w-7xl mx-auto'>
        <span className='font-light text-base text-slate-500'>
          Built by{' '}
          <a
            href='https://sauterdev.vercel.app/'
            target='_blank'
            rel='noreferrer'
            className='hover:underline'
          >
            Luis Gabriel Janco
          </a>
        </span>
      </footer>
    </main>
  )
}

export default Layout
