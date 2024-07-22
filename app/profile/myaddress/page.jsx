import { AddressCard, AddressCardContent } from '@/components/ui/address-card'
import React from 'react'


const adr = {
    address: "Республика Крым, Симферополь, Киевская улица, 83",
    default_state: true
}

export default async function ProfileAddress() {
    return (
        <div className="Profile  w-full space-y-4 pt-10 flex flex-col px-10 gap-4 bg-rose-200">
            <div className=" text-6xl  font-['Roboto'] ">Мои адреса</div>
            <AddressCard>
                <AddressCardContent address={adr.address} default_state={adr.default_state}/>
            </AddressCard>
            <AddressCard>
                <AddressCardContent address={adr.address} default_state={false}/>
            </AddressCard>
        </div>
    )
}