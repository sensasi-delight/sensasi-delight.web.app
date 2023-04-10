import { useRef, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import CardCarousel from "../components/CardCarousel";

import moment from "moment/moment";

import writings from "../data/writings";
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
					writings.map((writing, i) => (
						<Card key={i} elevation={4} sx={theme => ({
							maxWidth: theme.components.card.maxWidth
						})}>
							<LinearProgress color="info" variant="determinate" value={isOnScreen ? timeKeepers[i] || 0 : 0} sx={{
								'& > .MuiLinearProgress-bar': {
									transitionDuration: isOnScreen ? `${interval / 1000 - 1}s` : '0s'
								}
							}} />
							<Tooltip title={writing.tooltip}>
								<CardActionArea href={writing.link} target="_blank">
									<CardHeader
										title={writing.title}
										subheader={`${writing.type} • ${moment(writing.date).format('LL')}`}
									/>

									<CardMedia
										title={writing.title}
										image={writing.previewImg}
										sx={{ height: 140 }}
									/>
									<CardContent>
										<Typography align="justify">
											{writing.previewText}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Tooltip>
						</Card>
					))
				}
			</CardCarousel>
		</Box>
	);
}