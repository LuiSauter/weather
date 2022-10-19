import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../button'
import Portal from '../../layout/Portal'

const Drawer = ({ icon, ariaLabel, title, children }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
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
      document.getElementById('layout').style.overflowY = openDrawer ? 'hidden' : 'scroll'
    }
    return () => {
      cleanup = false
    }
  }, [openDrawer])

  const handleDrawer = () => setOpenDrawer(!openDrawer)
  const transitionDrawer = `${openDrawer ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`

  return (
    <>
      <Button onClick={handleDrawer} role='menu-item' label={ariaLabel}>
        {icon}
      </Button>
      {mount && (
        <Portal wrapperId='portal-root'>
          {openDrawer && (
            <div
              onClick={handleDrawer}
              className='bg-[#0000004d] fixed inset-0 transi z-10'
            />
          )}
          <section
            className={`${transitionDrawer} fixed top-0 z-20 dark:bg-slate-900 bg-white py-4 px-5 right-0 h-full flex flex-col justify-between w-72 selection:bg-teal-400 selection:text-teal-900`}
          >
            <div className='flex flex-col gap-4 text-lg'>
              <header className='py-2 font-bold text-xl'>{title}</header>
              <article className=''>{children}</article>
            </div>
            <footer>
              <button onClick={handleDrawer} className='w-full'>
                <div className='flex items-center justify-center gap-4 py-1 text-gray-400 text-lg ring-1 ring-gray-600 rounded-lg active:ring-teal-500 active:text-teal-500 hover:ring-teal-300/70'>
                  <IoMdClose size={22} />
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
