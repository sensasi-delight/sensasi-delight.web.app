// vendors
import React from 'react'
// materials
import Box from '@mui/material/Box'
// components
import SocialIconButton from '../../components/SocialIconButton'
// data
import socials from '../../data/socials'

export default function ContactSectionContent() {
    return (
        <Box>
            {socials.map((social, i) => (
                <SocialIconButton key={i} data={social} size="lg" />
            ))}
        </Box>
    )
}
