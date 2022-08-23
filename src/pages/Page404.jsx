import React from 'react'
import Link from '../components/link'

const Page404 = () => {
  return (
    <div>
      <h2>Server Error: 404 (status code)</h2>
      <span>Page not found</span>
      <Link href='/'>
        <span>Go to home</span>
      </Link>
    </div>
  )
}

export default Page404
