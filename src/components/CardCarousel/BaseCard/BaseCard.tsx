// vendors
import React, { useRef, ReactNode } from 'react'
// materials
import Card from '@mui/material/Card'
import LinearProgress from '@mui/material/LinearProgress'
// hooks
import useOnScreen from '../../../hooks/useOnScreen'

export default function BaseCard({ children }: { children: ReactNode }) {
    const ref = useRef(null)
    const isOnScreen = useOnScreen(ref)

    return (
        <Card elevation={4} ref={ref}>
            <LinearProgress
                color="info"
                variant="determinate"
                value={isOnScreen ? 100 : 0}
                sx={{
                    '& > .MuiLinearProgress-bar': {
                        transitionDuration: '4.5s',
                    },
                }}
            />
            {children}
        </Card>
    )
}
