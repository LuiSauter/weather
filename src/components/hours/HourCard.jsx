const HourCard = ({ tempC, isDay, timeEpoch, condition, date }) => {
  const convertEpoch = (epoch) => {
    const date = new Date(epoch * 1000)
    const hours = date.getHours()
    const minutes = '0' + date.getMinutes()
    const formattedTime = hours + ':' + minutes.substring(-2)
    return formattedTime
  }

  return (
    <li
      title={condition.text}
      className='flex flex-col gap-1 justify-center items-center p-2 ring-2 ring-slate-600 rounded-xl relative'
    >
      <h3 className=''>{convertEpoch(timeEpoch)}</h3>
      <figure className='relative w-14 h-14 m-0 flex flex-shrink-0'>
        <img src={condition.icon} alt={condition.text} />
      </figure>
      <span>{tempC}°</span>
    </li>
  )
}

export default HourCard
