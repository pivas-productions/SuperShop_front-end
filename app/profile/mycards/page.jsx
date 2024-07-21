import {CardForCard,  CardForCardContent } from '@/components/ui/card_for_card'
import React from 'react'

export default async function ProfileAddress() {
    return (
        <div className="Profile  w-full space-y-4 pt-10 flex flex-col px-10 gap-4 bg-rose-200">

            <div className=" text-6xl  font-['Roboto'] ">Мои карты</div>
        <CardForCard>
            <CardForCardContent default_state={true}/>
        </CardForCard>
        <CardForCard>
            <CardForCardContent />
        </CardForCard>
        </div>

    )
}