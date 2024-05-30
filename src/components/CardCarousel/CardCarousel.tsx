// types
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types'
// vendors

import Carousel from 'react-material-ui-carousel'

export default function CardCarousel(props: CarouselProps) {
    return (
        <Carousel
            interval={5000}
            animation="slide"
            changeOnFirstRender
            fullHeightHover={false}
            sx={{
                margin: 'auto',
                transition: 'transform 0.15s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',

                    '& .MuiLinearProgress-root': {
                        display: 'none',
                    },
                },
                '* > div': {
                    margin: 'auto',
                },
            }}
            {...props}
        />
    )
}
