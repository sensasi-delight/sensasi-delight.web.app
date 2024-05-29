// vendors
import React, { useEffect, useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import TextField from '@mui/material/TextField'
// assets
import '../../assets/js/vendor/tagcanvas.js'
// data
import skills, { Skill } from '../../data/skills'
import { useTheme } from '@mui/material'

declare global {
    interface Window {
        TagCanvas: any
    }
}

const TagCanvas = window.TagCanvas
let tagCanvas: any

export default function SkillsSectionContent() {
    const [filters, setFilters] = useState<{
        query: string
        advanced: boolean
        intermediate: boolean
        beginner: boolean
    }>({
        query: '',
        advanced: false,
        intermediate: false,
        beginner: false,
    })

    const [filteredSkills, setFilteredSkills] = useState(skills)

    useEffect(() => {
        let filteredSkills = [...skills]

        const { advanced, intermediate, beginner, query } = filters

        const isFilterButton = advanced || intermediate || beginner

        if (isFilterButton) {
            filteredSkills = filteredSkills.filter(skill => {
                if (advanced && skill.level === 'advanced') {
                    return true
                }

                if (intermediate && skill.level === 'intermediate') {
                    return true
                }

                if (beginner && skill.level === 'beginner') {
                    return true
                }

                return false
            })
        }

        if (query) {
            filteredSkills = filteredSkills.filter(skill => {
                return skill.title.toLowerCase().includes(query.toLowerCase())
            })
        }

        setFilteredSkills(filteredSkills)
    }, [filters])

    useEffect(() => {
        if (!tagCanvas) {
            tagCanvas = TagCanvas.Start('tagcanvas', 'taglist', {
                activeAudio: false,
                minSpeed: 0.01,
                freezeActive: true,
                shuffleTags: true,
                shape: 'sphere',
                weight: true,
                textColour: null,
                weightFrom: 'data-weight',
                noTagsMessage: 'Not found',
                weightSize: 10,
                imageMode: 'both',
                imagePadding: 10,
                pinchZoom: true,
                wheelZoom: false,
                clickToFront: 600,
                fadeIn: 1000,
                initial: [0.3, -0.1],
            })
        } else {
            tagCanvas.Reload()
        }
    }, [filteredSkills])

    const filterButtons: {
        name: 'beginner' | 'intermediate' | 'advanced'
        color: ButtonProps['color']
    }[] = [
        { name: 'beginner', color: 'success' },
        { name: 'intermediate', color: 'info' },
        { name: 'advanced', color: 'error' },
    ]

    return (
        <Box
            mb={4}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *:not(:last-child)': {
                    mb: 2,
                },
            }}>
            <Box>
                <TextField
                    onChange={({ target }) => {
                        setFilters({
                            ...filters,
                            query: target.value,
                        })
                    }}
                    label="Search"
                    size="small"
                    variant="standard"></TextField>
            </Box>

            <Box>
                <canvas
                    id="tagcanvas"
                    width={400}
                    height={400}
                    style={{
                        maxWidth: '100%',
                        zIndex: '99',
                        position: 'relative',
                        margin: '0 auto',
                    }}
                    className="to-fade-in fast-anim"></canvas>
                <div id="taglist" style={{ display: 'none' }}>
                    <ul>
                        {filteredSkills.map((skill, i) => (
                            <SkillLi key={i} data={skill} />
                        ))}
                    </ul>
                </div>
            </Box>

            <Box
                sx={{
                    maxWidth: `calc(100vw - 48px - 32px - 16px - 1px)`,
                    overflowX: 'scroll',
                    alignSelf: {
                        xs: 'flex-start',
                        sm: 'center',
                    },
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}>
                <Box
                    sx={{
                        display: 'inline-flex',
                        gap: 1,
                    }}>
                    {filterButtons.map(({ name, color }) => (
                        <Button
                            key={name}
                            id={name}
                            onClick={({ currentTarget }) => {
                                const name = currentTarget.id as
                                    | 'beginner'
                                    | 'intermediate'
                                    | 'advanced'

                                setFilters({
                                    ...filters,
                                    [name]: !filters[name],
                                })
                            }}
                            variant={filters[name] ? 'contained' : 'outlined'}
                            color={color}>
                            {name}
                        </Button>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

function SkillLi({
    data: { title, logo, href = '#', level },
}: {
    data: Skill
}) {
    const { palette } = useTheme()

    let color
    let weight

    switch (level) {
        case 'beginner':
            color = palette.success.main
            weight = 1
            break
        case 'intermediate':
            color = palette.info.dark
            weight = 2
            break
        case 'advanced':
            color = palette.error.dark
            weight = 3
            break
    }

    return (
        <li key={title}>
            <a
                data-weight={weight}
                style={{
                    color: color,
                }}
                href={href}
                onClick={e => e.preventDefault()}>
                {title}
                <img src={logo} alt={title} height="32px" width="32px" />
            </a>
        </li>
    )
}
