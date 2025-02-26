// vendors
import { useEffect } from 'react'
// materials
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
// components
import CodeTag from '@/components/code-tag'
// assets
import Hover3D from '@/assets/js/vendor/Hover3D.js'
// sub-components
import ContactButtons from '../_components/social-buttons'
import ProfileImage from './profile-image'

export default function HeroSection() {
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
        <Grid
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
            <Grid item sm={4} display="flex" justifyContent="center">
                <ProfileImage />
            </Grid>
            <Grid item sm={8} gap={1.5} display="flex" flexDirection="column">
                <Typography variant="h5" component="p">
                    Adam <CodeTag>Zain</CodeTag> Akbar
                </Typography>

                <Typography
                    variant="h2"
                    fontWeight="bold"
                    component="p"
                    lineHeight={0.9}>
                    Coder to the bone
                </Typography>

                <Typography color="info.main">
                    Full time learner, mostly a web developer.
                </Typography>

                <ContactButtons />
            </Grid>
        </Grid>
    )
}
