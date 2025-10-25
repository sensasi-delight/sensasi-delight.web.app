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
import type { Locale } from '../../@types/locale'

const githubData = socials.find(social => social.name === 'GitHub')

const SECTION_TITLE: Record<Locale, string> = {
    en: 'Projects',
    ja: 'プロジェクト',
}

const ICON_TITLE: Record<Locale, string> = {
    en: 'See more on my GitHub',
    ja: '続きは私のGitHubで',
}

export default function ProjectsSection({ locale }: { locale: Locale }) {
    return (
        <Section
            id="projects"
            title={SECTION_TITLE[locale]}
            endTitle={
                githubData && (
                    <SocialIconButton
                        data={githubData}
                        size="sm"
                        title={ICON_TITLE[locale]}
                    />
                )
            }>
            <ScrollableXBox>
                {projects.map(project => (
                    <ProjectItemCard
                        key={project.name}
                        data={project}
                        locale={locale}
                    />
                ))}
            </ScrollableXBox>
        </Section>
    )
}
