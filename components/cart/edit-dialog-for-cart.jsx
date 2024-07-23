import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'
import { MdModeEdit } from 'react-icons/md'

const EditDialogForCart = React.forwardRef(({ children, className, title, ...props}, ref) => {
    return (
        <Dialog modal={true} className={className} {...props} ref={ref} >
            <DialogTrigger asChild> 
                <button>
                    <MdModeEdit className='text-xl relative cursor-pointer bottom-1 left-16' />
                </button>
            </DialogTrigger>
            <DialogContent variant={'editDialog'}>
                <DialogTitle className="w-full rounded-t-md flex justify-between" >
                    <span className='text-2xl font-semibold'>{title}</span>
                    <DialogClose className={'rounded-full'} />
                </DialogTitle>
                <DialogDescription />
                <section className=" pt-10 overflow-y-auto smooth-scroll">
                    {children}
                </section>
            </DialogContent>
        </Dialog>
    )
});
EditDialogForCart.displayName = "EditDialogForCart";

export { EditDialogForCart, };