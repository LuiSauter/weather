import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from 'react-icons/wi'

function AstroItem ({ astro, astroTitle, children }) {
  return (
    <div className='flex flex-col p-4 justify-center items-center min-w-[130px] sm:min-w-[200px]'>
      {children}
      <span className='font-semibold text-xl'>{astro}</span>
      <h3 className='dark:text-slate-400 text-slate-700'>{astroTitle}</h3>
    </div>
  )
}

const Astro = ({ moonrise, moonset, sunrise, sunset }) => {
  return (
    <article className='flex flex-row max-w-7xl mx-auto justify-center flex-wrap items-center my-3'>
      <AstroItem astro={moonrise} astroTitle='moonrise'>
        <WiMoonrise size={60} viewBox='0 0 30 24' color='#5DA7DB' />
      </AstroItem>
      <AstroItem astro={moonset} astroTitle='moonset'>
        <WiMoonset size={60} viewBox='0 0 30 24' color='#0099ff' />
      </AstroItem>
      <AstroItem astro={sunrise} astroTitle='sunrise'>
        <WiSunrise size={60} viewBox='0 0 30 24' color='#FFDE00' />
      </AstroItem>
      <AstroItem astro={sunset} astroTitle='sunset'>
        <WiSunset size={60} viewBox='0 0 30 24' color='#FD841F' />
      </AstroItem>
    </article>
  )
}

export default Astro
