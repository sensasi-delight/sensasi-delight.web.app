// vendors
import { useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
// components
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import NumberBar from '@/components/NumberBar'
import Sidebar from '@/components/Sidebar'
import StarBackground from '@/components/StarBackground'
// assets
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@/assets/css/star-field.css'
// hooks
import { useFirebase } from '@/hooks/useFirebase'
//
import HeroSection from '@/components/sections/hero'
import ThemeProvider from './components/theme-provider'

export default function App() {
    useFirebase()
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
                        <HeroSection />
                        <MainContent />
                    </Container>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    )
}
