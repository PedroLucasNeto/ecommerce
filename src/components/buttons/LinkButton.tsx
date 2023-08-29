import React from 'react'
import { Link } from 'react-router-dom'
interface LinkButtonProps{
    route: string,
    text: string
}
const LinkButton = ({route, text}: LinkButtonProps) => {
  return (
    <Link
    to={route}
    className='inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700'
  >
    {text}
  </Link>
  )
}

export default LinkButton