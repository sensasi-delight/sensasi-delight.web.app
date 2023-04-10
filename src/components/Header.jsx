import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";

// import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from '@mui/icons-material/InfoOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default props => {
	const [breadcrumbs, setBreadcrumbs] = useState([
		<Typography>src</Typography>,
		<Typography sx={{
			display: 'flex',
			alignItems: 'center',
		}}>
			<InfoIcon color="info" sx={{ mr: 1, fontSize: '1em' }} />
			README.md
		</Typography>
	]);

	return (
		<AppBar position="fixed" sx={theme => ({
			pl: `${theme.components.sidebar.width}px`
		})} {...props}>
			<Box sx={theme => ({
				backgroundColor: theme.palette.background.tertiary,
				backgroundImage: 'unset'
			})}>

				<Box sx={theme => ({
					display: 'inline-flex',
					alignItems: 'center',
					backgroundColor: theme.palette.background.default,
					flexGrow: 0,
					p: 1,
					pl: 2,
					pt: 1.2
				})}>
					<InfoIcon color="info" fontSize='small' />

					<Typography mx={1}>README.md</Typography>
				</Box>
			</Box>

			<Box sx={theme => ({
				backgroundColor: theme.palette.background.default
			})}>
				<Breadcrumbs px={2} py={.2}
					separator={<NavigateNextIcon />}
					aria-label="breadcrumb"
					sx={theme => ({
						'& .MuiBreadcrumbs-separator': {
							color: theme.palette.text.secondary,
							m: 0
						},
					})}
				>
					{breadcrumbs.map((breadcrumb, i) => (
						<div key={i}>
							{breadcrumb}
						</div>
					))}
				</Breadcrumbs>
			</Box>
		</AppBar>
	)
}