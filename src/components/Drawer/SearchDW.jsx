import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Drawer from '.'
import { fetcher } from '../../services/fetcher'
import { searchWeatherUrl } from '../../services/rapidapi'

const SearchItem = ({ name, region, country }) => (
  <>
    <Link to={`/search/${name}`}>
      <div>
        <span>{name}</span>
        <span>{region} - {country}</span>
      </div>
    </Link>
  </>
)

const SearchDW = () => {
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState([])
  const [display, setDisplay] = useState(false)

  const handleChange = (e) => {
    setSearch(e.target.value)
    if (e.target.value.length > 4) {
      fetchCityWeather()
      setDisplay(true)
    }
  }

  const fetchCityWeather = async () => {
    const response = await fetcher(searchWeatherUrl + search)
    setOptions(response)
  }

  return (
    <Drawer icon={<FiSearch />} ariaLabel='Search' title='Search'>
      <input
        type='text'
        placeholder='Type here (min. 4 letters)...'
        onChange={(event) => handleChange(event)}
      />
      <span>{options.length ? `${options.length} results` : null}</span>
      {display && options.map(option => (
        <SearchItem
          key={option.id}
          name={option.name}
          region={option.region}
          country={option.country}
        />
      ))}
    </Drawer>
  )
}

export default SearchDW
