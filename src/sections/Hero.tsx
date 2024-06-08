// vendors
import { useEffect } from 'react'
// materials
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
// components
import ContactSectionContent from './Contact/Content'
import CodeTag from '@/components/CodeTag'
// assets
import ProfileImage from '@/assets/images/me.jpg'
import Hover3D from '@/assets/js/vendor/Hover3D.js'

export default function Hero() {
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
                <div
                    style={{
                        width: 200,
                        height: 200,
                    }}>
                    <Paper
                        elevation={3}
                        className="photo"
                        sx={{
                            borderRadius: 100,
                            backgroundImage: `url(${ProfileImage as string})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </div>
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

                <ContactSectionContent />
            </Grid>
        </Grid>
    )
}
