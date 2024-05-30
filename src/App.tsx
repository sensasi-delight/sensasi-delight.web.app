// vendors
import { useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import CssBaseline from '@mui/material/CssBaseline'
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
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
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
                <Fade in={showBackground} unmountOnExit>
                    <div>
                        <StarBackground />
                    </div>
                </Fade>

                <NumberBar />

                <Box
                    sx={{
                        flexGrow: 1,
                        mt: 4,
                    }}>
                    <MainContent />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
