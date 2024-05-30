// vendors
import { Suspense, lazy } from 'react'
// materials
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// components
import SectionTitle from './Section/components/Title'
import SummarySection from '../sections/Summary'
import AboutSectionContent from '../sections/About/Content'
const SkillsSectionContent = lazy(() => import('../sections/Skills/Content'))
// data
import socials from '../data/socials'
import ThreeLineSkeleton from './ThreeLineSkeletons'
import CardCarousel from './CardCarousel/CardCarousel'
import projects from '../data/projects'
import ProjectCard from './CardCarousel/cards/ProjectCard/ProjectCard'
import WritingCard from './CardCarousel/cards/ProjectCard/WritingCard'
import writings from '../data/writings'
import ContactSectionContent from '../sections/Contact/Content'
import SocialIconButton from './SocialIconButton'
import Section from './Section/Section'

const GitHub = socials.find(social => social.name === 'GitHub')
const Medium = socials.find(social => social.name === 'Medium')
const GoogleScholar = socials.find(social => social.name === 'Google Scholar')

export default function MainContent() {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                mb: {
                    xs: '50vh',
                    md: 'unset',
                },
                '& > div': {
                    scrollMarginTop: 100,
                },
            }}>
            <SummarySection />

            <Section id="about" title="About me">
                <AboutSectionContent />
            </Section>

            <Section id="skills" title="Skills">
                <Suspense fallback={<ThreeLineSkeleton />}>
                    <SkillsSectionContent />
                </Suspense>
            </Section>

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

            <Section id="contacts" title="Keep in touch">
                <ContactSectionContent />
            </Section>
        </Container>
    )
}
