// vendors
import type { ReactNode } from 'react'
import { toWords } from 'number-to-words'
// materials
import Typography from '@mui/material/Typography'
// sub-components
import Section from './_components/layout'
// components
import type { Locale } from '../@types/locale'
import CodeTag from '@/components/code-tag'

const content: Record<Locale, ReactNode[]> = {
    en: [
        <>
            Hello, World!, my name is <CodeTag>Adam Akbar</CodeTag> but everyone
            calls me <CodeTag>Zain</CodeTag>!, I'm a highly skilled{' '}
            <CodeTag>developer</CodeTag> with a proven track record in{' '}
            <CodeTag>PHP</CodeTag> development spanning over{' '}
            <CodeTag>{toWords(new Date().getFullYear() - 2016)}</CodeTag> years.
            I take pride in my ability to deliver high-quality solutions that
            meet and exceed client expectations.
        </>,
        <>
            On top of my impressive coding skills, I hold a{' '}
            <CodeTag>Master's</CodeTag> degree in Computer Science, where I
            focused on building a cutting-edge <CodeTag>blockchain</CodeTag>{' '}
            network using Hyperledger Fabric. This has given me a unique
            perspective on the intersection of web development and blockchain
            technology, and I'm <CodeTag>excited</CodeTag> to bring my expertise
            to the table on any project I'm involved in.
        </>,
    ],

    ja: [
        <>
            ハロー、ワールド！私の名前はアダム・アクバルですが、皆からはザインと呼ばれています！9年以上にわたるPHP開発の実績を誇る高度なスキルを持った開発者です。クライアントの期待を満たし、さらに上回る高品質なソリューションを提供できる能力を誇りに思っています。
        </>,
        <>
            卓越したコーディングスキルに加え、コンピュータサイエンスの修士号を取得しており、ハイパーレジャーファブリックを使った最先端ブロックチェーンネットワークの構築に焦点を当てた研究を行いました。これにより、ウェブ開発とブロックチェーン技術の交差点に対するユニークな視点を獲得し、関わる全てのプロジェクトでこの専門知識を活かせることにワクワクしています。
        </>,
    ],
}

const sectionTitle: Record<Locale, string> = {
    en: 'About Me',
    ja: '私について',
}

export default function AboutSection({ locale }: { locale: Locale }) {
    return (
        <Section id="about" title={sectionTitle[locale]}>
            <Typography sx={{ mb: 2 }} align="justify">
                {content[locale][0]}
            </Typography>

            <Typography align="justify">{content[locale][1]}</Typography>
        </Section>
    )
}
