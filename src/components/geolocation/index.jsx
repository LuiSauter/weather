import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { weatherUrl } from '../../services/rapidapi'
import Button from '../button'
import Loading from '../Loading'

const Geolocation = () => {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [message, setMessage] = useState('Geolocation')
  const [coords, setCoords] = useState(null)
  const navigate = useNavigate()

  const { data } = useSWR(coords && `${weatherUrl}${coords}`)

  useEffect(() => {
    data && navigate(`/search/${encodeURI(data.location.name)}`)
  }, [data])

  function successLocation (position) {
    setCoords(`${position.coords.latitude},${position.coords.longitude}`)
    setLoading(false)
  }

  function errorLocation () {
    toast('Geolocation cannot be detected', {
      icon: '😢',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff'
      }
    })
    setLoading(false)
  }

  function getLocation () {
    if (!navigator.geolocation) {
      setMessage('Geolocation is not supported by your browser.')
      setDisabled(true)
    } else {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation)
    }
  }

  return (
    <Button
      role='menu-item'
      onClick={getLocation}
      disabled={disabled}
      label={message}
    >
      {loading ? <Loading size='w-4 h-4' /> : <HiOutlineLocationMarker />}
    </Button>
  )
}

export default Geolocation
