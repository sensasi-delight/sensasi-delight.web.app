import React, { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import SectionTitle from './components/Title'

export default function Section({
    id,
    title,
    children,
}: {
    id: string
    title: string
    children: ReactNode
}) {
    return (
        <Box id={id}>
            <SectionTitle mb={2}>{title}</SectionTitle>

            {children}
        </Box>
    )
}
