'use client'

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import './image-carousel.css'

import NextJsImage from "./nextjs-image";

const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

function nextImageUrl(src, size) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
}


export default function ImageCarousel({ images }) {
    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: [...imageSizes, ...deviceSizes]
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));
    console.log(slides, 'slides')
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);
    const toggleOpen = (state) => () => setOpen(state);
    const thumbnailsRef = React.useRef(null);
    React.useEffect(() => {
        const updateThumbnailsVisibility = () => {
            setHidden(window.innerWidth < 1024);
            if (window.innerWidth < 1024)
                thumbnailsRef.current?.hide();
        };

        // Первоначальная проверка при монтировании компонента
        updateThumbnailsVisibility();

        // Добавление слушателя события resize
        window.addEventListener('resize', updateThumbnailsVisibility);

        // Очистка слушателя при размонтировании компонента
        return () => window.removeEventListener('resize', updateThumbnailsVisibility);
    }, [hidden])

    const updateIndex = ({ index: current }) =>
        setIndex(current);

    return (
        <>
            <Lightbox
                on={{
                    view: updateIndex,
                    click: toggleOpen(true),
                }}
                index={index}
                slides={images}
                carousel={{
                    padding: 0,
                    spacing: 0,
                    borderRadius: '100%',
                    imageFit: "cover",
                    width: '100%',
                }}
                plugins={[Inline, Thumbnails]}
                inline={{
                    style: {
                        width: "100%",
                        maxWidth: "100%",
                        height: "100%",
                        borderRadius: '100%',

                        maxHeight: 'auto',
                        // aspectRatio: "3 / 2",
                        // margin: "0 auto",
                    },
                }}
                thumbnails={{
                    hidden: hidden,
                    ref: thumbnailsRef
                }}
                render={{ slide: NextJsImage }}

            />
            <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" }, thumbnailsContainer: { backgroundColor: 'rgba(0, 0, 0, .8' } }}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
                slides={slides}

                plugins={[Thumbnails, Zoom]}
                zoom={{
                    doubleTapDelay: 300,
                    doubleClickDelay: 300
                }}
                thumbnails={{
                    hidden
                }}
            // render={{ slide: NextJsImage }}
            />
        </>
    );
}