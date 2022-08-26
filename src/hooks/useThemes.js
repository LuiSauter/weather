import { useTheme } from '../context/ThemeProvider'

const useThemes = () => {
  const isThemeDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
  const { theme, setTheme } = useTheme()

  const checkIfIsDark = () => {
    return isThemeDark && theme === 'system'
      ? true
      : theme === 'dark'
  }
  return { theme, setTheme, checkIfIsDark }
}

export default useThemes
