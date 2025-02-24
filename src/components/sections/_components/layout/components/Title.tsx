// vendors
import type { ReactNode } from 'react'
import Typography, { type TypographyProps } from '@mui/material/Typography'
// components
import CodeTag from '@/components/code-tag'

export default function SectionTitle({
    children,
    ...restProps
}: TypographyProps & { children: ReactNode }) {
    return (
        <Typography component="h2" fontSize="1.9em" {...restProps}>
            <CodeTag>{children}</CodeTag>
        </Typography>
    )
}
