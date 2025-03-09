// icons
import ContactIcon from '@mui/icons-material/LanOutlined'
import HandymanIcon from '@mui/icons-material/HandymanOutlined'
import NewspaperIcon from '@mui/icons-material/NewspaperOutlined'
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunchOutlined'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined'

const MENUS = [
    {
        href: '#summary',
        text: {
            en: 'Summary',
            ja: 'サマリー',
        },
        Icon: PhotoOutlinedIcon,
    },
    {
        href: '#about',
        text: {
            en: 'About',
            ja: '自己紹介',
        },
        Icon: SummarizeOutlinedIcon,
    },
    {
        href: '#skills',
        text: {
            en: 'Skills',
            ja: 'スキル',
        },
        Icon: HandymanIcon,
    },
    {
        href: '#projects',
        text: {
            en: 'Projects',
            ja: 'プロジェクト',
        },
        Icon: RocketLaunchIcon,
    },
    {
        href: '#writings',
        text: {
            en: 'Writings',
            ja: '記事',
        },
        Icon: NewspaperIcon,
    },
    {
        href: '#socials',
        text: {
            en: 'Socials',
            ja: 'SNS',
        },
        Icon: ContactIcon,
    },
] as const

export default MENUS
