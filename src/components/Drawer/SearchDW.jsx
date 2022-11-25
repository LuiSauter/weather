import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Drawer from '.'
import { fetcher } from '../../services/fetcher'
import { searchWeatherUrl } from '../../services/rapidapi'
import { useToggle } from '../../hooks/useToggle'
import Loading from '../Loading'

const SearchItem = ({ name, region, country, onClick }) => (
  <Link to={`/search/${name}`}>
    <div onClick={onClick} className='flex flex-col text-base rounded-md border border-gray-600 px-3 py-2 dark:hover:bg-slate-800/60 hover:bg-slate-100 active:border-transparent active:ring-2 active:ring-teal-500 transition-all duration-150'>
      <div className='flex items-center gap-1 font-medium'>
        <HiOutlineLocationMarker />
        <span>{name}</span>
      </div>
      <span className='text-gray-400'>{region} - {country}</span>
    </div>
  </Link>
)

const SearchDW = () => {
  const [search, setSearch] = useState({ word: '', loading: false })
  const [options, setOptions] = useState([])
  const [display, setDisplay] = useState(false)
  const { toggle, handleToggle } = useToggle()

  const handleChange = (e) => {
    setSearch(prev => ({ ...prev, word: e.target.value }))
    if (e.target.value.length > 4) {
      setSearch(prev => ({ ...prev, loading: true }))
      fetchCityWeather()
      setDisplay(true)
    }
  }

  const fetchCityWeather = async () => {
    const response = await fetcher(searchWeatherUrl + search.word)
    setOptions(response)
    setSearch(prev => ({ ...prev, loading: false }))
  }

  return (
    <Drawer
      icon={<FiSearch />}
      ariaLabel='Search'
      title='Search'
      toggle={toggle}
      handleToggle={handleToggle}
    >
      <div className='flex flex-col gap-2 overflow-y-auto relative h-[calc(100vh-128px)] pb-2 px-5'>
        <div className='px-5'>
          <input
            type='text'
            placeholder='Type here (min. 4 letters)...'
            onChange={(event) => handleChange(event)}
            className='px-3 flex w-full relative text-base font-light py-1 rounded-md bg-inherit border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition-all duration-150'
          />
        </div>
        <span
          className='w-full flex justify-center py-2'
        >{options.length ? `${options.length} results` : null}
        </span>
        {search.loading && <Loading size='w-4 h-4' />}
        {display && options.map(option => (
          <SearchItem
            onClick={handleToggle}
            key={option.id}
            name={option.name}
            region={option.region}
            country={option.country}
          />
        ))}
      </div>
    </Drawer>
  )
}

export default SearchDW
