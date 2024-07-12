import { ReviewCard, ReviewCardContent, ReviewCardHeader, ReviewCardPhoto } from '@/components/ui/review-card'
import React from 'react'

const ReviewsWrapper = () => {
    return (
        <ReviewCard >
            <ReviewCardHeader src_avatar={'/hover_image.jpg'} />
            <ReviewCardContent />
            <ReviewCardPhoto />
        </ReviewCard>
    )
}

export default ReviewsWrapper