import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Button from '../components/button'
import useThemes from '../hooks/useThemes'

const Appearance = () => {
  const { setTheme, checkIfIsDark } = useThemes()

  const handleTheme = () =>
    checkIfIsDark() ? setTheme('light') : setTheme('dark')

  return (
    <Button onClick={handleTheme} label='Theme'>
      {checkIfIsDark() ? <FiSun /> : <FiMoon />}
    </Button>
  )
}

export default Appearance
