import { type ThemeOptions, createTheme } from '@mui/material/styles'
import main from '@/constants/themes/main'

export default function getTheme(optionName = 'main') {
    let themeOption: ThemeOptions

    switch (optionName) {
        default:
            themeOption = main
    }

    return createTheme(themeOption)
}
