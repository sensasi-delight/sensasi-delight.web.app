// vendors
import React, { useState } from 'react'
// materials
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
// components
import RowNumber from './components/RowNumber'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
// assets
import './assets/css/star-field.css'

export default function App() {
    const [isBackground, setIsBackground] = useState(true)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Sidebar
                import={{
                    isBackground: isBackground,
                    setIsBackground: setIsBackground,
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    mt: 8,
                    pt: 3,
                    mb: 4,
                }}>
                {isBackground && (
                    <Box className="star-field">
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                    </Box>
                )}

                <RowNumber />
                <Box
                    sx={{
                        flexGrow: 1,
                    }}>
                    <MainContent />
                </Box>
            </Box>
            <Footer />
        </Box>
    )
}
