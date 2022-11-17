import React from 'react'
import { Navigate } from 'react-router-dom'
import useSWR from 'swr'
import Astro from '../components/astro'
import Hours from '../components/hours'
import Loading from '../components/Loading'
import Resume from '../components/resume'
import useLocalStorage from '../hooks/useLocalStorage'
import { weatherUrl } from '../services/rapidapi'

const Home = () => {
  const [defaultLocation] = useLocalStorage(
    'defaultLocation',
    'Bolivia'
  )

  const { data, error } = useSWR(`${weatherUrl}${defaultLocation}&days=3`)

  if (error) return <Navigate to='/404' />
  if (!data) {
    return (
      <div className='flex justify-center items-center w-full py-4 gap-3'>
        <Loading size='h-5 w-5' /> Loading weather data...
      </div>
    )
  }

  const { current, location, forecast } = data

  return (
    <section className='h-max w-full flex flex-col justify-center relative max-w-7xl mx-auto'>
      <header className='flex flex-col w-full items-center justify-center'>
        <h2 className='text-4xl font-semibold md:text-5xl xl:text-6xl'>
          {data.location.name}
        </h2>
        <span className='text-2xl xl:text-3xl dark:text-slate-300 text-slate-600'>
          {data.location.country}
        </span>
      </header>
      <Resume
        currentCondition={current.condition.text}
        humidity={current.humidity}
        iconCondition={current.condition.icon}
        tempC={current.temp_c}
        windKph={current.wind_kph}
        maxTempC={forecast.forecastday[0].day.maxtemp_c}
        minTempC={forecast.forecastday[0].day.mintemp_c}
        localtime={location.localtime_epoch}
        cityName={location.name}
      />
      <Hours hoursForecast={forecast.forecastday[0].hour} />
      <Astro
        moonrise={forecast.forecastday[0].astro.moonrise}
        moonset={forecast.forecastday[0].astro.moonset}
        sunrise={forecast.forecastday[0].astro.sunrise}
        sunset={forecast.forecastday[0].astro.sunset}
      />
    </section>
  )
}

export default Home
