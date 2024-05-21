// vendors
import React, { useEffect, useState } from 'react'
// materials
import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import TextField from '@mui/material/TextField'
// assets
import '../../assets/js/vendor/tagcanvas.js'
// data
import skills from '../../data/skills.js'

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
                if (advanced && skill.weight === 3) {
                    return true
                }

                if (intermediate && skill.weight === 2) {
                    return true
                }

                if (beginner && skill.weight === 1) {
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
                        {filteredSkills.map(skill => (
                            <li key={skill.title}>
                                <a
                                    data-weight={skill.weight}
                                    style={{
                                        color: skill.color,
                                    }}
                                    href={skill.href}
                                    onClick={e => e.preventDefault()}>
                                    {skill.title}
                                    <img
                                        src={skill.logo}
                                        alt={skill.title}
                                        height="32px"
                                        width="32px"
                                    />
                                </a>
                            </li>
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
