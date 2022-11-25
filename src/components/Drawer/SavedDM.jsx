import React, { useEffect, useState } from 'react'
import { IoIosSave } from 'react-icons/io'
import { FiHeart, FiMap } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Drawer from '.'
import { useToggle } from '../../hooks/useToggle'

const Location = ({ url, title, country, onClick }) => (
  <Link to={`/search/${title}`}>
    <div onClick={onClick} className='flex flex-col text-base rounded-md border border-gray-600 px-3 py-3 dark:hover:bg-slate-800/60 hover:bg-slate-100 active:border-transparent active:ring-2 active:ring-teal-500 transition-all duration-150'>
      <div className='flex items-center justify-between'>
        <span className='font-medium'>{title}</span>
        <span className='text-sm text-gray-400'>{country}</span>
      </div>
      <div className='flex items-center gap-3'>
        <FiMap />
        <span className='text-gray-400'>/{url}</span>
      </div>
    </div>
  </Link>
)
const storageLocations = window.localStorage.savedLocations || null
const SavedDM = () => {
  let cleanup = true
  const { toggle, handleToggle } = useToggle()
  const [savedLocations, setSavedLocations] = useState(
    storageLocations ? JSON.parse(storageLocations) : []
  )

  useEffect(() => {
    cleanup && window.localStorage.setItem('savedLocations', JSON.stringify(savedLocations))
    return () => {
      cleanup = false
    }
  }, [savedLocations])

  const getStorageLocations = () => {
    if (storageLocations) {
      setSavedLocations(JSON.parse(window.localStorage.savedLocations))
    }
  }

  useEffect(() => {
    cleanup && getStorageLocations()
    return () => {
      cleanup = false
    }
  }, [toggle])

  /** @param {string} id */
  const deleteLocation = (id) => {
    setSavedLocations(
      savedLocations.filter(location => location.id !== id)
    )
  }

  return (
    <Drawer
      icon={<FiHeart />}
      ariaLabel='Saved'
      title='Saved'
      toggle={toggle}
      handleToggle={handleToggle}
    >
      {savedLocations.length
        ? (
          <div className='flex flex-col gap-2 overflow-y-auto relative h-[calc(100vh-128px)] pb-2 px-5 text-base'>
            <span className='flex w-full justify-center pb-2'>
              {savedLocations.length} saved
            </span>
            {savedLocations.map((option) => (
              <Location
                key={option.id}
                country={option.country}
                title={option.title}
                url={option.url}
                onClick={handleToggle}
              />
            ))}
          </div>
          )
        : (
          <div className='flex flex-col items-center justify-center px-4 text-center gap-4 text-base'>
            <IoIosSave size={38} />
            <span>All the locations you save will appear here</span>
          </div>
          )}
    </Drawer>
  )
}

export default SavedDM
