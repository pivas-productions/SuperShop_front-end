import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'
import { MdModeEdit } from 'react-icons/md'
import { Button } from '../ui/button'

const ChangePaymentMethod = () => {
    return (
        <Dialog modal={true} >
            <DialogTrigger asChild> 
                <MdModeEdit className='text-xl relative bottom-1 left-16' />
            </DialogTrigger>
            <DialogContent className="bg-white text-black rounded-md fixed flex flex-col top-0 z-30 w-[40rem] animate-delay-[-0.2s] transition duration-300 ease-in-out animate-duration-[2s] min-h-screen animate-[filters-show] shadow-[#0b2132] shadow-xl ">
                <DialogTitle className="w-full px-6 py-6 rounded-t-md flex justify-between" >
                    <span className='text-2xl font-semibold'>Способ оплаты</span>
                    <DialogClose />
                </DialogTitle>
                <DialogDescription />
                <section className="filters_content px-8 py-10">
                    {/* <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                            <FormField control={form.control} name="withDiscount" render={({ field }) => (
                                <FormItem className='!space-y-0 flex items-center space-x-6'>
                                    <FormControl>
                                        <input
                                            type="checkbox"
                                            {...field}
                                            value={field.value}
                                            disabled={isPending}
                                            className="toggle-checkbox appearance-none w-10 bg-gray-400/20 rounded-full h-6 after:border-black after:rounded-full relative after:border-2 after:h-6 after:w-6 after:block outline-none cursor-pointer transition-all after:transition-all checked:after:border-8 checked:after:translate-x-5"
                                        />
                                    </FormControl>
                                    <FormLabel className='!text-lg'>with discount</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="inStock" render={({ field }) => (
                                <FormItem className='!space-y-0 flex items-center space-x-6'>
                                    <FormControl>
                                        <input
                                            type="checkbox"
                                            {...field}
                                            value={field.value}
                                            disabled={isPending}
                                            className="toggle-checkbox appearance-none w-10 bg-gray-400/20 rounded-full h-6 after:border-black after:rounded-full relative after:border-2 after:h-6 after:w-6 after:block outline-none cursor-pointer transition-all after:transition-all checked:after:border-8 checked:after:translate-x-5"
                                        />
                                    </FormControl>
                                    <FormLabel className='!text-lg'>in stock</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="price" render={({ field }) => (
                                <FormItem className='text-center !space-y-6 space-x-6'>
                                    <FormLabel className='!text-lg'>Price Adjust</FormLabel>
                                    <FormControl>
                                        <Slider {...field} value={field.value} max={1000} disabled={isPending} range draggableTrack={true} tooltip={{ open: true }} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                        </form>
                    </Form> */}
                </section>
                <footer className="w-full px-6 py-6 rounded-t-md flex justify-center items-end flex-grow">
                    <Button type="button" size='xl' > 
                        {/*  onClick={form.handleSubmit(onSubmit)} */}
                        <span className="exmUS text-xl">Применить</span>
                    </Button>
                </footer>
            </DialogContent>
        </Dialog>
    )
}

export default ChangePaymentMethod