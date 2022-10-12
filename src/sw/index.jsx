import { useCallback, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useRegisterSW } from 'virtual:pwa-register/react'

const intervalMS = 60 * 60 * 1000

const Sw = () => {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onRegisteredSW (r) {
      console.log('SW Registered')
      r && setInterval(() => {
        r.update()
      }, [intervalMS])
    },
    onRegisterError (error) {
      console.log('SW registration error', error)
    },
    onOfflineReady () {
      console.log('Ready To Work Offline')
    }
  })

  const close = useCallback(() => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }, [setOfflineReady, setNeedRefresh])

  useEffect(() => {
    if (offlineReady) {
      toast('Weather has been installed, it now works offline!', {
        icon: '🥳',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        }
      })
    } else if (needRefresh) {
      toast('A new version is available!', {
        icon: '🥳',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff'
        }
      })
      updateServiceWorker()
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker])

  return null
}

export default Sw
