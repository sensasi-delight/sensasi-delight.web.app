// materials
import Box from '@mui/material/Box'
// components
import SectionTitle from '@/components/sections/_components/layout/components/Title'
import SocialIconButton from '@/components/sections/_components/social-icon-button'
// sub-components
import WritingCard from './_components/writing-card-item'
// data
import socials from '@/constants/data/socials'
import writings from '@/constants/data/writings'

const Medium = socials.find(social => social.name === 'Medium')
const GoogleScholar = socials.find(social => social.name === 'Google Scholar')

export default function WritingsSection() {
    return (
        <Box id="writings">
            <Box
                mb={2}
                sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'space-between',
                        md: 'flex-start',
                    },
                    alignItems: 'center',
                    gap: 2,
                }}>
                <SectionTitle>Writings</SectionTitle>

                <Box>
                    {Medium && (
                        <SocialIconButton
                            data={Medium}
                            size="sm"
                            title="Read more on my Medium"
                        />
                    )}

                    {GoogleScholar && (
                        <SocialIconButton
                            data={GoogleScholar}
                            size="sm"
                            title="Read more on my Google Scholar"
                        />
                    )}
                </Box>
            </Box>

            <Box
                display="flex"
                gap={3}
                sx={{
                    overflowX: 'auto',
                }}>
                {writings.map((writing, i) => (
                    <WritingCard key={i} data={writing} />
                ))}
            </Box>
        </Box>
    )
}
