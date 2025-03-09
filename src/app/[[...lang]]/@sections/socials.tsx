import type { Locale } from '../@types/locale'
import Section from './_components/layout'
import SocialButtons from './_components/social-buttons'

const SECTION_TITLE: Record<Locale, string> = {
    en: 'Keep in touch',
    ja: '連絡を取ろう',
}

export default function SocialsSection({ locale }: { locale: Locale }) {
    return (
        <Section id="socials" title={SECTION_TITLE[locale]}>
            <SocialButtons />
        </Section>
    )
}
