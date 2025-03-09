// materials
import Box from '@mui/material/Box'
// components
import ScrollableXBox from '@/components/scrollable-x-box'
// sub-components
import WritingCard from './_components/writing-card-item'
// parents components
import SocialIconButton from '../_components/social-icon-button'
import Section from '../_components/layout'
// data
import type { Lang } from '../../@types/lang'
import socials from '@/constants/data/socials'
import writings from '@/constants/data/writings'

const mediumData = socials.find(social => social.name === 'Medium')
const googleScholarData = socials.find(
    social => social.name === 'Google Scholar',
)

const DICTIONARIES = {
    title: {
        en: 'Writings',
        jp: '書籍',
    },

    readMore: {
        en: 'Read more on my $1',
        jp: '続きは$1で',
    },
}

export default function WritingsSection({ lang }: { lang: Lang }) {
    return (
        <Section
            id="writings"
            title={DICTIONARIES.title[lang]}
            endTitle={
                <Box>
                    {mediumData && (
                        <SocialIconButton
                            data={mediumData}
                            size="sm"
                            title={DICTIONARIES.readMore[lang].replace(
                                '$1',
                                'medium.com',
                            )}
                        />
                    )}

                    {googleScholarData && (
                        <SocialIconButton
                            data={googleScholarData}
                            size="sm"
                            title={DICTIONARIES.readMore[lang].replace(
                                '$1',
                                'Google Scholar',
                            )}
                        />
                    )}
                </Box>
            }>
            <ScrollableXBox>
                {writings.map((writing, i) => (
                    <WritingCard key={i} data={writing} locale={lang} />
                ))}
            </ScrollableXBox>
        </Section>
    )
}
