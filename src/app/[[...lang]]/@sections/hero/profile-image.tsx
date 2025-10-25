import Paper from '@mui/material/Paper'
import pp360Jpg from './profile-picture-assets/pp-360.jpg'
import pp360Avif from './profile-picture-assets/pp-360.avif'
import pp360Webp from './profile-picture-assets/pp-360.webp'
import Box from '@mui/material/Box'

export default function ProfileImage() {
    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: 100,
                width: 200,
                height: 200,
            }}>
            <Box
                sx={{
                    backgroundImage: `image-set(
                        url(${pp360Avif.src}) type("image/avif"),
                        url(${pp360Webp.src}) type("image/webp"),
                        url(${pp360Jpg.src}) type("image/jpeg")
                    )`,
                    borderRadius: 'inherit',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                }}
            />
        </Paper>
    )
}
