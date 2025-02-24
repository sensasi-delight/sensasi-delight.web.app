// materials
import Box from '@mui/material/Box'
// local components
import CardCarousel from './CardCarousel/CardCarousel'
import ProjectCard from './CardCarousel/cards/ProjectCard/ProjectCard'
import SectionTitle from './Section/components/Title'
import SocialIconButton from './SocialIconButton'
import WritingCard from './CardCarousel/cards/ProjectCard/WritingCard'
// data
import projects from '@/data/projects'
import socials from '@/data/socials'
import writings from '@/data/writings'

const GitHub = socials.find(social => social.name === 'GitHub')
const Medium = socials.find(social => social.name === 'Medium')
const GoogleScholar = socials.find(social => social.name === 'Google Scholar')

export default function MainContent() {
    return (
        <>
            <Box
                id="projects"
                sx={{
                    transition: 'all 0.5s ease-in-out',
                }}>
                <Box
                    mb={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        justifyContent: {
                            xs: 'space-between',
                            md: 'flex-start',
                        },
                    }}>
                    <SectionTitle>Projects</SectionTitle>

                    {GitHub && (
                        <SocialIconButton
                            data={GitHub}
                            size="sm"
                            title="See more on my GitHub"
                        />
                    )}
                </Box>

                <CardCarousel autoPlay={true}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} data={project} />
                    ))}
                </CardCarousel>
            </Box>

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
