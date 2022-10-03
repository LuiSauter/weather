const Card = ({ icon, text, textFooter, isIcon = false }) => {
  return (
    <div className='flex flex-col items-center py-4 px-8 ring-2 ring-slate-600 border-gray-600 rounded-lg'>
      {isIcon ? <figure className='p-3'>{icon}</figure> : <img src={icon} />}
      <span className='text-3xl font-semibold pb-2'>{text}</span>
      <span className='dark:text-slate-200'>{textFooter}</span>
    </div>
  )
}

export default Card
