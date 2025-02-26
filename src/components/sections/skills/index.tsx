// vendors
import { useState } from 'react'
// components
import SearchBar from '@/components/search-bar'
// locals
import SkillsSectionContent from './Content'
import Section from '../_components/layout'

export default function SkillsSection() {
    const [searchText, setSearchText] = useState('')

    return (
        <Section
            id="skills"
            title="Skills"
            endTitle={<SearchBar onChangeDebounce={setSearchText} />}>
            <SkillsSectionContent searchText={searchText} />
        </Section>
    )
}
