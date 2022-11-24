import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout = () => {
  return (
    <>
      <main id='layout' className='h-full bg-white dark:bg-gray-900 relative overflow-y-auto selection:bg-teal-400 selection:text-teal-900'>
        <Header />
        <Outlet />
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
      <Toaster position='bottom-center' reverseOrder={false} />
    </>
  )
}

export default Layout
