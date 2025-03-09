import type { Locale } from '@/app/[[...lang]]/@types/locale'

export default interface Writing {
    date: string
    lang: 'id' | 'en'
    link: string
    platform: string
    previewText: Record<Locale, string> & {
        id?: string
    }
    title: Record<Locale, string> & {
        id?: string
    }
    type: 'blog' | 'book' | 'paper'
}
