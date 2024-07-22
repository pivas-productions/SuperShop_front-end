'use client'
import React, { useTransition } from 'react'
import { CiTrash } from 'react-icons/ci'

const DeleteProduct = ({ fetch_route, type, id }) => {
    const [isPending, startTransition] = useTransition();

    const DeleteProductId = (e) => {
        e.preventDefault()
        if (type === 'cart') {
            startTransition(async () => {
                try {
                    const send_data = {
                        ids: [id],
                    }
                    console.log('send_data', send_data)
                    let response = await fetch(`${fetch_route}/api/baskets/delete-items/`, {
                        method: "DELETE",
                        body: JSON.stringify(send_data),
                        headers: {
                            'Content-type': 'application/json'
                        },
                        credentials: 'include'
                    });
                    console.log(response, 'response')
                    console.log(response.status, response.status === 201, response.status == 500)
                    // const data = await response.json();
                    console.log(response.statusText)
                    location.reload();
                } catch (error) {
                    // Обработка ошибки
                }
            });
        }

        console.log('deleteProduct')
    }
    return (
        <button onClick={DeleteProductId} disabled={isPending}>
            <CiTrash className='w-8 h-8 cursor-pointer hover:text-red-500' />
        </button>
    )
}

export default DeleteProduct