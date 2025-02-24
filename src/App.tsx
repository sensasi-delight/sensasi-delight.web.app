// hooks
import { useFirebase } from '@/hooks/useFirebase'
//
import HeroSection from './components/sections/hero'
import Layout from './components/layout'
import MainContent from '@/components/MainContent'
import AboutSection from './components/sections/about'
import SkillsSection from './components/sections/skills'
import SocialsSection from './components/sections/socials'

export default function App() {
    useFirebase()

    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <MainContent />
            <SocialsSection />
        </Layout>
    )
}
