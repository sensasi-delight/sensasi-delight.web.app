'use client'

import { useEffect, useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
//
import quotes from '@/constants/data/quotes'

export default function RandomQuote() {
    const [randomIndex, setRandomIndex] = useState<number>()

    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * quotes.length))
    }, [])

    return (
        <Box mt={40}>
            {randomIndex !== undefined && (
                <>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        component="div">
                        "{quotes[randomIndex]?.quote}"
                    </Typography>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        component="div">
                        - {quotes[randomIndex]?.author}
                    </Typography>
                </>
            )}
        </Box>
    )
}
