// vendors
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// materials
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// icons
import {
    faBoltLightning,
    faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <Box
            sx={theme => ({
                display: 'flex',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor:
                    theme.additional.components.footer.bgColor.primary,
                zIndex: theme.zIndex.drawer + 2,
                '& > *': {
                    px: 1,
                },
            })}>
            <Box
                sx={theme => ({
                    backgroundColor:
                        theme.additional.components.footer.bgColor.secondary,
                })}>
                <Typography variant="body2" my={0.5}>
                    <FontAwesomeIcon icon={faBoltLightning} />
                </Typography>
            </Box>
            <Box flexGrow={1}>
                <Typography variant="body2" my={0.5}>
                    <FontAwesomeIcon icon={faPizzaSlice} />
                </Typography>
            </Box>
            <Box>
                <Typography variant="body2" my={0.5}>
                    made with ❤ by myself
                </Typography>
            </Box>
        </Box>
    )
}
