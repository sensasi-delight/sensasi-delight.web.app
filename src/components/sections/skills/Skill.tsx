// vendors
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
// materials
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
// components
import SectionTitle from '@/components/sections/_components/layout/components/Title'
// locals
import SkillsSectionContent from './Content'
// icons
import CloseIcon from '@mui/icons-material/Close'

export function Skill() {
    const [searchText, setSearchText] = useState('')

    const [debouncedValue] = useDebounce(searchText, 350)

    return (
        <Box id="skills">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'space-between',
                        md: 'flex-start',
                    },
                    alignItems: 'center',
                    gap: 2,
                }}>
                <SectionTitle>Skills</SectionTitle>

                <TextField
                    onChange={({ target }) => {
                        setSearchText(target.value)
                    }}
                    value={searchText}
                    label="Search"
                    size="small"
                    variant="standard"
                    margin="none"
                    sx={{
                        transform: 'translate(0, -0.5em)',
                    }}
                    InputProps={{
                        endAdornment: (
                            <IconButton
                                size="small"
                                onClick={() => {
                                    setSearchText('')
                                }}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        ),
                    }}
                />
            </Box>

            <SkillsSectionContent searchText={debouncedValue} />
        </Box>
    )
}
