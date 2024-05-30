// types
import type { Writing } from '../../../../../data/writings'
// vendors

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(LocalizedFormat)
// materials
import CardActionArea from '@mui/material/CardActionArea'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
// hooks
import BaseCard from '../../../BaseCard'

export default function ArticleCard({ data }: { data: Writing }) {
    const { title, date, type, previewText, previewImg, link, tooltip } = data

    return (
        <BaseCard>
            <Tooltip title={tooltip}>
                <CardActionArea href={link} target="_blank">
                    <CardHeader
                        title={title}
                        subheader={`${type} • ${dayjs(date).format('LL')}`}
                    />

                    <CardMedia
                        title={title}
                        image={previewImg}
                        sx={{ height: 140 }}
                    />
                    <CardContent>
                        <Typography align="justify">{previewText}</Typography>
                    </CardContent>
                </CardActionArea>
            </Tooltip>
        </BaseCard>
    )
}
