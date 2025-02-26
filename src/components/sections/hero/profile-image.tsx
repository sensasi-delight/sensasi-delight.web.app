import Paper from '@mui/material/Paper'
import profileImageJpg from '@/assets/images/me.jpg'

export default function ProfileImage() {
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
                    backgroundImage: `url(${profileImageJpg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    width: '100%',
                }}
            />
        </div>
    )
}
