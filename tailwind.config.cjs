/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        menuAnimation: {
          '0%': { transform: 'translateX(100%) scale(0)' },
          '100%': { transform: 'translateX(0%) scale(1)' }
        },
        hideAnimation: {
          '0%': { transform: 'translateX(0%) scale(1)' },
          '100%': { transform: 'translateX(100%) scale(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        tooltip: {
          '0%': { opacity: 0, transform: 'translateY(-100%) scale(0)' },
          '100%': { opacity: 1, transform: 'translateY(0%) scale(1)' }
        }
      },
      animation: {
        menuAnimation: 'menuAnimation 0.2s ease-in-out',
        hideAnimation: 'hideAnimation 0.5s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
        tooltip: 'tooltip 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.2s both'
      }
    }
  },
  plugins: []
}
