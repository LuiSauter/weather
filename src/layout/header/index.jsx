import React, { useState } from 'react'
import { FiSearch, FiHeart, FiMenu } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Button from '../../components/button'
import Appearance from '../Appearance'

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
        <h1 className='font-semibold text-base leading-snug w-full sm:text-lg md:text-xl peer-checked:opacity-0 peer-checked:scale-0 peer-checked:animate-fadeOut transition-opacity duration-200'>
          Weather
        </h1>
        <nav className='hidden peer-checked:flex animate-fadeOut peer-checked:w-max peer-checked:animate-menuAnimation peer-checked:animate-fadeIn file:flex flex-row text-white md:flex md:animate-none'>
          <Button label='Geolocation'>
            <HiOutlineLocationMarker />
          </Button>
          <Button label='Search'>
            <FiSearch />
          </Button>
          <Appearance />
          <Button label='Saved'>
            <FiHeart />
          </Button>
        </nav>
        <label
          htmlFor='menu'
          className='p-2 ml-2 bg-transparent rounded-md dark:text-white text-slate-900 hover:bg-slate-200 hover:dark:bg-slate-800 ring-teal-500 active:ring-2 relative cursor-pointer sm:p-2 sm:text-lg md:text-xl md:hidden'
        >
          <FiMenu />
        </label>
      </div>
    </header>
  )
}

export default Header
