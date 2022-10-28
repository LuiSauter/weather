import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

import Geolocation from '../../components/geolocation'
import Link from '../../components/link'
import Appearance from '../Appearance'
import SearchDW from '../../components/Drawer/SearchDW'
import SavedDM from '../../components/Drawer/SavedDM'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)
  const handleCheck = (event) => toggleMenu(event.target.checked)

  return (
    <header className='sticky top-0 left-0 right-0 z-10 backdrop-blur-sm'>
      <div className='flex justify-center py-3 px-4 items-center mx-auto max-w-7xl sm:py-4 sm:px-8 md:py-5 md:px-9'>
        <input
          type='checkbox'
          checked={showMenu}
          onChange={handleCheck}
          className='peer hidden'
          id='menu'
        />
        <h1 className='font-semibold text-base leading-snug w-full sm:text-lg md:text-xl peer-checked:opacity-0 peer-checked:scale-0 peer-checked:animate-fadeOut transition-opacity duration-200 peer-checked:md:scale-100 peer-checked:md:opacity-100'>
          <Link href='/'>Weather</Link>
        </h1>
        <nav
          role='barnavigation'
          className='hidden peer-checked:flex animate-fadeOut peer-checked:w-max peer-checked:animate-menuAnimation peer-checked:animate-fadeIn file:flex flex-row text-white md:flex md:animate-none'
        >
          <Geolocation />
          <SearchDW />
          <Appearance />
          <SavedDM />
        </nav>
        <label
          htmlFor='menu'
          role='menu'
          className='p-2 ml-2 bg-transparent rounded-md dark:text-white text-slate-900 hover:bg-slate-200 hover:dark:bg-slate-800 ring-teal-500 active:ring-2 relative cursor-pointer sm:p-2 sm:text-lg md:text-xl md:hidden'
        >
          {!showMenu ? <FiMenu /> : <MdClose />}
        </label>
      </div>
    </header>
  )
}

export default Header
