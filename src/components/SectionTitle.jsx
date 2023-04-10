import Typography from "@mui/material/Typography";
import CodeTag from "./CodeTag";

export default props => (
	<Typography component='h2' {...props} sx={{
		fontSize: '1.9em',
	}}>
		<CodeTag>
			{props.children}
		</CodeTag>
	</Typography>
)