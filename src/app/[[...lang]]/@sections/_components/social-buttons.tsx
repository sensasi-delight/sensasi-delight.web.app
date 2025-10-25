// materials
import Box from '@mui/material/Box'
// components
import SocialIconButton from '../_components/social-icon-button'
// data
import socials from '@/constants/data/socials'

export default function SocialButtons() {
    return (
        <Box>
            {socials.map(social => (
                <SocialIconButton key={social.link} data={social} size="lg" />
            ))}
        </Box>
    )
}
