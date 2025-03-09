import { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import profileImageJpg from '@/assets/images/me.jpg'
import Hover3D from '@/assets/js/vendor/Hover3D.js'

export default function ProfileImage() {
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
                    backgroundImage: `url(${profileImageJpg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                }}
            />
        </div>
    )
}
