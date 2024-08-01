import CarouselWithOpenFullscreen from '@/components/carousel-with-open-fullscreen'
import { ReviewCard, ReviewCardContent, ReviewCardHeader, ReviewCardPhoto } from '@/components/ui/review-card'
import React, { useEffect, useState } from 'react'
import RateProgressBar from './rate-progress-bar'
import CreateReviews from './create-reviews'

const ReviewsWrapper = ({ fetch_route, item_id }) => {
    const [items, setItems] = useState(null);
    const [allphotos, setAllPhotos] = useState(null);
    useEffect(() => {
        fetch(fetch_route + '/api/reviews/?item=' + item_id, { cache: 'no-store' })

            .then(response => response.json())
            .then(data => {
                console.log('data.results', data.results)
                setItems(data.results)
            })
            .catch(error => {
                console.error('Error fetching catalog data:', error);
            });;
    }, [setItems, fetch_route, item_id])

    useEffect(() => {
        if (items) {
            let photos = [];
            Object.values(items).map((item, indx) => {
                console.log('item',item)
                if (item.photos.length) {
                    photos = photos.concat(
                        item.photos.reduce((acc, val, ind) => {
                            console.log('val',val)
                            acc.push({
                                src: val?.photo,
                                alt: 'ImageReview' + ind
                            })
                            return acc;
                        }, [])
                    )
                }
            });
            console.log('photos', photos)
            setAllPhotos(photos)
        }
    }, [items,])
    // const item = await fetch_res.json();

    // const items = {
    //     photo: [
    //         {
    //             name: 'INCANTO milan inspiration bianco1',
    //             // photo: '/media/item/main_pic.webp'
    //             photo: '/hover_image.jpg'
    //         },
    //         {
    //             name: 'INCANTO milan inspiration bianco2',
    //             photo: '/hover_image.jpg'
    //             // photo: '/media/item/two_pic.webp'
    //         }
    //     ]
    // }
    return (
        <>
            <div className="ReviewWrapper flex flex-col lg:flex-row gap-6">
                <CreateReviews fetch_route={fetch_route} item_id={item_id} />
                <div className="leftSide flex-1 space-y-6 order-2 lg:order-1">
                    {allphotos && <div className={"ReviewCarouselAllPhotos group relative w-full h-36 flex gap-2 px-2"}>
                        <CarouselWithOpenFullscreen slidesToShow={5} loop={false} items={allphotos} />
                    </div>}
                    <section className="space-y-6">
                        {items && Object.values(items).map((item, indx) => (
                            <ReviewCard key={indx}>
                                <ReviewCardHeader rate={item.grade} username={item.user_name} createdAt={item.created_at} src_avatar={item.user_photo} />
                                <ReviewCardContent item={item} />
                                {item.photos.length ?
                                    <ReviewCardPhoto items={item.photos} route={process.env.REACT_APP_API_URL_CLIENT} />
                                    :
                                    ''
                                }
                            </ReviewCard>
                        ))}

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