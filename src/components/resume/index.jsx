import Card from './Card'
import { FaTemperatureLow } from 'react-icons/fa'

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
    <p>
      <article className='flex flex-row flex-wrap justify-center px-4 py-8 gap-4'>
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
          icon={iconCondition}
          text={tempC}
          textFooter={`°C - ${currentCondition}`}
        />
      </article>
    </p>
  )
}

export default Resume
