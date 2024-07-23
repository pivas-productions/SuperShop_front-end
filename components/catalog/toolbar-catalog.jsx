'use client'
import { useEffect, useRef, useState, useTransition } from 'react';
import { FaFilter } from 'react-icons/fa';
import { BsGrid, BsGrid1X2 } from "react-icons/bs";
import { Select } from '../ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import FiltersBar from './filters-bar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const sorting_type = [
    { value: 'popularity', label: 'By popularity' },
    { value: 'discount', label: 'The size of the discount' },
    { value: 'price_asc', label: 'By increasing price' },
    { value: 'price_desc', label: 'In descending prices' }
]

const ToolbarCatalog = ({ route }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();
    const [countProducts, setCountProducts] = useState(null);


    const [catalogView, setCatalogView] = useState('list');
    const [filtersView, setFiltersView] = useState(false);
    const [isPending, startTransition] = useTransition();
    const FiltersButton = useRef(null)

    useEffect(() => {
        let category_route;
        if (pathname.replace('/catalog', '') != '') {
            category_route = 'categories' + pathname.replace('/catalog', '');
        } else {
            category_route = ''
        }
        // Выполнение запроса fetch на основе выбранной категории
        let url_search = ''
        for (const [key, value] of searchParams.entries()) {
            url_search += `&${key}=${value}`;
        }
        fetch(`${route}/api/${category_route}/items?format=json` + url_search, {
            next: { revalidate: 100 } // 3600
        })
            .then(response => response.json())
            .then(data => {
                setCountProducts(data.length)
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });
    }, [pathname, route, searchParams]);

    useEffect(() => {
        if (searchParams.get('view_type')) {
            setCatalogView(searchParams.get('view_type'))
        } else {
            setCatalogView('list')
        }
    }, [searchParams]);

    const defValue = {}
    if (searchParams?.get('sort')) {
        defValue.sorting_type = sorting_type.find((item) => item.value === searchParams?.get('sort'));

    } else {
        defValue.sorting_type = sorting_type.find((item) => item.value === 'popularity');
    }
    if (searchParams?.get('view_type')) {
        defValue.view_type = searchParams?.get('view_type');

    } else {
        defValue.view_type = 'list';
    }

    const form = useForm({
        // resolver: zodResolver(ProfileSchema),
        defaultValues: defValue
    });
    const watchedFields = form.watch();

    const onSubmit = (values) => {
        // console.log(values)
        startTransition(() => {
            const params = new URLSearchParams(searchParams);
            if (values.sorting_type?.value != 'popularity') {
                params.set('sort', values.sorting_type.value);
            } else {
                params.delete('sort');
            }
            if (values.view_type != 'list') {
                params.set('view_type', values.view_type);
            } else {
                params.delete('view_type');
            }

            replace(`${pathname}?${params.toString()}`);
        });
    };

    useEffect(() => {
        // Автоматически отправляем форму при изменении любого поля
        if (watchedFields) {
            const params = new URLSearchParams(searchParams);
            if (watchedFields.sorting_type?.value != 'popularity') {
                params.set('sort', watchedFields.sorting_type.value);
            } else {
                params.delete('sort');
            }
            if (watchedFields.view_type != 'list') {
                params.set('view_type', watchedFields.view_type);
            } else {
                params.delete('view_type');
            }
            replace(`${pathname}?${params.toString()}`);
        }
    }, [watchedFields, pathname, searchParams, replace]);

    const OpenFilters = () => {
        setFiltersView(!filtersView)
    }
    const closedDialog = () => {
        setFiltersView(!filtersView)
    }
    return (
        <>
            <section className="toolbar bg-white  text-2xl lg:text-base">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className=" container px-10 2xl:px-0 mx-auto flex items-center justify-between py-4">
                            <div className="flex items-center space-x-4">
                                <button ref={FiltersButton} onClick={OpenFilters} className="flex items-center space-x-1 text-gray-700">
                                    <FaFilter />
                                    <span>Filters</span>
                                </button>
                                <div className="relative">
                                    <FormField control={form.control} name="sorting_type" render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select {...field} value={field.value} className="lg:text-sm" disabled={isPending} select_name={"sorting_type"} items={sorting_type} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                </div>
                            </div>
                            {pathname.replace('/catalog', '') != '' && <span className="text-gray-700">{countProducts} продуктов</span>}
                            <div className="flex items-center space-x-4">
                                <FormField control={form.control} name="view_type" render={({ field }) => (
                                    <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 inline-flex w-full'>
                                        <div className="justify-center items-start space-x-4 inline-flex">
                                            <FormControl>
                                                <input
                                                    type='radio'
                                                    {...field}
                                                    value={'list'}
                                                    checked={field.value === 'list'}
                                                    disabled={isPending}
                                                    className='hidden'
                                                    id='list_view'
                                                />
                                            </FormControl>
                                            <label
                                                htmlFor="list_view"
                                                className={`block w-full h-full cursor-pointer ${catalogView === 'list' ? 'text-black' : 'text-gray-400'}`}
                                            >
                                                <BsGrid1X2 size={19} className='w-full h-full' />
                                            </label>
                                            <FormControl>
                                                <input
                                                    type='radio'
                                                    {...field}
                                                    value={'grid'}
                                                    checked={field.value === 'grid'}
                                                    disabled={isPending}
                                                    className='hidden'
                                                    id='grid_view'
                                                />
                                            </FormControl>
                                            <label
                                                htmlFor="grid_view"
                                                className={`cursor-pointer ${catalogView === 'grid' ? 'text-black' : 'text-gray-400'}`}
                                            >
                                                <BsGrid size={20} />

                                            </label>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                        </div>
                    </form>
                </Form>
            </section>
            {filtersView && <FiltersBar ClosedDialog={closedDialog} />}
        </>
    );
};

export default ToolbarCatalog