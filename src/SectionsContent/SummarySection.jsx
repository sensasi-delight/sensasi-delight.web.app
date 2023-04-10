import { useEffect } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Hover3D from "../assets/js/vendor/hover3D.js";

import ContactSectionContent from "./ContactSectionContent";

import CodeTag from "../components/CodeTag";

import ProfileImage from "../assets/images/me.jpg";

export default props => {
	let myHover3D = null;

	useEffect(() => {
		if (!myHover3D) {
			myHover3D = new Hover3D(".photo");
		}

		// X-axis offset
		myHover3D.xOffset = 20;
		// Y-axis offset
		myHover3D.yOffset = 20;
		// Attack. How fast the element reacts to cursor movement
		myHover3D.attack = 0.1;
		// Release. How fast the element repairs its initial state when your cursor leaves it
		myHover3D.release = 0.5;
		// Sets the distance between the user and the z=0 plane
		myHover3D.perspective = 500;

		myHover3D.create();
	}, [])

	return (
		<Grid container spacing={2} justifyContent="center" alignItems="center" {...props}>
			<Grid item sm={4} display="flex" justifyContent="center">
				<div style={{
					width: 200,
					height: 200,
				}}>
					<Paper elevation={3} className="photo" sx={theme => ({
						borderRadius: 100,
						backgroundImage: `url(${ProfileImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: '100%',
						width: '100%'
					})} />
				</div>
			</Grid>
			<Grid item sm={8}>
				<Typography variant="h5" component='p' mb={1}>
					Adam <CodeTag children="Zain" /> Akbar
				</Typography>

				<Typography variant="h2" fontWeight='bold' component='p' mb={1}>
					Coder to the bone
				</Typography>

				<Typography variant="p" color="info.main" gutterBottom>
					Full time learner, mostly web developer.
				</Typography>

				<ContactSectionContent />
			</Grid>
		</Grid >
	)
}