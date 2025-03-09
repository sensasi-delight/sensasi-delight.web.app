import type { ReactNode } from 'react'
// materials
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// sub-components
import Footer from './components/footer'
import Header from './components/top-bar'
import NumberBar from './components/number-bar'
import Sidebar from './components/sidebar'
import StarBackground from './components/star-background'
import SIDEBAR_WIDTH from '@/constants/themes/sidebar-width'

export default function PageLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />

            <Box sx={{ display: 'flex' }}>
                <Sidebar />

                <Box
                    sx={{
                        display: 'flex',
                        width: `calc(100% - ${SIDEBAR_WIDTH.toString()}px)`,
                        mt: 8,
                        pt: 3,
                        mb: 6,
                    }}>
                    <NumberBar />

                    <StarBackground />

                    <Container
                        maxWidth="md"
                        disableGutters
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                            width: {
                                sm: '100%',
                                md: 'calc(100% - 38px)',
                            },
                            mt: 4,
                            px: 4,
                            '& > section': {
                                scrollMarginTop: 100,
                            },
                        }}
                        component="main">
                        {children}
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
