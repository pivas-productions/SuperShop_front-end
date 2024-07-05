'use client'
import { useEffect, useState, useTransition } from 'react';
import { FaFilter } from 'react-icons/fa';
import { BsGrid, BsGrid1X2 } from "react-icons/bs";
import { Select } from '../ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';

const sorting_type = [
    { value: 'by-popularity', label: 'By popularity' },
    { value: 'by-stocks', label: 'The size of the discount' },
    { value: 'in-asc-prices', label: 'By increasing price' },
    { value: 'in-desc-prices', label: 'In descending prices' }
]

const ToolbarCatalog = () => {
    const [expressDelivery, setExpressDelivery] = useState(false);
    const [catalogView, setCatalogView] = useState('list');
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
        if(watchedFields){
        form.handleSubmit(onSubmit);
        }
    }, [watchedFields, form]);

    return (
        <section className="toolbar bg-white">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className=" container mx-auto flex items-center justify-between py-4">
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-gray-700">
                                <FaFilter />
                                <span>Filters</span>
                            </button>
                            <div className="relative">
                                <FormField control={form.control} name="sorting_type" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Select {...field} value={field.value} className="text-sm" disabled={isPending} select_name={"sorting_type"} items={sorting_type} />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />

                                {/* Add dropdown for sorting options here */}
                            </div>
                        </div>
                        <span className="text-gray-700">12 478 продуктов</span>

                        <div className="flex items-center space-x-4">
                            {/* <label className="flex items-center space-x-2"> */}
                                {/* <span>Express delivery</span> */}
                                {/* <input
                                    type="checkbox"
                                    checked={expressDelivery}
                                    onChange={() => setExpressDelivery(!expressDelivery)}
                                    className="toggle-checkbox appearance-none w-8 bg-gray-400/20 rounded-full h-5 after:border-black after:rounded-full relative after:border-2 after:h-5 after:w-5 after:block outline-none cursor-pointer transition-all after:transition-all checked:after:border-8 checked:after:translate-x-3"
                                /> */}
                                <FormField control={form.control} name="express_delivery" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex items-center justify-center space-x-2'>
                                        <FormLabel className='!text-base'>Express delivery</FormLabel>

                                        <FormControl>
                                            <input
                                                type="checkbox"
                                                {...field}
                                                value={field.value}
                                                disabled={isPending}
                                                checked={expressDelivery}
                                                onChange={() => setExpressDelivery(!expressDelivery)}
                                                className="toggle-checkbox appearance-none w-10 bg-gray-400/20 rounded-full h-6 after:border-black after:rounded-full relative after:border-2 after:h-6 after:w-6 after:block outline-none cursor-pointer transition-all after:transition-all checked:after:border-8 checked:after:translate-x-5"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            {/* </label> */}
                            <div className="flex items-center space-x-2">
                                <span>Type of catalog</span>
                                <button
                                    className={`${catalogView === 'list' ? 'text-black' : 'text-gray-400'
                                        }`}
                                    onClick={() => setCatalogView('list')}
                                >
                                    <BsGrid1X2 />
                                </button>
                                <button
                                    className={`${catalogView === 'grid' ? 'text-black' : 'text-gray-400'
                                        }`}
                                    onClick={() => setCatalogView('grid')}
                                >
                                    <BsGrid size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </section>
    );
};

export default ToolbarCatalog