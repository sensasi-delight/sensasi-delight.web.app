import type { Metadata } from 'next'

const metadata: Metadata = {
    openGraph: {
        images: [
            {
                url: 'https://sensasi-delight.web.app/assets/images/web-preview.jpg',
                width: 800,
                height: 600,
            },
        ],
        type: 'website',
        url: 'https://sensasi-delight.web.app/',
    },
    twitter: {
        card: 'summary_large_image',

        creator: '@sensasi_delight',
        creatorId: 'sensasi_delight',
        site: 'https://sensasi-delight.web.app/',
        siteId: 'sensasi_delight',
        images: [
            {
                url: 'https://sensasi-delight.web.app/assets/images/web-preview.jpg',
                width: 800,
                height: 600,
            },
        ],
    },
}

export default metadata
