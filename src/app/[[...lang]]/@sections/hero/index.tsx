// materials
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
// components
import CodeTag from '@/components/code-tag'
// sub-components
import type { Locale } from '@/app/[[...lang]]/@types/locale'
import ContactButtons from '../_components/social-buttons'
import ProfileImage from './profile-image'
import DICTIONARIES from '@/constants/dictionaries'

export default function HeroSection({ locale }: { locale: Locale }) {
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
            <Grid
                size={{
                    xs: 12,
                    sm: 4,
                }}
                display="flex"
                justifyContent="center">
                <ProfileImage />
            </Grid>
            <Grid
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
                    {DICTIONARIES.roleTitle1[locale]}
                </Typography>

                <Typography color="info.main">
                    {DICTIONARIES.roleTitle2[locale]}
                </Typography>

                <ContactButtons />
            </Grid>
        </Grid>
    )
}
