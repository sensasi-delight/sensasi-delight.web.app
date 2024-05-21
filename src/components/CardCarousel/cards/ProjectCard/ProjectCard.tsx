// types
import type { Project } from '../../../../data/projects'
// vendors
import React from 'react'
// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
// hooks
import BaseCard from '../../BaseCard'

export default function ProjectCard({ data }: { data: Project }) {
    const { name, year, description, imgPreview, stacks, buttons } = data

    return (
        <BaseCard>
            <CardMedia title={name} image={imgPreview} sx={{ height: 140 }} />

            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography mb={2} variant="body2" color="text.secondary">
                    {year}
                </Typography>

                <Typography mb={2}>{description}</Typography>

                <Typography mb={1} variant="body2" color="text.secondary">
                    Stack:
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        '*': { mr: 2 },
                        justifyContent: 'normal',
                        alignItems: 'center',
                    }}>
                    {stacks.map((stack, i) => (
                        <Tooltip key={i} title={stack.alt} placement="top">
                            <img
                                src={stack.logoImg}
                                alt={stack.alt}
                                height="40px"
                            />
                        </Tooltip>
                    ))}
                </Box>
            </CardContent>
            <CardActions>
                {buttons.map((button, i) => (
                    <Button
                        key={i}
                        size="small"
                        color="info"
                        href={button.link}
                        target="_blank">
                        {button.name}
                    </Button>
                ))}
            </CardActions>
        </BaseCard>
    )
}
