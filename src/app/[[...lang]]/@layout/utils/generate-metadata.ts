import type { Metadata } from 'next'
import type Params from '../../@types/params'
import type { Locale } from '../../@types/locale'
import DICTIONARIES from '@/constants/dictionaries'

interface Props {
    params: Promise<Params>
}

const PAGE_DESCRIPTION: Record<Locale, string> = {
    en: 'Professional web developer specializing in modern web technologies. Explore my projects and learn about my development process.',
    ja: '最新ウェブ技術に特化したプロフェッショナルウェブ開発者です。プロジェクト実績と開発プロセスの詳細をご覧ください。',
}

export default async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { lang = ['en'] } = await params
    const locale = lang[0]

    const PAGE_TITLE = 'Adam "Zain" Akbar — ' + DICTIONARIES.roleTitle2[locale]

    return {
        title: PAGE_TITLE,
        description: PAGE_DESCRIPTION[locale],
        openGraph: {
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION[locale],
            locale: locale === 'ja' ? 'ja_JP' : 'en_US',
        },
        twitter: {
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION[locale],
        },
    }
}
