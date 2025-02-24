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
import '@/assets/css/star-field.css'
// components
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NumberBar from '@/components/NumberBar'
import Sidebar from '@/components/Sidebar'
import StarBackground from '@/components/StarBackground'
//
import ThemeProvider from '@/components/theme-provider'

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
                    sx={{
                        display: 'flex',
                        width: '100%',
                        mt: 8,
                        pt: 3,
                        mb: 4,
                    }}>
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
                                xs: '50vh',
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
