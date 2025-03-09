'use client'

// vendors
import { useState } from 'react'
// components
import SearchBar from '@/components/search-bar'
// locals
import SkillsSectionContent from './Content'
import Section from '../_components/layout'
import type { Locale } from '../../@types/locale'

const sectionTitle: Record<Locale, string> = {
    en: 'Skills',
    ja: 'スキル',
}

export default function SkillsSection({ locale }: { locale: Locale }) {
    const [searchText, setSearchText] = useState('')

    return (
        <Section
            id="skills"
            title={sectionTitle[locale]}
            endTitle={<SearchBar onChangeDebounce={setSearchText} />}>
            <SkillsSectionContent searchText={searchText} />
        </Section>
    )
}
