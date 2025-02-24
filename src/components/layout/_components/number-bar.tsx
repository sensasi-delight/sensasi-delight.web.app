// vendors

// materials
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

function renderRowNumber(rowNumber: number) {
    const items = []

    for (let i = 1; i <= rowNumber; i++) {
        items.push(
            <ListItem
                key={i}
                sx={{
                    py: 0,
                    pr: 0,
                    textAlign: 'end',
                    '&:hover': {
                        color: '#f1f1f1',
                    },
                }}>
                <ListItemText>{i}</ListItemText>
            </ListItem>,
        )
    }

    return items
}

export default function NumberBar() {
    return (
        <Box
            sx={{
                userSelect: 'none',
                display: {
                    xs: 'none',
                    md: 'block',
                },
            }}
            fontFamily="monospace"
            color="text.secondary">
            <List sx={{ py: 0, cursor: 'unset' }}>{renderRowNumber(94)}</List>
        </Box>
    )
}
