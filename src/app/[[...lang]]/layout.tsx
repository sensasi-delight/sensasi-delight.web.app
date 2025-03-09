// vendors
import type { Metadata, Viewport } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
// sub
import type Params from './@types/params'
import ThemeProvider from './@layout/theme-provider'
import PageLayout from '@/app/[[...lang]]/@layout/page-layout'
// utils
import '@/app/[[...lang]]/@layout/utils/init-firebase'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

const PAGE_TITLE = 'Adam "Zain" Akbar — Web Developer & Full-Time Learner'
const PAGE_DESCRIPTION =
    'Professional web developer specializing in modern web technologies. Explore my projects and learn about my development process.'

export const metadata: Metadata = {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    openGraph: {
        description: PAGE_DESCRIPTION,
        images: [
            {
                url: 'https://sensasi-delight.web.app/assets/images/web-preview.jpg',
                width: 800,
                height: 600,
            },
        ],
        title: PAGE_TITLE,
        type: 'website',
        url: 'https://sensasi-delight.web.app/',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#333333',
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<Params>
}) {
    const { lang = ['en'] } = await params

    return (
        <html lang={lang[0]}>
            <head>
                {/* <!-- Favicon --> */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/assets/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/favicon/favicon-16x16.png"
                />

                <link
                    rel="mask-icon"
                    href="/assets/favicon/safari-pinned-tab.svg"
                    color="#5bbad5"
                />

                <meta name="author" content="Adam Zain Akbar" />
                <meta name="robots" content="index, follow" />

                {/* <!-- Canonical URL --> */}
                <link rel="canonical" href="https://sensasi-delight.web.app" />

                {/* <!-- Schema Markup --> */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Adam Zain Akbar',
                            jobTitle: 'Web Developer',
                            url: 'https://sensasi-delight.web.app',
                            description: PAGE_DESCRIPTION,
                            image: 'https://sensasi-delight.web.app/assets/images/web-preview.jpg',
                        }),
                    }}
                />
            </head>
            <body className={roboto.variable}>
                <AppRouterCacheProvider>
                    <ThemeProvider>
                        <PageLayout>{children}</PageLayout>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}

export function generateStaticParams() {
    return [{ lang: ['jp'] }, { lang: [''] }]
}
