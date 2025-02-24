// materials
import Box from '@mui/material/Box'
// local components
import CardCarousel from './CardCarousel/CardCarousel'
import SectionTitle from './Section/components/Title'
import SocialIconButton from './SocialIconButton'
import WritingCard from './CardCarousel/cards/ProjectCard/WritingCard'
// data
import socials from '@/data/socials'
import writings from '@/data/writings'

const Medium = socials.find(social => social.name === 'Medium')
const GoogleScholar = socials.find(social => social.name === 'Google Scholar')

export default function MainContent() {
    return (
        <>
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

                <CardCarousel autoPlay={true}>
                    {writings.map((writing, i) => (
                        <WritingCard key={i} data={writing} />
                    ))}
                </CardCarousel>
            </Box>
        </>
    )
}
