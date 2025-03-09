export default interface Writing {
    date: string
    lang: 'id' | 'en'
    link: string
    platform: string
    previewText: {
        en: string
        id?: string
        jp: string
    }
    title: {
        en: string
        id?: string
        jp: string
    }
    type: 'blog' | 'paper' | 'book'
}
