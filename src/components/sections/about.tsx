// vendors
import { toWords } from 'number-to-words'
// materials
import Typography from '@mui/material/Typography'
// components
import CodeTag from '../CodeTag'
import Section from '@/components/Section'

export default function AboutSection() {
    return (
        <Section id="about" title="About Me">
            <Typography sx={{ mb: 2 }} align="justify">
                Hello, World!, my name is <CodeTag>Adam Akbar</CodeTag> but
                everyone calls me <CodeTag>Zain</CodeTag>!, I'm a highly skilled{' '}
                <CodeTag>developer</CodeTag> with a proven track record in{' '}
                <CodeTag>PHP</CodeTag> development spanning over{' '}
                <CodeTag>{toWords(new Date().getFullYear() - 2016)}</CodeTag>{' '}
                years. I take pride in my ability to deliver high-quality
                solutions that meet and exceed client expectations.
            </Typography>

            <Typography align="justify">
                On top of my impressive coding skills, I hold a{' '}
                <CodeTag>Master's</CodeTag> degree in Computer Science, where I
                focused on building a cutting-edge <CodeTag>blockchain</CodeTag>{' '}
                network using Hyperledger Fabric. This has given me a unique
                perspective on the intersection of web development and
                blockchain technology, and I'm <CodeTag>excited</CodeTag> to
                bring my expertise to the table on any project I'm involved in.
            </Typography>
        </Section>
    )
}
