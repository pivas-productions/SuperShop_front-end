import React from 'react'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'
import { CiCreditCard1 } from 'react-icons/ci'
import { FaMapMarkerAlt } from 'react-icons/fa'

const AddNewMehod = React.forwardRef(({ children, className, title, type, ...props }, ref) => {

    return (
        <Dialog modal={true} className={className}  {...props} ref={ref} >
            <DialogTrigger asChild>
                <div className="radio-item">
                    <button
                        className="flex w-full justify-center items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                hover:border-pink-300 group transition-colors duration-200
                                "
                    >
                        {type === 'new_card' ? (
                            <>
                                <CiCreditCard1 className='text-3xl group-hover:text-pink-300 transition-colors duration-200' />
                                <span className="Mir0375 border border-black group-hover:border-pink-300 p-2 rounded-3xl transition-colors duration-200 ">Добавить новую карту</span>
                            </>
                        ) : (
                            <>
                                <FaMapMarkerAlt className='text-3xl group-hover:text-pink-300 transition-colors duration-200' />
                                <span className="Mir0375 border border-black group-hover:border-pink-300 p-2 rounded-3xl transition-colors duration-200 ">Добавить новый адрес</span>
                            </>
                        )
                        }
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent variant={'addDialog'}>
                <DialogTitle className="w-full rounded-t-md flex justify-between" >
                    <span className='text-2xl font-semibold'>{title}</span>
                    <DialogClose className={'rounded-full'} />
                </DialogTitle>
                <DialogDescription />
                <section className=" pt-10">
                    {children}
                </section>
            </DialogContent>
        </Dialog>
    )
});
AddNewMehod.displayName = "AddNewMehodForCart";

export { AddNewMehod, };