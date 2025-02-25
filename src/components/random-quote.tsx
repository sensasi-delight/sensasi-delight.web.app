import quotes from '@/constants/data/quotes'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function RandomQuote() {
    const quoteData = quotes[Math.floor(Math.random() * quotes.length)]

    return (
        <Box mt={40}>
            <Typography
                variant="caption"
                color="text.secondary"
                component="div">
                "{quoteData?.quote}"
            </Typography>

            <Typography
                variant="caption"
                color="text.secondary"
                component="div">
                - {quoteData?.author}
            </Typography>
        </Box>
    )
}
