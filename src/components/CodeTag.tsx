// vendors
import { ReactNode } from 'react'
// materials
import Typography from '@mui/material/Typography'

export default function CodeTag({ children }: { children: ReactNode }) {
    return (
        <Typography
            color="info.main"
            component="span"
            sx={theme => ({
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: 'inherit',
                '&:after': {
                    content: '">"',
                    color: theme.palette.text.secondary,
                },
                '&:before': {
                    content: "'<'",
                    color: theme.palette.text.secondary,
                },
            })}>
            {children}
        </Typography>
    )
}
