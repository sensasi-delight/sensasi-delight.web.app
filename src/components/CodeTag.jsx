import Typography from "@mui/material/Typography";

export default (props) => (
	<Typography color={props.color || 'info.main'} component="span" sx={theme => ({
		fontFamily: 'monospace',
		fontWeight: 'bold',
		fontSize: "inherit",
		'&:after': {
			content: '">"',
			color: theme.palette.text.secondary
		}, '&:before': {
			content: "'<'",
			color: theme.palette.text.secondary
		}
	})}>{props.children}</Typography>
);