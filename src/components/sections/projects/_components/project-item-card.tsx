// materials
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
//
import type Project from '@/types/project'
import BrandIconImg from './brand-icon-img'

export default function ProjectItemCard({ data }: { data: Project }) {
    const { name, year, description, stacks, buttons } = data

    return (
        <Card
            elevation={4}
            sx={{
                borderRadius: 4,
                minWidth: 300,
            }}>
            <CardContent sx={{ position: 'relative', height: '100%' }}>
                <Typography mb={1} variant="body2" color="text.secondary">
                    Stacks:
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                        mb: 4,
                    }}>
                    {stacks.map(stack => (
                        <BrandIconImg key={stack} brand={stack} />
                    ))}
                </Box>

                <Typography variant="h5" component="div">
                    {name}
                </Typography>

                <Typography mb={2} variant="body2" color="text.secondary">
                    {year}
                </Typography>

                <Typography variant="body2" mb={8}>
                    {description}
                </Typography>

                <Box
                    display="flex"
                    gap={1}
                    mt={2}
                    position="absolute"
                    bottom={16}>
                    {buttons.map(button => (
                        <Button
                            color="info"
                            href={button.url}
                            key={button.url}
                            size="small"
                            variant="outlined"
                            startIcon={button.Icon ? <button.Icon /> : null}
                            target="_blank">
                            {button.text}
                        </Button>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}
