// vendors
import type { Viewport } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
// sub
import type Params from './@types/params'
import ThemeProvider from './@layout/theme-provider'
import PageLayout from '@/app/[[...lang]]/@layout/page-layout'
// utils
import '@/app/[[...lang]]/@layout/utils/init-firebase'

export { default as metadata } from './@layout/metadata'
export { default as generateMetadata } from './@layout/utils/generate-metadata'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

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
            </head>
            <body className={roboto.variable}>
                <AppRouterCacheProvider>
                    <ThemeProvider>
                        <PageLayout locale={lang[0]}>{children}</PageLayout>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}

export function generateStaticParams() {
    return [{ lang: ['ja'] }, { lang: [''] }]
}
