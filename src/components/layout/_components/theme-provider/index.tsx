import type { ReactNode } from 'react'
// materials
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
// sub
import getTheme from './utils/get-theme'

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <MuiThemeProvider theme={getTheme()}>
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
            <CssBaseline />

            {children}
        </MuiThemeProvider>
    )
}
