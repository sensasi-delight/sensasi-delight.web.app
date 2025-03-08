import { usePathname } from 'next/navigation'

export default function useLang() {
    const path = usePathname().split('/')[1] ?? ''

    const lang = ['jp'].includes(path) ? 'jp' : 'en'

    return lang
}
