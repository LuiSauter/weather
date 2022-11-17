import HourCard from './HourCard'

const Hours = ({ hoursForecast }) => {
  return (
    <article className='w-full relative px-4 max-w-7xl mx-auto my-2 sm:px-8 md:px-9'>
      <ul className='flex flex-row gap-4 w-full p-2 pb-4 relative overflow-x-auto'>
        {hoursForecast?.map((hour) => (
          <HourCard
            key={hour.time_epoch}
            tempC={hour.temp_c}
            timeEpoch={hour.time_epoch}
            isDay={hour.is_day}
            condition={hour.condition}
            date={hour.date}
          />
        ))}
      </ul>
    </article>
  )
}

export default Hours
