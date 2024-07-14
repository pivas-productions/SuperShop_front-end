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

export default function ImageCarousel({ images }) {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);
    const toggleOpen = (state) => () => setOpen(state);
    const thumbnailsRef = React.useRef(null);
    React.useEffect(() => {
        const updateThumbnailsVisibility = () => {
            console.log('width', window.innerWidth)
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
                    imageFit: "cover",
                }}
                plugins={[Inline, Thumbnails]}
                inline={{
                    style: {
                        width: "100%",
                        // maxWidth: "900px",
                        height: "100%",
                        maxHeight: 'auto',
                        aspectRatio: "3 / 2",
                        margin: "0 auto",
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
                slides={images}
                
                plugins={[Thumbnails, Zoom]}
                thumbnails={{
                    hidden
                }}
                render={{ slide: NextJsImage }}
            />
        </>
    );
}