// vendors

// materials
import Box from '@mui/material/Box'

function RenderRowNumber({ rowNumber }: { rowNumber: number }) {
    const items = []

    for (let i = 1; i <= rowNumber; i++) {
        items.push(
            <div key={i}>
                <div className="line-anchor"></div>
                {i}
            </div>,
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
                    md: 'flex',
                },
                ml: 2.5,
                fontFamily: 'monospace',
                fontSize: '1em',
                flexDirection: 'column',
                gap: 1,
                color: 'text.secondary',

                '& > div': {
                    textAlign: 'end',
                    '&:hover': {
                        color: '#f1f1f1',
                    },
                },

                '& > div > .line-anchor': {
                    position: 'absolute',
                    minWidth: '90vw',
                    height: 'calc(1.5em + 8px)',
                },
            }}>
            <RenderRowNumber rowNumber={94} />
        </Box>
    )
}
