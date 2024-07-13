import { RateProgress } from '@/components/ui/rate-progress'
import React from 'react'
const RateProgressBar = () => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-12 place-content-center place-items-center'>
                <span className='col-span-2'>5 звезд</span>
                <RateProgress rateAll={2629} className={'col-span-10'} rateThis={2276}/>
            </div>
            <div className='grid grid-cols-12 place-items-center'>
                <span className='col-span-2'>4 звезд</span>
                <RateProgress rateAll={2629} className={'col-span-10'} rateThis={169}/>
            </div>
            <div className='grid grid-cols-12 place-items-center'>
                <span className='col-span-2'>3 звезд</span>
                <RateProgress rateAll={2629} className={'col-span-10'} rateThis={40}/>
            </div>
            <div className='grid grid-cols-12 place-items-center'>
                <span className='col-span-2'>2 звезд</span>
                <RateProgress rateAll={2629} className={'col-span-10'} rateThis={44}/>
            </div>
            <div className='grid grid-cols-12 place-items-center'>
                <span className='col-span-2'>1 звезд</span>
                <RateProgress rateAll={2629} className={'col-span-10'} rateThis={100}/>
            </div>
            
            
            
            
            
        </div>
    )
}

export default RateProgressBar
