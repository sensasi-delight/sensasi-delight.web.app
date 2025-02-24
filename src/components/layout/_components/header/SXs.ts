import type { SxProps, Theme } from '@mui/material/styles'

export const appBar: SxProps<Theme> = ({ additional }) => ({
    pl: additional.components.sidebar.width.toString() + 'px',
})

export const readmeTab: SxProps<Theme> = theme => ({
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    flexGrow: 0,
    p: 1,
    pl: 2,
    pt: 1.2,
})
