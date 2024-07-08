import NoData from '@/components/no-data';
import Image from 'next/image'
import React from 'react'

const CatalogNamePage = async ({ params }) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/categories/${params.catalog_slug}/items?format=json`);
    const items = await res.json();
    console.log(items)
    if(!(items?.count))
        return (
            <div className='col-span-full row-span-3 place-content-center'>
                <NoData />
            </div>
        )
    items.results.push(    {
        id: 3,
        name: 'LVG big cherry2',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 4,
        name: 'LVG big cherry3',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 5,
        name: 'LVG big cherry4',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 6,
        name: 'LVG big cherry5',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 7,
        name: 'LVG big cherry6',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 8,
        name: 'LVG big cherry7',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 9,
        name: 'LVG big cherry8',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 10,
        name: 'LVG big cherry9',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 11,
        name: 'LVG big cherry10',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 12,
        name: 'LVG big cherry11',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 13,
        name: 'LVG big cherry12',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 14,
        name: 'LVG big cherry13',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 15,
        name: 'LVG big cherry14',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 16,
        name: 'LVG big cherry15',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 17,
        name: 'LVG big cherry16',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 18,
        name: 'LVG big cherry18',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 19,
        name: 'LVG big cherry18',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
      items.results.push(    {
        id: 20,
        name: 'LVG big cherry19',
        description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
          '\r\n' +
          'таблица размеров:\r\n' +
          'размер | обхват груди\r\n' +
          'XS (42) | 80-85\r\n' +
          'S (44) | 85-90\r\n' +
          'M (46) | 90-95\r\n' +
          'L (48) | 95-100\r\n' +
          'подробные характеристики\r\n' +
          'тип продукта\r\n' +
          'лиф\r\n' +
          'для кого\r\n' +
          'женский\r\n' +
          'материал\r\n' +
          'нейлон, спандекс',
        price: '4170.00',
        rating: '0.0',
        order_count: 0,
        discount: '0.00',
        price_with_discount: '4170.00',
        general_photo_one: null,
        general_photo_two: 6,
        categories: [Array]
      })
    return (
        <>
            {items.results?.map((item) => {
                return (
                    <div key={item.id} className="ProductCard first:row-span-2 first:col-span-2 [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n+1)]:col-span-2 [&:nth-child(10n+8)]:row-span-2 [&:nth-child(10n+8)]:col-span-2 w-full pb-5 min-h-96 bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                        <div className="CardPhoto group relative w-full h-4/5">
                            <Image fill className="Image delay-75 duration-500 hover:opacity-0 transition-all w-96 h-96 rounded-lg" src="/435x366.png" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />
                            <Image fill className="Image opacity-0 hover:opacity-100 group-has-[:hover]:block transition-opacity duration-1000 ease-out hidden w-96 h-96 rounded-lg" src="/hover_image.jpg" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />
                        </div>
                        <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                            <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{item.name}</div>
                            <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${item.price}</div>
                        </div>
                    </div>
                )
            })}
            {/* <div className="ProductCard row-span-2 col-span-2 w-full pb-5 min-h-96 bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5 bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5 bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard row-span-2 col-span-2 w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div>
            <div className="ProductCard w-full min-h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                <div className="CardPhoto relative w-full h-4/5">
                    <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                </div>
                <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                    <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{'item.name'}</div>
                    <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{'item.description'}</div>
                    <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${'item.price'}</div>
                </div>
            </div> */}
        </>
    )
}

export default CatalogNamePage