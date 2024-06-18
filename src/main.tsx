// vendors

import { createRoot } from 'react-dom/client'
// materials
import { StyledEngineProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
// components
import App from './App'
// helpers
import getTheme from './theme/getTheme'

const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('The root element is missing.')
}

const root = createRoot(rootElement)

root.render(
    <StyledEngineProvider injectFirst>
        <GlobalStyles
            styles={{
                '::-webkit-scrollbar': {
                    width: '5px',
                    height: '5px',
                },

                '::-webkit-scrollbar-thumb': {
                    borderRadius: '5px',
                    backgroundColor: 'rgba(128,128,128,0.5)',

                    '&:hover': {
                        backgroundColor: 'rgba(128,128,128,0.7)',
                    },
                },

                '::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(128,128,128,0.1)',

                    '&:hover': {
                        backgroundColor: 'rgba(128,128,128,0.2)',
                    },
                },
            }}
        />
        <ThemeProvider theme={getTheme()}>
            <App />
        </ThemeProvider>
    </StyledEngineProvider>,
)
