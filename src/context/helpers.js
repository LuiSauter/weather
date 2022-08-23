const isServer = typeof window === 'undefined'
export const MEDIA = '(prefers-color-scheme: dark)'

/**
 * @param {string} key
 * @param {any} fallback
 * @returns {string | any}
 * @description get theme of local storage
 */
export const getTheme = (key, fallback) => {
  if (isServer) return undefined
  let theme
  try {
    theme = window.localStorage.getItem(key) || undefined
  } catch (error) {
    // Unsupported
  }
  return theme || fallback
}

const textnode = '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'

/** @description create fast style to disable all animations */
export const disableAnimation = () => {
  const css = document.createElement('style')
  css.appendChild(document.createTextNode(textnode))
  document.head.appendChild(css)

  return () => {
    // Force restyle
    ; (() => window.getComputedStyle(document.body))()

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css)
    }, 1)
  }
}

/** @description check if is dark and get theme of system */
export const getSystemTheme = (e) => {
  if (!e) e = window.matchMedia(MEDIA)
  return e.matches ? 'dark' : 'light'
}
