import { ThemeOptions, createTheme } from '@mui/material/styles'
import main from './options/main'

export default function getTheme(optionName = 'main') {
    let themeOption: ThemeOptions

    switch (optionName) {
        default:
            themeOption = main
    }

    return createTheme(themeOption)
}
