'use client'
import React from 'react'
import { CiShare2 } from 'react-icons/ci'

const ShareMenu = () => {
    const shareMenuOpen = () => {
        console.log('share menu open')
    }
  return (
    <button  onClick={shareMenuOpen}>
        <CiShare2 className='w-8 h-8 cursor-pointer hover:text-gray-500' />
    </button>
  )
}

export default ShareMenu