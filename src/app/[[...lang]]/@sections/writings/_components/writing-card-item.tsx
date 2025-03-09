// vendors
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
// materials
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
// icons
import OpenInNew from '@mui/icons-material/OpenInNew'
// types
import type Writing from '@/types/writings'

dayjs.extend(LocalizedFormat)

export default function WritingCardItem({ data }: { data: Writing }) {
    const { title, date, type, previewText, link, platform } = data

    return (
        <Card
            elevation={4}
            sx={{
                borderRadius: 4,
                minWidth: 300,
            }}>
            <CardContent sx={{ position: 'relative', height: '100%' }}>
                <Chip label={type} variant="outlined" color="info" />

                <Typography variant="h6" component="div" mt={3}>
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <Link href={link} target="_blank">
                        {platform}
                    </Link>{' '}
                    • {dayjs(date).format('LL')}
                </Typography>

                <Typography variant="body2" mt={3} mb={6}>
                    {previewText}
                </Typography>

                <Button
                    href={link}
                    target="_blank"
                    size="small"
                    sx={{
                        position: 'absolute',
                        bottom: 8,
                        transform: 'translateX(-4px)',
                    }}>
                    Read on {platform}
                    <OpenInNew
                        fontSize="inherit"
                        sx={{ ml: 1, verticalAlign: 'middle' }}
                    />
                </Button>
            </CardContent>
        </Card>
    )
}
