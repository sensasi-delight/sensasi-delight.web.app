// vendors
import React from 'react'
// materials
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography'
// icons
import InfoIcon from '@mui/icons-material/InfoOutlined'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
// styles
import { appBar, readmeTab } from './SXs'

export default function Header() {
    return (
        <AppBar position="fixed" sx={appBar}>
            <Box>
                <Box sx={readmeTab}>
                    <InfoIcon color="info" fontSize="small" />
                    <Typography mx={1}>README.md</Typography>
                </Box>
            </Box>

            <Box>
                <Breadcrumbs
                    separator={<NavigateNextIcon />}
                    aria-label="breadcrumb"
                    sx={({ palette }) => ({
                        backgroundColor: palette.background.default,
                        px: 2,
                        py: 0.2,
                        '& .MuiBreadcrumbs-separator': {
                            color: palette.text.secondary,
                            m: 0,
                        },
                    })}>
                    <Typography>src</Typography>,
                    <Typography
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                        <InfoIcon
                            color="info"
                            sx={{ mr: 1, fontSize: '1em' }}
                        />
                        README.md
                    </Typography>
                </Breadcrumbs>
            </Box>
        </AppBar>
    )
}
