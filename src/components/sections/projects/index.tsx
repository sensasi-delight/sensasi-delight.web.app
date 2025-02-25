// materials
import Box from '@mui/material/Box'
// components
import ScrollableXBox from '@/components/scrollable-x-box'
// data
import projects from '@/constants/data/projects'
import socials from '@/constants/data/socials'
// parents components
import SectionTitle from '@/components/sections/_components/layout/components/Title'
import SocialIconButton from '@/components/sections/_components/social-icon-button'
// sub
import ProjectItemCard from './_components/project-item-card'

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

            <ScrollableXBox>
                {projects.map((project, i) => (
                    <ProjectItemCard key={i} data={project} />
                ))}
            </ScrollableXBox>
        </Box>
    )
}
