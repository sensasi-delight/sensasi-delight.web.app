// hooks
import { useFirebase } from '@/hooks/useFirebase'
//
import HeroSection from './components/sections/hero'
import Layout from './components/layout'
import MainContent from '@/components/MainContent'

export default function App() {
    useFirebase()

    return (
        <Layout>
            <HeroSection />
            <MainContent />
        </Layout>
    )
}
