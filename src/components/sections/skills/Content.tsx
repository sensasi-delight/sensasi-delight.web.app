declare global {
    interface Window {
        TagCanvas: TagCanvas
    }
}
// vendors
import { useEffect, useState } from 'react'
// materials
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
// assets
import '@/assets/js/vendor/TagCanvas.js'
// data
import skills, { type Skill } from '@/constants/data/skills'

export default function SkillsSectionContent({
    searchText,
}: {
    searchText: string
}) {
    const [isShowAdvancedSkills, setIsShowAdvancedSkills] = useState(false)
    const [isShowIntermediateSkills, setIsShowIntermediateSkills] =
        useState(false)
    const [isShowBeginnerSkills, setIsShowBeginnerSkills] = useState(false)

    const [skillsToShow, setSkillsToShow] = useState(skills)

    useEffect(() => {
        let filteredSkills = [...skills]

        if (
            isShowAdvancedSkills ||
            isShowIntermediateSkills ||
            isShowBeginnerSkills
        ) {
            filteredSkills = filteredSkills.filter(skill => {
                if (isShowAdvancedSkills && skill.level === 'advanced') {
                    return true
                }

                if (
                    isShowIntermediateSkills &&
                    skill.level === 'intermediate'
                ) {
                    return true
                }

                if (isShowBeginnerSkills && skill.level === 'beginner') {
                    return true
                }

                return false
            })
        }

        if (searchText) {
            filteredSkills = filteredSkills.filter(({ title }) =>
                title.toLowerCase().includes(searchText.toLowerCase()),
            )
        }

        setSkillsToShow(filteredSkills)
    }, [
        searchText,
        isShowAdvancedSkills,
        isShowIntermediateSkills,
        isShowBeginnerSkills,
    ])

    useEffect(() => {
        if (!window.TagCanvas.started) {
            window.TagCanvas.Start('skills-tagcanvas', 'taglist', {
                activeAudio: false,
                minSpeed: 0.01,
                freezeActive: true,
                shuffleTags: true,
                shape: 'sphere',
                weight: true,
                textColour: null,
                weightFrom: 'data-weight',
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
            window.TagCanvas.Reload('skills-tagcanvas')
        }
    }, [skillsToShow])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}>
            <Box>
                <canvas
                    id="skills-tagcanvas"
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
                        {skillsToShow.map((skill, i) => (
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
                    <Button
                        onClick={() => {
                            setIsShowBeginnerSkills(prev => !prev)
                        }}
                        variant={
                            isShowBeginnerSkills ? 'contained' : 'outlined'
                        }
                        color="success">
                        Beginner
                    </Button>

                    <Button
                        onClick={() => {
                            setIsShowIntermediateSkills(prev => !prev)
                        }}
                        variant={
                            isShowIntermediateSkills ? 'contained' : 'outlined'
                        }
                        color="info">
                        Intermediate
                    </Button>

                    <Button
                        onClick={() => {
                            setIsShowAdvancedSkills(prev => !prev)
                        }}
                        variant={
                            isShowAdvancedSkills ? 'contained' : 'outlined'
                        }
                        color="error">
                        Advanced
                    </Button>
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

    let color: string
    let weight: number
    let sizePx: number

    switch (level) {
        case 'beginner':
            color = palette.success.main
            weight = 1
            sizePx = 26
            break
        case 'intermediate':
            color = palette.info.dark
            weight = 2
            sizePx = 29
            break
        case 'advanced':
            color = palette.error.dark
            weight = 3
            sizePx = 32
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
                onClick={e => {
                    e.preventDefault()
                }}>
                {title}
                <img
                    loading="lazy"
                    src={logo}
                    alt={title}
                    height={sizePx.toString() + 'px'}
                    width={sizePx.toString() + 'px'}
                />
            </a>
        </li>
    )
}
