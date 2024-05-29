import { ThemeOptions } from '@mui/material/styles/createTheme'

const main: ThemeOptions = {
    palette: {
        mode: 'dark',

        background: {
            default: '#1e1e1e',
        },

        text: {
            secondary: '#7d7d7d',
        },
    },

    // components: {
    //     card: {
    //         maxWidth: 300,
    //     },
    // },

    additional: {
        background: {
            secondary: '#333333',
            tertiary: '#252525',
        },
        components: {
            footer: {
                bgColor: {
                    primary: '#007acc',
                    secondary: '#16825d',
                },
            },
            sidebar: {
                background: '#333333',
                width: 48,
            },
        },
    },
}

export default main
