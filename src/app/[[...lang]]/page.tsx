// types
import type Params from './@types/params'
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

export default async function Index({ params }: { params: Promise<Params> }) {
    const lang = (await params).lang?.[0] ?? 'en'

    return (
        <>
            <HeroSection locale={lang} />

            <LangSelector locale={lang} />

            <AboutSection locale={lang} />
            <SkillsSection locale={lang} />
            <ProjectsSection locale={lang} />
            <WritingsSection locale={lang} />
            <SocialsSection locale={lang} />

            <RandomQuote />
        </>
    )
}
