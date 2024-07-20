'use client'
import React from 'react'
import { CiHeart } from 'react-icons/ci'

const AddToFavorite = () => {
    const addToFav = (e) => {
        e.preventDefault()
        console.log('add to favorite')
    }
    return (
        <button onClick={addToFav}>
            <CiHeart className='w-8 h-8 cursor-pointer hover:text-red-500' />
        </button>
    )
}

export default AddToFavorite