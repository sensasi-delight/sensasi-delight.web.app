'use client'

// components
import LangSelector from '@/components/lang-selector'
// sections
import AboutSection from './@sections/about'
import HeroSection from './@sections/hero'
import ProjectsSection from './@sections/projects'
import RandomQuote from './@sections/random-quote'
import SkillsSection from './@sections/skills'
import SocialsSection from './@sections/socials'
import WritingsSection from './@sections/writings'

export default function Index() {
    return (
        <>
            <HeroSection />

            <LangSelector />

            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <WritingsSection />
            <SocialsSection />

            <RandomQuote />
        </>
    )
}
