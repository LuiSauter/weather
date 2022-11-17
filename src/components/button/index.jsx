import React from 'react'

const Button = ({ children, onClick = () => {}, label = 'button', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`p-2 ml-2 bg-transparent rounded-md text-slate-900 dark:text-white hover:bg-slate-200 hover:dark:bg-slate-800 ring-teal-500 active:ring-2 relative sm:p-2 sm:text-lg md:text-xl
      after:w-max after:absolute after:top-10 after:-right-1/2 after:dark:bg-slate-800 after:bg-slate-200 after:text-base after:leading-snug after:rounded-md after:py-1 after:border after:dark:border-slate-600 after:content-[attr(aria-label)] after:px-3 after:hidden hover:after:flex after:animate-tooltip md:after:top-12`}
    >
      {children}
    </button>
  )
}

export default Button
