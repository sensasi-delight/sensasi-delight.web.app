import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import theme from '../theme';


const renderRowNumber = (rowNumber) => {
	let rendered = [];

	for (let i = 1; i <= rowNumber; i++) {
		rendered.push(<ListItem key={i} sx={{
			py: 0,
			pr: 0,
			textAlign: 'end',
			'&:hover': {
				color: '#f1f1f1'
			}
		}}>
			<ListItemText>
				{i}
			</ListItemText>
		</ListItem>);
	}

	return rendered;
}

export default props => (
	<Box sx={{
		userSelect: 'none',
		display: {
			xs: 'none',
			md: 'block'
		},
	}} fontFamily="monospace" color={theme.palette.text.secondary}
		{...props}>
		<List sx={{ py: 0, cursor: 'unset' }}>
			{renderRowNumber(94)}
		</List>
	</Box>
)