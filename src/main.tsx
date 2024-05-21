// vendors
import React from 'react'
import { createRoot } from 'react-dom/client'
// materials
import { StyledEngineProvider } from '@mui/material/styles'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
// components
import App from './App'
// theme
import theme from './theme'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('The root element is missing.')
}

const root = createRoot(rootElement)

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StyledEngineProvider>,
)
