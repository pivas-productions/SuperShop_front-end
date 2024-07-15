'use client'
import React from 'react'
import { CiTrash } from 'react-icons/ci'

const DeleteProduct = ({type, id}) => {
    const DeleteProductId = () => {
        console.log('add to favorite')
    }
    return (
        <button onClick={DeleteProductId}>
            <CiTrash className='w-8 h-8 cursor-pointer hover:text-red-500' />
        </button>
    )
}

export default DeleteProduct