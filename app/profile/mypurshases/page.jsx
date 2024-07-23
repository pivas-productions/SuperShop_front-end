import { OrderCard, OrderCardContent, OrderCardItem, OrderCardLinkPhoto } from '@/components/ui/order-card'
import React, { Suspense } from 'react'

export default async function FavoritePage() {
    const items = [{
        order_number: "21241-21",
        order_date: "12.01.2014",
        order_status: "Canceled",
        order_cost: "1234",
        item: [
            {
                item_src: "/no_photo.jpg",
                item_status: "Canceled",
                item_category: "penisy",
                item_id: "1",
                item_status_date: "15.01.2014",
                item_message: "Shit"
            }
        ]
    }]
    return (
        <div className="w-full space-y-4 pt-10 flex flex-col px-10 gap-4 bg-rose-200">
            <span className=" text-6xl  font-['Roboto'] ">Мои заказы</span>
            {Object.values(items).map((order) => {
                return (
                    <OrderCard key={order} order_date={order.order_date} order_number={order.order_number} order_cost={order.order_cost}>
                        <OrderCardContent>
                            {Object.values(order.item).map((item) => {
                                return (
                                    <OrderCardItem key={item.item_id} item={item}>
                                        <OrderCardLinkPhoto href={"/catalog/" + item.item_category + "/" + item.item_id} src_main={item.item_src} />
                                    </OrderCardItem>
                                )
                            })
                            }
                        </OrderCardContent>
                    </OrderCard>
                )
            })}
        </div>
    )
}
