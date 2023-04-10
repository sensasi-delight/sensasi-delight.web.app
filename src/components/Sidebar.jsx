import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';

import FaceIcon from '@mui/icons-material/FaceOutlined';
import WavingHandIcon from '@mui/icons-material/WavingHandOutlined';
import HandymanIcon from '@mui/icons-material/HandymanOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunchOutlined';
import NewspaperIcon from '@mui/icons-material/NewspaperOutlined';
import ContactIcon from '@mui/icons-material/LanOutlined';
import WallpaperIcon from '@mui/icons-material/WallpaperOutlined';

const drawer1Sx = theme => ({
	width: theme.components.sidebar.width,
	'& .MuiDrawer-paper': {
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		backgroundColor: theme.palette.background.secondary,
		border: 'none',
		width: '48px',
	}
});

const menuButtons = [
	{
		href: '#summary',
		text: 'Summary',
		icon: <FaceIcon sx={{
			fontSize: '1em'
		}} />
	}, {
		href: '#about',
		text: 'About me',
		icon: <WavingHandIcon sx={{
			fontSize: '1em'
		}} />
	}, {
		href: '#skills',
		text: 'Skills',
		icon: <HandymanIcon sx={{
			fontSize: '1em'
		}} />
	}, {
		href: '#projects',
		text: 'Projects',
		icon: <RocketLaunchIcon sx={{
			fontSize: '1em'
		}} />
	}, {
		href: '#writings',
		text: 'Writings',
		icon: <NewspaperIcon sx={{
			fontSize: '1em'
		}} />
	}, {
		href: '#contacts',
		text: 'Contacts',
		icon: <ContactIcon sx={{
			fontSize: '1em'
		}} />
	}
];

export default props => {
	const { isBackground, setIsBackground } = props.import;

	return (
		<Drawer sx={drawer1Sx} variant="permanent">
			<List sx={{
				flexGrow: 1,
			}}>
				{menuButtons.map((menu, i) => (
					<ListItem key={i} disablePadding sx={{ display: 'block', my: 1 }}>
						<Tooltip title={menu.text} placement='right'>
							<ListItemButton
								disableRipple
								sx={theme => ({
									justifyContent: 'center',
									fontSize: '2rem',
									color: theme.palette.text.secondary,
									'&:hover': {
										color: theme.palette.text.primary,
										backgroundColor: 'unset',
									},
								})}
								href={menu.href}
							>
								<ListItemIcon
									sx={{
										minWidth: 'unset',
										justifyContent: 'center',
										color: 'unset'
									}}
								>
									{menu.icon}
								</ListItemIcon>
							</ListItemButton>
						</Tooltip>
					</ListItem>
				))}
			</List>

			<List sx={{
				mb: 4
			}}>
				<ListItem disablePadding sx={{ display: 'block', my: 1 }}>
					<Tooltip title={(isBackground ? 'Disable' : 'Enable') + ' Background'} placement='right'>
						<ListItemButton
							disableRipple
							sx={theme => ({
								justifyContent: 'center',
								fontSize: '2rem',
								color: isBackground ? theme.palette.info.main : theme.palette.text.secondary,
								'&:hover': {
									color: isBackground ? theme.palette.info.dark : theme.palette.text.primary,
									backgroundColor: 'unset',
								},
							})}
							onClick={() => setIsBackground(!isBackground)}
						>
							<ListItemIcon
								sx={{
									minWidth: 'unset',
									justifyContent: 'center',
									color: 'unset'
								}}
							>
								<WallpaperIcon />
							</ListItemIcon>
						</ListItemButton>
					</Tooltip>
				</ListItem>
			</List>
		</Drawer>
	);
}