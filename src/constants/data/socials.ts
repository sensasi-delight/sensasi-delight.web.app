import {
    type IconDefinition,
    faGithub,
    faLinkedin,
    faMediumM,
    // faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export interface Social {
    name: string
    icon: IconDefinition
    link: string
}

const socials: Social[] = [
    // {
    //     name: 'Twitter',
    //     icon: faTwitter,
    //     link: 'https://twitter.com/sensasi_delight',
    // },
    {
        name: 'GitHub',
        icon: faGithub,
        link: 'https://github.com/sensasi-delight',
    },
    {
        name: 'Linked In',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/sensasi-delight/',
    },
    {
        name: 'Medium',
        icon: faMediumM,
        link: 'https://medium.com/@sensasi_delight',
    },
    {
        name: 'Google Scholar',
        icon: faGraduationCap,
        link: 'https://scholar.google.com/citations?user=N9MoW0EAAAAJ&hl=en',
    },
    {
        name: 'Email',
        icon: faEnvelope,
        link: 'mailto:zainadam.id@gmail.com?subject=Hi%20Adam&body=Hi%20Adam%2C%0A%0AI%20am%20interested%20in%20your%20profile%20and%20would%20like%20to%20know%20more.%20Could%20you%20please%20send%20me%20your%20resume%20or%20contact%20me%20at%20your%20earliest%20convenience.%20I%20would%20appreciate%20a%20response%20at%20your%20earliest%20convenience.%20Thank%20you%20for%20your%20time%20and%20consideration.%20I%20look%20forward%20to%20hearing%20from%20you.%20%0A%0ABest%20regards%2C%0A',
    },
]

export default socials
