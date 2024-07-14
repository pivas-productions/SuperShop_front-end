import getItems from '@/actions/getItems';
import CatalogItemsWrapper from '@/components/catalog/catalog-items-wrapper';
import NoData from '@/components/no-data';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const CatalogNamePage = async ({ params }) => {
  const route = `${process.env.REACT_APP_API_URL_CLIENT}/api/categories/${params.catalog_slug}/items?populate=general_photos&format=json`;
  const items = await getItems({ pageParam: 1, catalog_slug: params.catalog_slug, route: process.env.REACT_APP_API_URL + `/api/categories/${params.catalog_slug}/items?populate=general_photos&format=json`});

  if (items.length === 0)
    return (
      <div className='col-span-full row-span-3 place-content-center'>
        <NoData />
      </div>
    )
  // items.results.push({
  //   id: 3,
  //   name: 'LVG big cherry2',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 4,
  //   name: 'LVG big cherry3',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 5,
  //   name: 'LVG big cherry4',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 6,
  //   name: 'LVG big cherry5',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 7,
  //   name: 'LVG big cherry6',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 8,
  //   name: 'LVG big cherry7',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 9,
  //   name: 'LVG big cherry8',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 10,
  //   name: 'LVG big cherry9',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 11,
  //   name: 'LVG big cherry10',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 12,
  //   name: 'LVG big cherry11',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 13,
  //   name: 'LVG big cherry12',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 14,
  //   name: 'LVG big cherry13',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 15,
  //   name: 'LVG big cherry14',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 16,
  //   name: 'LVG big cherry15',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 17,
  //   name: 'LVG big cherry16',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 18,
  //   name: 'LVG big cherry18',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 19,
  //   name: 'LVG big cherry18',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  // items.results.push({
  //   id: 20,
  //   name: 'LVG big cherry19',
  //   description: 'Базовый лиф в новом исполнении. Полупрозрачный верх с вырезом отлично подойдёт под многослойные образы. Поддержка обеспечена за счет толстой резинки.\r\n' +
  //     '\r\n' +
  //     'таблица размеров:\r\n' +
  //     'размер | обхват груди\r\n' +
  //     'XS (42) | 80-85\r\n' +
  //     'S (44) | 85-90\r\n' +
  //     'M (46) | 90-95\r\n' +
  //     'L (48) | 95-100\r\n' +
  //     'подробные характеристики\r\n' +
  //     'тип продукта\r\n' +
  //     'лиф\r\n' +
  //     'для кого\r\n' +
  //     'женский\r\n' +
  //     'материал\r\n' +
  //     'нейлон, спандекс',
  //   price: '4170.00',
  //   rating: '0.0',
  //   order_count: 0,
  //   discount: '0.00',
  //   price_with_discount: '4170.00',
  //   general_photo_one: null,
  //   general_photo_two: 6,
  //   categories: [Array]
  // })
  return (
    <>
      <CatalogItemsWrapper items={items} catalog_slug={params.catalog_slug} route={route} fetch_key={'catalog_' + params.catalog_slug}/>
    </>
  )
}

export default CatalogNamePage