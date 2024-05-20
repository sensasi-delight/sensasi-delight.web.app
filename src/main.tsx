import * as React from 'react'
import { createRoot } from 'react-dom/client'

import { StyledEngineProvider } from '@mui/material/styles'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import './firebase'

import App from './App'
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
