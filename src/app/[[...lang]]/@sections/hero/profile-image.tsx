import style from './profile-image.module.css'
import Paper from '@mui/material/Paper'

export default function ProfileImage() {
    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: 100,
                width: 200,
                height: 200,
            }}>
            <div className={style['profile-picture']} />
        </Paper>
    )
}
