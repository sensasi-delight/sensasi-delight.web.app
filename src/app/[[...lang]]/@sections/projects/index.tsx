// components
import ScrollableXBox from '@/components/scrollable-x-box'
// data
import projects from '@/constants/data/projects'
import socials from '@/constants/data/socials'
// parents components
import SocialIconButton from '../_components/social-icon-button'
// sub
import ProjectItemCard from './_components/project-item-card'
import Section from '../_components/layout'

const githubData = socials.find(social => social.name === 'GitHub')

export default function ProjectsSection() {
    return (
        <Section
            id="projects"
            title="Projects"
            endTitle={
                githubData && (
                    <SocialIconButton
                        data={githubData}
                        size="sm"
                        title="See more on my GitHub"
                    />
                )
            }>
            <ScrollableXBox>
                {projects.map((project, i) => (
                    <ProjectItemCard key={i} data={project} />
                ))}
            </ScrollableXBox>
        </Section>
    )
}
