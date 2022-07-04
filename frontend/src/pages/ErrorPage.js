import React from 'react'
import { useLocation } from 'react-router-dom'

function ErrorPage() {
    const location = useLocation()
    console.log(location)
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage