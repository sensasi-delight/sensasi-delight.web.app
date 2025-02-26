// vendors
import type { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import SectionTitle from './components/Title'

export default function Section({
    id,
    title,
    children,
    endTitle,
}: {
    id: string
    title: string
    children: ReactNode
    endTitle?: ReactNode
}) {
    return (
        <Box id={id} component="section">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'space-between',
                        sm: 'flex-start',
                    },
                    alignItems: 'center',
                    gap: 1,
                }}
                mb={3}>
                <SectionTitle>{title}</SectionTitle>

                {endTitle}
            </Box>

            {children}
        </Box>
    )
}
