import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../button'
import Portal from '../../layout/Portal'

const Drawer = ({ icon, ariaLabel, title, toggle, handleToggle, children }) => {
  const [mount, setMount] = useState(false)
  let cleanup = true

  useEffect(() => {
    cleanup && setMount(true)
    return () => {
      cleanup = false
    }
  }, [])

  useEffect(() => {
    if (cleanup && mount) {
      document.getElementById('layout').style.overflowY = toggle ? 'hidden' : 'scroll'
    }
    return () => {
      cleanup = false
    }
  }, [toggle])

  const transitionDrawer = `${toggle ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-out`

  return (
    <>
      <Button onClick={handleToggle} role='menu-item' label={ariaLabel}>
        {icon}
      </Button>
      {mount && (
        <Portal wrapperId='portal-root'>
          {toggle && (
            <div
              onClick={handleToggle}
              className='bg-[#0000004d] fixed inset-0 transi z-10'
            />
          )}
          <section
            className={`${transitionDrawer} fixed top-0 z-20 dark:bg-slate-900 bg-white py-4 right-0 h-screen flex flex-col justify-between w-full sm:w-80 selection:bg-teal-400 selection:text-teal-900 sm:rounded-tl-2xl sm:rounded-bl-2xl shadow-2xl`}
          >
            <div className='flex flex-col gap-4 text-lg'>
              <header className='font-bold text-xl px-5'>{title}</header>
              <article className='relative'>{children}</article>
            </div>
            <footer className='sticky bottom-0 z-40 dark:bg-slate-900 bg-white w-full py-4 px-5 rounded-bl-2xl'>
              <button onClick={handleToggle} className='w-full'>
                <div className='flex items-center justify-center gap-4 py-1 text-gray-400 text-base ring-1 ring-gray-600 rounded-lg active:ring-teal-500 active:text-teal-500 hover:ring-teal-300/70 active:ring-2 transition-all duration-150'>
                  <IoMdClose size={20} />
                  Close
                </div>
              </button>
            </footer>
          </section>
        </Portal>
      )}
    </>
  )
}

export default Drawer
