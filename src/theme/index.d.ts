import '@mui/material/styles'

interface AdditionalThemeOptions {
    background: {
        secondary: string
        tertiary: string
    }
    components: {
        footer: {
            bgColor: {
                primary: string
                secondary: string
            }
        }
        sidebar: {
            background: string
            width: number
        }
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        additional: AdditionalThemeOptions
    }

    interface ThemeOptions {
        additional?: Partial<AdditionalThemeOptions>
    }
}
