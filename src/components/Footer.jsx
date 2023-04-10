import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const sxWrapper = (theme) => ({
	display: 'flex',
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	backgroundColor: theme.palette.footer.primary,
	zIndex: theme.zIndex.drawer + 2,
	'& > *': {
		px: 1
	}
});

const sxLeft = (theme) => ({
	backgroundColor: theme.palette.footer.secondary,
});

export default () => {
	return (
		<Box sx={sxWrapper}>
			<Box sx={sxLeft}>
				<Typography variant="body2" my={.5}>
					<FontAwesomeIcon icon={faBoltLightning} />
				</Typography>
			</Box>
			<Box flexGrow={1}>
				<Typography variant="body2" my={.5}>
					<FontAwesomeIcon icon={faPizzaSlice} />
				</Typography>
			</Box>
			<Box>
				<Typography variant="body2" my={.5}>made with ❤ by myself</Typography>
			</Box>
		</Box>
	);
}