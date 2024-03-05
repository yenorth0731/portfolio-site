import { Props } from 'next/script'
import React from 'react'

const Button = (props:{text:string}) => {
  return (
    <button className='rounded pr-10 pl-10 py-3 text-sm md:text-base font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out  text-blue-50 bg-blue-900 hover:bg-blue-500'>{props.text}</button>
    )
}

export default Button