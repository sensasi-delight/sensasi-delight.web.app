import type { ReactNode } from 'react'
import Box from '@mui/material/Box'

export default function ScrollableXBox({ children }: { children: ReactNode }) {
    return (
        <Box
            display="flex"
            gap={3}
            sx={{
                overflowX: 'auto',
            }}>
            {children}
        </Box>
    )
}
