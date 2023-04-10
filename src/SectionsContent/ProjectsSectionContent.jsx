
import { useRef, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

import CardCarousel from "../components/CardCarousel";

import projects from "../data/projects";
import { useOnScreen } from "../utils";

const interval = 5000;

export default () => {
	const ref = useRef();
	const isOnScreen = useOnScreen(ref);

	const [timeKeepers, setTimeKeepers] = useState([]);

	return (
		<Box ref={ref}>
			<CardCarousel autoPlay={isOnScreen} onChange={(now, prev) => {
				setTimeout(() => {
					timeKeepers[prev] = 0;
					timeKeepers[now] = 100;
					setTimeKeepers([...timeKeepers]);
				}, 500)
			}}>
				{
					projects.map((pr, i) => (
						<Card elevation={4} key={i} sx={theme => ({
							maxWidth: theme.components.card.maxWidth
						})}>
							<LinearProgress color="info" variant="determinate" value={isOnScreen ? timeKeepers[i] || 0 : 0} sx={{
								'& > .MuiLinearProgress-bar': {
									transitionDuration: isOnScreen ? `${interval / 1000 - 1}s` : '0s'
								}
							}} /> 

							{
								pr.imgPreview &&
								<CardMedia title={pr.name} image={pr.imgPreview} sx={{ height: 140 }} />
							}
							<CardContent>
								<Typography variant="h5" component="div">
									{pr.name}
								</Typography>

								<Typography mb={2} variant="body2" color="text.secondary">
									{pr.year}
								</Typography>

								<Typography mb={2}>
									{pr.description}
								</Typography>

								{
									pr.stacks?.length > 0 && <Typography mb={1} variant="body2" color="text.secondary">
										Stack:
									</Typography>
								}

								<Box sx={{ display: 'flex', '*': { mr: 2 }, justifyContent: 'normal', alignItems: 'center' }}>
									{
										pr.stacks?.map((stack, i) => (
											<Tooltip key={i} title={stack.alt} placement="top">
												<img src={stack.logoImg} alt={stack.alt} height="40px" />
											</Tooltip>
										))
									}
								</Box>
							</CardContent>
							<CardActions>
								{
									pr.buttons?.map((button, i) => (
										<Button key={i} size='small' color="info" href={button.link} target="_blank">{button.name}</Button>
									))
								}
							</CardActions>
						</Card>
					))
				}
			</CardCarousel >
		</Box>
	);
}