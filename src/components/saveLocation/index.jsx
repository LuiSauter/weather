// import confetti from 'canvas-confetti'
// import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'

const SaveLocation = ({ url, title, country }) => {
  const [saved, setSaved] = useState(
    window.localStorage.savedLocations
      ? JSON.parse(window.localStorage.savedLocations)
      : []
  )
  const [find, setFind] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('savedLocations', JSON.stringify(saved))
    if (saved.find(item => item.url === url)) {
      setFind(true)
    }
  }, [saved])

  // const handleSaveLocation = () => {
  //   const newLocation = {
  //     id: nanoid(),
  //     url,
  //     title,
  //     country
  //   }
  //   if (find) {
  //     setSaved(saved.filter(item => item.url !== url))
  //     setFind(false)
  //   } else {
  //     setSaved([...saved, newLocation])
  //     setFind(true)
  //     confetti()
  //   }
  // }

  return <div />
}

export default SaveLocation
