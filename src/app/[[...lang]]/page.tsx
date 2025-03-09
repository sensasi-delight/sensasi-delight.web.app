'use client'

// components
import LangSelector from '@/components/lang-selector'
// sections
import AboutSection from '@/components/sections/about'
import HeroSection from '@/components/sections/hero'
import ProjectsSection from '@/components/sections/projects'
import RandomQuote from '@/components/random-quote'
import SkillsSection from '@/components/sections/skills'
import SocialsSection from '@/components/sections/socials'
import WritingsSection from '@/components/sections/writings'

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
