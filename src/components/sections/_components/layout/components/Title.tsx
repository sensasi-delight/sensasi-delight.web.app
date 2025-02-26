// vendors
import type { ReactNode } from 'react'
// components
import CodeTag from '@/components/code-tag'

export default function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <CodeTag component="h2" fontSize="2em">
            {children}
        </CodeTag>
    )
}
