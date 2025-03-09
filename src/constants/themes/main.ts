import { type ThemeOptions } from '@mui/material/styles/createTheme'

const main: ThemeOptions = {
    palette: {
        mode: 'dark',

        primary: {
            main: '#007acc',
        },

        background: {
            default: '#1e1e1e',
        },

        text: {
            secondary: '#7d7d7d',
        },
    },

    typography: {
        fontFamily: 'var(--font-roboto)',
    },
}

export default main
