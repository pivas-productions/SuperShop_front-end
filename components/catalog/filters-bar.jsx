'use client'
import React, { useEffect, useRef, useState, useTransition } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Slider } from 'antd';
import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent, } from '../ui/accordion';
import { Input } from '../ui/input';
import { DialogDescription } from '@radix-ui/react-dialog';

// ['анальные стимуляторы', 'вагинальные шарики', 'вакуумный стимулятор', 'вибратор', 'вибратор-кролик', 'вибратор-мини', 'вибробелье', 'вибромассажер', 'вибропули', 'виброяйца', 'возбуждающая соль для ванн', 'возбуждающие ароматы', 'возбуждающие гели и бальзамы', 'зажимы', 'лубрикаты и смазки', 'масла для эротического массажа', 'мастурбатор', 'менструальные чаши', 'наручники и поножи', 'отчиститель для интимных игрушек', 'плети, стеки и кнуты', 'презервативы', 'ремни и протупеи', 'стимуляторы', 'страпон', 'съедобная косметика', 'тренажер кегеля', 'украшения для тела', 'фаллоимитатор', 'феромоны', 'эрекционное кольцо', 'эротические кляпы', 'эротические маски и повязки', 'эротические свечи', 'эротические наборы', 'эротические подарочные наборы', 'эротическое белье']
const vremCategoryType = ['anal stimulator', 'Vaginal balls', 'vacuum stimulator', 'vibrator', 'vibrator-coal', 'vibrator-mini', 'vibroblet', 'vibromasier', 'vibro-lane', 'vibro-yield', 'exciting baths for baths', 'Exciting aromas', 'exciting gels and balms', 'clamps', 'lubricates and lubricants', 'oil for erotic massage', 'masturbator', 'menstrual bowls', 'handcuffs and chisels', 'refined to intimate toys', 'Waps, stacks and whips', 'condoms', 'belts and producers', 'stimulants', 'strapon', 'edible cosmetics', 'Kegel Trainer', 'Decorations for the Body', 'Fallomitator', 'Feromens', 'Erective ring', 'erotic gags', 'erotic masks and dressings', 'erotic candles', 'erotic sets', 'erotic gift sets', 'erotic linen']
const FiltersBar = ({ ClosedDialog }) => {
    const [countSearch, setCountSearch] = useState(false)
    const [categoryTypeList, setCategoryTypeList] = useState(vremCategoryType.slice(0, 5))
    const [openShowAll, setOpenShowAll] = useState({
        'type': false,
    });
    const CloseButton = useRef(null);
    const [isPending, startTransition] = useTransition();
    const defValue = {
        withDiscount: false,
        inStock: false,
        price: [0, 1000]
    }
    if (vremCategoryType) {
        vremCategoryType.map((key) => {
            if (!(defValue['type'])) {
                defValue['type'] = {}
            }
            defValue['type'][key.replace(/\s/g, '_')] = false;
        })
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
        if (watchedFields) {
            form.handleSubmit(onSubmit);
        }
    }, [watchedFields, form]);

    const ShowAllCheckbox = (event) => {
        if (event.currentTarget.name === 'type') {
            openShowAll.type = !openShowAll.type;
            setCategoryTypeList(openShowAll.type ? vremCategoryType : vremCategoryType.slice(0, 5));
        }
    }
    const resetCheckboxes = (event) => {
        if (event.currentTarget.name === 'type') {
            form.setValue('type', Object.fromEntries(Object.entries(defValue['type']).map(([key, value]) => [key, value === true ? false : value])))
        }
    }
    return (
        <Dialog defaultOpen={true} modal={true} onOpenChange={ClosedDialog}>
            <DialogContent className="bg-white text-black rounded-md fixed flex flex-col top-0 z-30 w-[40rem] animate-delay-[-0.2s] transition duration-300 ease-in-out animate-duration-[2s] min-h-screen animate-[filters-show] shadow-[#0b2132] shadow-xl ">
                <DialogTitle className="w-full px-6 py-6 rounded-t-md flex justify-between" >
                    <span className='text-2xl font-semibold'>Filters</span>
                    <DialogClose />
                </DialogTitle>
                <DialogDescription />
                <section className="filters_content px-8 py-10">
                    <Form {...form}>
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
                            <AccordionRoot collapsible={true} type="single">
                                <AccordionItem value={'type'}>
                                    <AccordionTrigger>
                                        <span className="w-full">Type</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex justify-center items-center text-xl w-full mb-6'>
                                            <hr className='flex-grow w-full h-px mx-auto border-0 rounded bg-gray-500' />

                                            <button name={'type'} type="reset" onClick={resetCheckboxes} className='w-1/4 mr-4 text-sm text-gray-500'>Сбросить</button>
                                        </div>

                                        <section className={"listTypes overflow-y-auto " + (openShowAll.type ? 'h-80' : 'h-36')}>

                                            {categoryTypeList && categoryTypeList.map((name) => {
                                                return (
                                                    <FormField key={name} control={form.control} name={"type." + name.replace(/\s/g, '_')} render={({ field }) => (
                                                        <FormItem className='!space-y-0 flex items-center space-x-6'>
                                                            <FormControl>
                                                                <Input {...field} checked={field.value} value={field.value} disabled={isPending} type={'checkbox'} size='checker' />
                                                            </FormControl>
                                                            <FormLabel className='!text-lg'>{name}</FormLabel>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )} />
                                                )
                                            })}
                                        </section>
                                        {vremCategoryType?.length > 5 && (
                                            <>
                                                <button name={'type'} type="button" onClick={ShowAllCheckbox} className='flex justify-center items-center text-xl w-full mt-6'>
                                                    <span className='w-1/4 text-gray-500'>{openShowAll.type ? 'Show less' : 'Show all'}</span>
                                                    <hr className='flex-grow w-full h-px mx-auto border-0 rounded bg-gray-500' />
                                                </button>
                                            </>
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            </AccordionRoot>

                        </form>
                    </Form>
                </section>
                <footer className="w-full px-6 py-6 rounded-t-md flex justify-center items-end flex-grow">
                    <Button type="button" size='xl' onClick={form.handleSubmit(onSubmit)} >
                        <span className="exmUS text-xl">Показать {countSearch ? countSearch + ' товаров' : ''}</span>
                    </Button>
                </footer>
            </DialogContent>
        </Dialog>
    )
}

export default FiltersBar