import CarouselWithOpenFullscreen from '@/components/carousel-with-open-fullscreen'
import { ReviewCard, ReviewCardContent, ReviewCardHeader, ReviewCardPhoto } from '@/components/ui/review-card'
import React from 'react'
import RateProgressBar from './rate-progress-bar'
import CreateReviews from './create-reviews'

const ReviewsWrapper = () => {
    const items = {
        photo: [
            {
                name: 'INCANTO milan inspiration bianco1',
                // photo: '/media/item/main_pic.webp'
                photo: '/hover_image.jpg'
            },
            {
                name: 'INCANTO milan inspiration bianco2',
                photo: '/hover_image.jpg'
                // photo: '/media/item/two_pic.webp'
            }
        ]
    }
    return (
        <>
            <div className="ReviewWrapper flex flex-col lg:flex-row gap-6">
                <CreateReviews />
                <div className="leftSide flex-1 space-y-6 order-2 lg:order-1">
                    <div className={"ReviewCarouselAllPhotos group relative w-full h-36 flex gap-2 px-2"}>
                        <CarouselWithOpenFullscreen slidesToShow={5} loop={false} items={[{ src: '/hover_image.jpg', alt: 'Image 1' },
                        { src: '/for_all_items.jpg', alt: 'Image 2' },
                        { src: '/hover_image.jpg', alt: 'Image 3' },
                        { src: '/435x366.png', alt: 'Image 4' },
                        { src: '/main_page/main_photo.jpg', alt: 'Image 5' },
                        { src: '/for_all_items.jpg', alt: 'Image 6' },
                        ]} />
                    </div>
                    <section className="space-y-6">
                        <ReviewCard >
                            <ReviewCardHeader src_avatar={'/hover_image.jpg'} />
                            <ReviewCardContent />
                            <ReviewCardPhoto items={items} route={process.env.REACT_APP_API_URL_CLIENT} />
                        </ReviewCard>
                        <ReviewCard >
                            <ReviewCardHeader src_avatar={'/hover_image.jpg'} />
                            <ReviewCardContent />
                            <ReviewCardPhoto items={items} route={process.env.REACT_APP_API_URL_CLIENT} />
                        </ReviewCard>
                    </section>
                </div>
                <div className="rigthSide order-1 lg:order-2">
                    <RateProgressBar avgRate={4.7} maxRate={5} />
                </div>
            </div>
        </>
    )
}

export default ReviewsWrapper