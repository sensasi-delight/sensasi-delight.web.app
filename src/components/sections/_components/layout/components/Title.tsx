// vendors
import { ReactNode } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
// components
import CodeTag from '../../../../code-tag'

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
