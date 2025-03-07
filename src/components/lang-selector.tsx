// vendors
import type { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
//
import useLang from '@/hooks/use-lang'

export default function LangSelector() {
    const lang = useLang()

    return (
        <Box display="flex" marginTop={-4}>
            <LangButton href="/" isActive={lang === 'en'}>
                En
            </LangButton>

            <Divider orientation="vertical" />

            <LangButton href="/jp" isActive={lang === 'jp'}>
                日本語
            </LangButton>
        </Box>
    )
}

function LangButton({
    children,
    href,
    isActive = false,
}: {
    children: ReactNode
    href?: string
    isActive?: boolean
}) {
    return (
        <Button
            sx={{
                fontWeight: isActive ? 'bold' : undefined,
                minWidth: 'unset',
                px: 2,
                color: isActive ? undefined : 'text.disabled',
            }}
            href={href}>
            {children}
        </Button>
    )
}
