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
        text: 'Summary',
        Icon: PhotoOutlinedIcon,
    },
    {
        href: '#about',
        text: 'About me',
        Icon: SummarizeOutlinedIcon,
    },
    {
        href: '#skills',
        text: 'Skills',
        Icon: HandymanIcon,
    },
    {
        href: '#projects',
        text: 'Projects',
        Icon: RocketLaunchIcon,
    },
    {
        href: '#writings',
        text: 'Writings',
        Icon: NewspaperIcon,
    },
    {
        href: '#socials',
        text: 'Socials',
        Icon: ContactIcon,
    },
] as const

export default MENUS
