import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import socials from "../data/socials";

export default props => {
	return (
		<Box {...props}>
			{socials.map((social, i) =>
				<Tooltip key={i} title={social.name}>
					<IconButton aria-label={social.name} href={social.link} target="_blank">
						<FontAwesomeIcon size="lg" icon={social.icon} />
					</IconButton>
				</Tooltip>
			)}
		</Box>
	)
}