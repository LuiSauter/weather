import { MEDIA } from '../context/helpers'
import { useTheme } from '../context/ThemeProvider'

const isWindows = typeof window !== 'undefined'
const isThemeDark = isWindows && window.matchMedia(MEDIA)

const useThemes = () => {
  const { theme, setTheme } = useTheme()

  const checkIfIsDark = () => {
    return isThemeDark.matches && theme === 'system'
      ? true
      : theme === 'dark'
  }
  return { theme, setTheme, checkIfIsDark }
}

export default useThemes
