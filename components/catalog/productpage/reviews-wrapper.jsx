import { ReviewCard, ReviewCardContent, ReviewCardHeader, ReviewCardPhoto } from '@/components/ui/review-card'
import React from 'react'

const ReviewsWrapper = () => {
    const items = {
        photo: [
            {
                name: 'INCANTO milan inspiration bianco1',
                photo: '/media/item/main_pic.webp'
            },
            {
                name: 'INCANTO milan inspiration bianco2',
                photo: '/media/item/two_pic.webp'
            }
        ]
    }
    return (
        <ReviewCard >
            <ReviewCardHeader src_avatar={'/hover_image.jpg'} />
            <ReviewCardContent />
            <ReviewCardPhoto items={items} route={process.env.REACT_APP_API_URL_CLIENT}/>
        </ReviewCard>
    )
}

export default ReviewsWrapper