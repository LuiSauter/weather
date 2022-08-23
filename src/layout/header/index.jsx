import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { FiSearch, FiHeart, FiMoon, FiSun } from 'react-icons/fi'

const Header = () => {
  return (
    <header>
      <h1>Weather</h1>
      <nav>
        <GrLocation />
        <FiSearch />

        <FiMoon />
        <FiSun />

        <FiHeart />
      </nav>
    </header>
  )
}

export default Header
