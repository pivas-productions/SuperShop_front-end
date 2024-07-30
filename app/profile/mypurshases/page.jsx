import { OrderCard, OrderCardContent, OrderCardItem, OrderCardLinkPhoto } from '@/components/ui/order-card'
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@/components/ui/tabs'
import { cookies } from 'next/headers';
import React, { Suspense } from 'react'

export default async function FavoritePage() {
    const cookieStore = cookies();
    const cookieString = cookieStore.getAll().map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/orders/`, {
        headers: {
            'Content-type': 'application/json',
            'Cookie': cookieString
        },
        credentials: 'include',
        next: {

        }
    });
    let items = await res.json();
    items = items?.results
    // const items = [{
    //     order_number: "21241-21",
    //     order_date: "12.01.2014",
    //     order_status: "Canceled",
    //     order_cost: "1234",
    //     item: [
    //         {
    //             item_src: "/no_photo.jpg",
    //             item_status: "Canceled",
    //             item_category: "penisy",
    //             item_id: "1",
    //             item_status_date: "15.01.2014",
    //             item_message: "Shit"
    //         }
    //     ]
    // }]
    return (
        <div className="w-full space-y-4 pt-10 flex flex-col px-10 gap-4 bg-rose-200">
            <span className=" text-6xl  font-['Roboto'] ">Мои заказы</span>
            <TabsRoot defaultValue={'active'}>
                <TabsList >
                    <TabsTrigger value="active" className="!rounded-tl-none mr-2">
                        Активные заказы
                    </TabsTrigger>
                    <TabsTrigger value="archive" className="!rounded-tl-none ml-2">
                        Архив заказов
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="w-full flex-col">
                    {items && Object.values(items).map((order) => {
                        if (order.status != 'received' || order.status != 'canceled' || order.status != 'returned')
                            return (
                                <OrderCard key={order.id} order_date={order.updated_at} order_number={order.id} order_cost={order.total_cost}>
                                    <OrderCardContent >
                                        {Object.values(order.items).map((item) => {
                                            return (
                                                <OrderCardItem key={item.item_id} item={item} item_status={order.status}>
                                                    <OrderCardLinkPhoto href={"/catalog/" + item.category_slug?.[0] + "/" + item.item_id} src_main={item.item_photo} />
                                                </OrderCardItem>
                                            )
                                        })
                                        }
                                    </OrderCardContent>
                                </OrderCard>
                            )
                    })}
                </TabsContent>
                <TabsContent value="archive">
                    {items && Object.values(items).map((order) => {
                        if (order.status === 'received' || order.status === 'canceled' || order.status === 'returned')
                            return (
                                <OrderCard key={order.id} order_date={order.updated_at} order_number={order.id} order_cost={order.total_cost}>
                                    <OrderCardContent >
                                        {Object.values(order.items).map((item) => {
                                            return (
                                                <OrderCardItem key={item.item_id} item={item} item_status={order.status}>
                                                    <OrderCardLinkPhoto href={"/catalog/" + item.category_slug?.[0] + "/" + item.item_id} src_main={item.item_photo} />
                                                </OrderCardItem>
                                            )
                                        })
                                        }
                                    </OrderCardContent>
                                </OrderCard>
                            )
                    })}
                </TabsContent>
            </TabsRoot>
        </div>
    )
}
