// vendors
import { useEffect } from 'react'
// materials
import Typography from '@mui/material/Typography'
import Grid2 from '@mui/material/Grid2'
// components
import CodeTag from '@/components/code-tag'
// assets
import Hover3D from '@/assets/js/vendor/Hover3D.js'
// sub-components
import ContactButtons from '../_components/social-buttons'
import ProfileImage from './profile-image'
import useLang from '@/hooks/use-lang'

const contents = {
    sentence1: {
        en: 'Coder to the bone',
        jp: 'コーダーとなる',
    },

    sentence2: {
        en: 'Full time learner, mostly a web developer.',
        jp: 'フルタイム学習者、主にウェブ開発者。',
    },
}

export default function HeroSection() {
    const lang = useLang()

    useEffect(() => {
        new Hover3D('.photo', {
            xOffset: 20,
            yOffset: 20,
            attack: 0.1,
            release: 0.5,
            perspective: 500,
        })
    }, [])

    return (
        <Grid2
            id="summary"
            component="section"
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
                flexDirection: {
                    xs: 'column-reverse',
                    sm: 'row',
                },
            }}>
            <Grid2
                size={{
                    xs: 12,
                    sm: 4,
                }}
                display="flex"
                justifyContent="center">
                <ProfileImage />
            </Grid2>
            <Grid2
                size={{
                    xs: 12,
                    sm: 8,
                }}
                gap={1.5}
                display="flex"
                flexDirection="column">
                <Typography variant="h5" component="p">
                    Adam <CodeTag>Zain</CodeTag> Akbar
                </Typography>

                <Typography
                    variant="h2"
                    fontWeight="bold"
                    component="p"
                    lineHeight={0.9}>
                    {contents.sentence1[lang]}
                </Typography>

                <Typography color="info.main">
                    {contents.sentence2[lang]}
                </Typography>

                <ContactButtons />
            </Grid2>
        </Grid2>
    )
}
