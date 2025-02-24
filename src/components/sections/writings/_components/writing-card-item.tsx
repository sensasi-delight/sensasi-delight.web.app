// vendors
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
// materials
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
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
                height: 'fit-content',
            }}>
            <CardActionArea href={link} target="_blank">
                <CardContent>
                    <Chip label={type} variant="outlined" color="info" />

                    <Typography variant="h6" component="div" mt={2}>
                        {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        <Link href={link} target="_blank">
                            {platform}
                        </Link>{' '}
                        • {dayjs(date).format('LL')}
                    </Typography>

                    <Typography variant="body2" mt={3} mb={1}>
                        {previewText}
                    </Typography>

                    <Link href={link} target="_blank" fontSize={12}>
                        Read More{' '}
                        <OpenInNew
                            fontSize="inherit"
                            sx={{
                                verticalAlign: 'middle',
                            }}
                        />
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
