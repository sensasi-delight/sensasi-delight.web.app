// vendors
import { useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Fade from '@mui/material/Fade'
// components
import NumberBar from './components/NumberBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
// assets
import './assets/css/star-field.css'
import StarBackground from './components/StarBackground'

export default function App() {
    const [showBackground, setShowBackground] = useState(true)

    return (
        <>
            <CssBaseline />
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
                            gap: 5,
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
                        <MainContent />
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
