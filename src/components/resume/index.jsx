import Card from './Card'
import { FaTemperatureLow } from 'react-icons/fa'
import { IoIosWater } from 'react-icons/io'
import { FiWind } from 'react-icons/fi'

const Resume = ({
  tempC,
  currentCondition,
  humidity,
  windKph,
  iconCondition,
  maxTempC,
  minTempC
}) => {
  return (
    <article className='flex flex-row flex-wrap justify-center px-4 pt-4 pb-4 gap-4 max-w-7xl'>
      <Card
        icon={iconCondition}
        text={tempC}
        textFooter={`°C - ${currentCondition}`}
      />
      <Card
        icon={<FaTemperatureLow size={40} />}
        isIcon
        text={`${maxTempC} / ${minTempC}`}
        textFooter='°C - Max / Min'
      />
      <Card
        icon={<IoIosWater size={40} color='#5F9DF7' />}
        text={humidity}
        isIcon
        textFooter='% - Humidity'
      />
      <Card
        icon={<FiWind size={40} color='#7F8487' />}
        text={windKph}
        isIcon
        textFooter='km/h - Wind speed'
      />
    </article>
  )
}

export default Resume
