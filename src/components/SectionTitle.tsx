// vendors
import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
// components
import CodeTag from './CodeTag'

export default function SectionTitle({
    children,
    ...restProps
}: TypographyProps) {
    return (
        <Typography component="h2" fontSize="1.9em" {...restProps}>
            <CodeTag>{children}</CodeTag>
        </Typography>
    )
}
