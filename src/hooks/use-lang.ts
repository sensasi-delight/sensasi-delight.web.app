export default function useLang() {
    const path = location.pathname.split('/')[1] ?? ''

    const lang = ['jp'].includes(path) ? 'jp' : 'en'

    return lang
}
