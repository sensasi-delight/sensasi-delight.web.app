import type { ReactNode } from 'react'
// vendors
import { useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
// assets
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// sub-components
import Footer from './_components/footer'
import Header from './_components/header'
import NumberBar from './_components/number-bar'
import Sidebar from './_components/sidebar'
import StarBackground from './_components/star-background'
import ThemeProvider from './_components/theme-provider'

export default function Layout({ children }: { children: ReactNode }) {
    const [showBackground, setShowBackground] = useState(true)

    return (
        <ThemeProvider>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Sidebar
                    showBackground={showBackground}
                    setShowBackground={setShowBackground}
                />

                <Box
                    sx={({ additional }) => ({
                        display: 'flex',
                        width:
                            'calc(100% - ' +
                            additional.components.sidebar.width.toString() +
                            'px)',
                        mt: 8,
                        pt: 3,
                        mb: 6,
                    })}>
                    <NumberBar />

                    <Fade in={showBackground} unmountOnExit>
                        <div>
                            <StarBackground />
                        </div>
                    </Fade>

                    <Container
                        maxWidth="md"
                        disableGutters
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                            mt: 4,
                            px: 4,
                            mb: {
                                xs: '60vh',
                                md: 'unset',
                            },
                            '& > div': {
                                scrollMarginTop: 100,
                            },
                        }}>
                        {children}
                    </Container>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    )
}
