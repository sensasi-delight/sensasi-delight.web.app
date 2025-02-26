// vendors
import {
    FontAwesomeIcon,
    type FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
// materials
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
//
import type { Social } from '@/constants/data/socials'

export default function SocialIconButton({
    data,
    size,
    title,
}: {
    title?: string
    data: Social
    size: FontAwesomeIconProps['size']
}) {
    const { name, link, icon } = data

    return (
        <Tooltip title={title ?? name} arrow placement="top">
            <IconButton href={link} target="_blank">
                <FontAwesomeIcon size={size} icon={icon} />
            </IconButton>
        </Tooltip>
    )
}
