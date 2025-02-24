// materials
import Box from '@mui/material/Box'
// components
import SectionTitle from '@/components/sections/_components/layout/components/Title'
// data
import projects from '@/constants/data/projects'
import socials from '@/constants/data/socials'
//
import CardCarousel from '@/components//CardCarousel'
import ProjectCard from '@/components/CardCarousel/cards/ProjectCard/ProjectCard'
import SocialIconButton from '@/components/sections/_components/social-icon-button'

const GitHub = socials.find(social => social.name === 'GitHub')

export default function ProjectsSection() {
    return (
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
    )
}
