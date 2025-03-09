import { useRef, useEffect } from 'react'
// materials
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
//
import quotes from '@/constants/data/quotes'

export default function RandomQuote() {
    const quoteData = useRef<{ quote: string; author: string }>(null)

    useEffect(() => {
        quoteData.current =
            quotes[Math.floor(Math.random() * quotes.length)] ?? null
    }, [])

    return (
        <Box mt={40}>
            <Typography
                variant="caption"
                color="text.secondary"
                component="div">
                "{quoteData.current?.quote}"
            </Typography>

            <Typography
                variant="caption"
                color="text.secondary"
                component="div">
                - {quoteData.current?.author}
            </Typography>
        </Box>
    )
}
