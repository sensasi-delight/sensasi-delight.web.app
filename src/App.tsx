// hooks
import { useFirebase } from '@/hooks/useFirebase'
//
import Layout from './components/layout'
import MainContent from '@/components/MainContent'
// sections
import AboutSection from './components/sections/about'
import HeroSection from './components/sections/hero'
import ProjectsSection from './components/sections/projects'
import SkillsSection from './components/sections/skills'
import SocialsSection from './components/sections/socials'

export default function App() {
    useFirebase()

    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <MainContent />
            <SocialsSection />
        </Layout>
    )
}
