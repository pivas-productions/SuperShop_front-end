'use client'
import React, { useEffect, useRef, useState, useTransition } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Slider } from 'antd';

const sorting_type = [
    { value: 'by-popularity', label: 'By popularity' },
    { value: 'by-stocks', label: 'The size of the discount' },
    { value: 'in-asc-prices', label: 'By increasing price' },
    { value: 'in-desc-prices', label: 'In descending prices' }
]

const FiltersBar = ({ ClosedDialog }) => {
    const CloseButton = useRef(null);
    const [withDiscount, setWithDiscount] = useState(false);
    const [inStock, setInStock] = useState(false);
    const [isPending, startTransition] = useTransition();
    const defValue = {
        sorting_type: sorting_type.find((item) => item.value === 'by-popularity'),
        express_delivery: false
    }
    const form = useForm({
        // resolver: zodResolver(ProfileSchema),
        defaultValues: defValue
    });
    const watchedFields = form.watch();

    const onSubmit = (values) => {
        console.log(values)
        startTransition(() => {
            //     updateuserprofile(values, items.id).then((data) => {
            //         if (data.success) {
            //             setSuccess(data.success);
            //         }
            //         if (data?.error)
            //             setError(data.error);
            //     });
        });
    };

    useEffect(() => {
        // Автоматически отправляем форму при изменении любого поля
        console.log(watchedFields)
        if (watchedFields) {
            form.handleSubmit(onSubmit);
        }
    }, [watchedFields, form]);

    return (
        <Dialog defaultOpen={true} modal={true} onOpenChange={ClosedDialog}>
            <DialogContent className="bg-white text-black rounded-md fixed flex flex-col top-0 z-30 w-[40rem] animate-delay-[-0.2s] transition duration-300 ease-in-out animate-duration-[2s] min-h-screen animate-[filters-show] shadow-[#0b2132] shadow-xl ">
                <DialogTitle className="w-full px-6 py-6 rounded-t-md flex justify-between" >
                    <h2 className='text-2xl font-semibold'>Filters</h2>
                    <DialogClose />
                </DialogTitle>
                <section className="filters_content px-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                            <FormField control={form.control} name="withDiscount" render={({ field }) => (
                                <FormItem className='!space-y-0 flex items-center space-x-6'>
                                    <FormControl>
                                        <input
                                            type="checkbox"
                                            {...field}
                                            value={field.value}
                                            disabled={isPending}
                                            checked={withDiscount}
                                            onChange={() => setWithDiscount(!withDiscount)}
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
                                            checked={inStock}
                                            onChange={() => setInStock(!inStock)}
                                            className="toggle-checkbox appearance-none w-10 bg-gray-400/20 rounded-full h-6 after:border-black after:rounded-full relative after:border-2 after:h-6 after:w-6 after:block outline-none cursor-pointer transition-all after:transition-all checked:after:border-8 checked:after:translate-x-5"
                                        />
                                    </FormControl>
                                    <FormLabel className='!text-lg'>in stock</FormLabel>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="inStock" render={({ field }) => (
                                <FormItem className='text-center !space-y-6 space-x-6'>
                                    <FormLabel className='!text-lg'>Price Adjust</FormLabel>
                                    <FormControl>
                                        <Slider range defaultValue={[20, 50]} draggableTrack={true} tooltip={{ open: true }} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </form>
                    </Form>
                </section>
                <footer className="w-full px-6 py-6 rounded-t-md flex justify-center items-end flex-grow">
                    <Button type="button" size='xl' >
                        <span className="exmUS text-xl">Показать 1 798 товаров</span>
                    </Button>
                </footer>
            </DialogContent>
        </Dialog>
        // <Dialog modal={true} defaultOpen={true} className='absolute top-0 left-7'>
        //     <DialogContent forceMount={true}>
        //         <aside className="fAp6r tmevu" style={{ zIndex: 10000 }} slim="">

        //             <section className="RXPH5" is-modal-active="true">
        //                 <header className="LnYb7">
        //                     <DialogTitle>
        //                         <h2 id='filters_bar_title' className="ahRj5">фильтры</h2>
        //                     </DialogTitle>
        //                     <DialogClose />
        //                 </header>

        //                 <div className="uzax+ +Rl8j">
        //                     <div className="_0cvv- yF6Lq">
        //                         <label className="a3Ia7 UiN5j IJk-8" htmlFor="ga-uuid-2">
        //                             <span className="_0KseQ">
        //                                 <div className="Pr7Ph">
        //                                     <picture className="ga-image-responsive Ao2TZ B3nJu" image="[object Object]" class-name="zQyw-">
        //                                         <source srcSet="https://pcdn.goldapple.ru/p/e/filter_63778d791503fa6943dd0e33/web/6f726967696e616c2e706e678db76fd61602632fullhd.webp" type="image/webp" />
        //                                         <source srcSet="https://pcdn.goldapple.ru/p/e/filter_63778d791503fa6943dd0e33/web/6f726967696e616c2e706e678db76fd61602632fullhd.png" type="image/png" />
        //                                         <img src="https://pcdn.goldapple.ru/p/e/filter_63778d791503fa6943dd0e33/web/6f726967696e616c2e706e678db76fd61602632.png" loading="lazy" alt='' className="h5UOj zQyw-" />
        //                                     </picture>экспресс-доставка
        //                                 </div>
        //                             </span>
        //                             <span className="FAt08">
        //                                 <input type="checkbox" name="expressdelivery" className="+yhJf" id="ga-uuid-2" />
        //                             </span>
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="uzax+ +Rl8j">
        //                     <div className="_0cvv- yF6Lq">
        //                         <label className="a3Ia7 UiN5j IJk-8" htmlFor="ga-uuid-3">
        //                             <span className="_0KseQ">
        //                                 <div className="Pr7Ph">со скидкой</div>
        //                             </span>
        //                             <span className="FAt08">
        //                                 <input type="checkbox" name="customerdiscounts" className="+yhJf" id="ga-uuid-3" />
        //                             </span>
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="uzax+ +Rl8j">
        //                     <div className="_0cvv- yF6Lq">
        //                         <label className="a3Ia7 UiN5j IJk-8" htmlFor="ga-uuid-4">
        //                             <span className="_0KseQ">
        //                                 <div className="Pr7Ph">в наличии</div>
        //                             </span>
        //                             <span className="FAt08">
        //                                 <input type="checkbox" name="storestocks" className="+yhJf" id="ga-uuid-4" />
        //                             </span>
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="uzax+ +Rl8j">
        //                     <div className="lgG1Y _37mTp">
        //                         <input type="hidden" value="135" />
        //                         <input type="hidden" value="106304" />
        //                         <div className="ak2-g">
        //                             <div className="pic7+">от
        //                                 <div className="YK8mF">135 <span>₽</span></div>
        //                             </div>
        //                             <div className="_3xzwJ">до
        //                                 <div className="YK8mF">106 304 <span>₽</span></div>
        //                             </div>
        //                         </div>
        //                         <div className="DIJLA">
        //                             <div className="DBc77"></div>
        //                             <div className="yQGPo"></div>
        //                             <button type="button" className="okz0e QRrEh" ></button>
        //                             <button type="button" className="okz0e QRrEh" ></button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="uzax+ lAAqu +Rl8j">
        //                     <div className="zANNT v8N57">
        //                         <button type="button" className="okz0e ELUrx zeBnb HHp5Q">
        //                             <i className="DucQu XfX5q RTAMO" style={{ width: 10 + 'px', height: 10 + 'px' }}>
        //                                 <svg viewBox="0 0 11 11"><path strokeWidth="1.25" d="M0 5.5h11M5.5 11V0"></path></svg>
        //                             </i>
        //                             <div className="pheOq">бренд</div>
        //                         </button>
        //                         <button type="button" className="okz0e ELUrx zeBnb _8VOqy" style={{ display: 'none' }}>сбросить</button>
        //                     </div>
        //                 </div>
        //                 <div className="uzax+ lAAqu +Rl8j">
        //                     <div className="zANNT v8N57">
        //                         <button type="button" className="okz0e ELUrx zeBnb HHp5Q">
        //                             <i className="DucQu XfX5q RTAMO" style={{ width: 10 + 'px', height: 10 + 'px' }}>
        //                                 <svg viewBox="0 0 11 11"><path strokeWidth="1.25" d="M0 5.5h11M5.5 11V0"></path></svg>
        //                             </i>
        //                             <div className="pheOq">страна бренда</div>
        //                         </button>
        //                         <button type="button" className="okz0e ELUrx zeBnb _8VOqy" style={{ display: 'none' }}>сбросить</button>
        //                     </div>
        //                 </div>

        //                 <div className="A6+so">
        //                     <button type="button" className="okz0e xjTL2 QVGGV L2D59 i4hIF">
        //                         <span className="HesLR">
        //                             <span className="exmUS">Показать 1 798 товаров</span>
        //                             <span className="_3CSPJ" style={{ display: 'none' }}>
        //                                 <div className="_5yi9H">
        //                                     <div className="tXRSE"></div>
        //                                     <div className="tXRSE"></div>
        //                                     <div className="tXRSE"></div>
        //                                 </div>
        //                             </span>
        //                         </span>
        //                     </button>
        //                 </div>
        //             </section>
        //         </aside>
        //     </DialogContent >
        // </Dialog >
    )
}

export default FiltersBar