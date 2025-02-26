// materials
import Box from '@mui/material/Box'
// components
import ScrollableXBox from '@/components/scrollable-x-box'
// sub-components
import WritingCard from './_components/writing-card-item'
// parents components
import SocialIconButton from '../_components/social-icon-button'
import Section from '../_components/layout'
// data
import socials from '@/constants/data/socials'
import writings from '@/constants/data/writings'

const mediumData = socials.find(social => social.name === 'Medium')
const googleScholarData = socials.find(
    social => social.name === 'Google Scholar',
)

export default function WritingsSection() {
    return (
        <Section
            id="writings"
            title="Writings"
            endTitle={
                <Box>
                    {mediumData && (
                        <SocialIconButton
                            data={mediumData}
                            size="sm"
                            title="Read more on my Medium"
                        />
                    )}

                    {googleScholarData && (
                        <SocialIconButton
                            data={googleScholarData}
                            size="sm"
                            title="Read more on my Google Scholar"
                        />
                    )}
                </Box>
            }>
            <ScrollableXBox>
                {writings.map((writing, i) => (
                    <WritingCard key={i} data={writing} />
                ))}
            </ScrollableXBox>
        </Section>
    )
}
