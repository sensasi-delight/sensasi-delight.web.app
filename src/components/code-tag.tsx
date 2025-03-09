// vendors
import type { ReactNode } from 'react'
// materials
import Typography, { type TypographyProps } from '@mui/material/Typography'

export default function CodeTag({
    children,
    component = 'span',
    fontSize = 'inherit',
}: {
    children: ReactNode
    component?: TypographyProps['component']
    fontSize?: TypographyProps['fontSize']
}) {
    return (
        <Typography
            color="info.main"
            component={component}
            fontSize={fontSize}
            sx={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                '&:after': {
                    content: '">"',
                    color: 'text.secondary',
                },
                '&:before': {
                    content: "'<'",
                    color: 'text.secondary',
                },
            }}>
            {children}
        </Typography>
    )
}
