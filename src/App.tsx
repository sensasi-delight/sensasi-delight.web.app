// components
import Layout from '@/components/layout'
// sections
import AboutSection from '@/components/sections/about'
import HeroSection from '@/components/sections/hero'
import ProjectsSection from '@/components/sections/projects'
import RandomQuote from '@/components/random-quote'
import SkillsSection from '@/components/sections/skills'
import SocialsSection from '@/components/sections/socials'
import WritingsSection from '@/components/sections/writings'
// utils
import '@/utils/init-firebase'

export default function App() {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <WritingsSection />
            <SocialsSection />

            <RandomQuote />
        </Layout>
    )
}
