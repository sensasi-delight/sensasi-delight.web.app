import type { ReactNode } from 'react'
import Box, { type BoxProps } from '@mui/material/Box'

export default function ScrollableXBox({
    children,
    props,
}: {
    children: ReactNode
    props?: BoxProps
}) {
    return (
        <Box
            display="flex"
            gap={3}
            sx={{
                overflowX: 'auto',
                ...props?.sx,
            }}
            {...props}>
            {children}
        </Box>
    )
}
