import { RateUI } from '@/components/ui/rate'
import { RateProgress } from '@/components/ui/rate-progress'
import React from 'react'
const RateProgressBar = ({avgRate, maxRate, rateAll, rate_grade}) => {
    return (
        <div>
            <div className="flex justify-center gap-10 items-center">
                <RateUI disabled defaultValue={avgRate} allowHalf={true} className={'!text-yellow-600/70'} />
                <span className=' text-3xl leading-none lg:text-lg align-middle'>{avgRate} / {maxRate}</span>
            </div>
            <div className='w-full hidden lg:block '>
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
        </div>
    )
}

export default RateProgressBar
