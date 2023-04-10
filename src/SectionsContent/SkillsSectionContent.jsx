import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import '../assets/js/vendor/tagcanvas.js';

import skills from '../data/skills.js';

const TagCanvas = window.TagCanvas;
const tagCanvasOptions = {
	activeAudio: false,
	minSpeed: 0.01,
	freezeActive: true,
	shuffleTags: true,
	shape: 'sphere',
	weight: true,
	textColour: null,
	weightFrom: 'data-weight',
	noTagsMessage: "Not found",
	weightSize: 10,
	imageMode: 'both',
	imagePadding: 10,
	pinchZoom: true,
	wheelZoom: false,
	clickToFront: 600,
	fadeIn: 1000,
	initial: [0.3, -0.1],
};

export default () => {
	let tagCanvas = null;
	const [filters, setFilters] = useState({
		query: '',
		advanced: false,
		intermediate: false,
		beginner: false
	});

	const [filteredSkills, setFilteredSkills] = useState(skills);

	const handleQueryChange = (e) => {
		setFilters({
			...filters,
			query: e.target.value,
		});
	};

	const handleButtonFilterClick = (e) => {
		const { name } = e.target;

		setFilters({
			...filters,
			[name]: !filters[name],
		});
	};

	const filterSkills = () => {
		let filteredSkills = [...skills];

		const { advanced, intermediate, beginner, query } = filters;

		const isFilterButton = advanced || intermediate || beginner;

		if (isFilterButton) {
			filteredSkills = filteredSkills.filter((skill) => {
				if (advanced && skill.weight === 3) {
					return true;
				}

				if (intermediate && skill.weight === 2) {
					return true;
				}

				if (beginner && skill.weight === 1) {
					return true;
				}

				return false;
			});
		}

		if (query) {
			filteredSkills = filteredSkills.filter((skill) => {
				return skill.title.toLowerCase().includes(query.toLowerCase());
			});
		}

		setFilteredSkills(filteredSkills);
	}

	useEffect(() => {
		filterSkills();
	}, [filters]);

	useEffect(() => {
		try {
			if (!tagCanvas) {

				tagCanvas = TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
			} else {
				tagCanvas.Reload();
			}
		} catch (e) {
			console.log('Canvas error.');
			console.log(e);
		}
	}, [filteredSkills]);

	return (
		<Box mb={4} sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			'& > *:not(:last-child)': {
				mb: 2,
			}
		}}>

			<Box>
				<TextField onChange={handleQueryChange} label="Search" size="small" variant="standard"></TextField>
			</Box>

			<Box>
				<canvas
					id='tagcanvas'
					width={400}
					height={400}
					style={{
						maxWidth: '100%',
						zIndex: '99',
						position: 'relative',
						margin: '0 auto',
					}}
					className='to-fade-in fast-anim'
				></canvas>
				<div id='taglist' style={{ display: 'none' }}>
					<ul>
						{
							filteredSkills.map((skill) => (
								<li key={skill.title}>
									<a data-weight={skill.weight} style={{
										color: skill.color,
									}} href={skill.href} onClick={e => e.preventDefault()}>
										{skill.title}
										<img src={skill.logo} alt={skill.title} height="32px" width="32px" />
									</a>
								</li>
							))
						}
					</ul>
				</div>
			</Box>

			<Box sx={theme => ({
				maxWidth: `calc(100vw - ${theme.components.sidebar.width}px - 32px - 16px - 1px)`,
				overflowX: 'scroll',
				alignSelf: {
					xs: 'flex-start',
					sm: 'center',
				},
				'&::-webkit-scrollbar': {
					display: 'none',
				}
			})}>
				<Box sx={{
					display: 'inline-flex',
					gap: 1,
				}}>

					{
						[
							{ name: 'beginner', color: 'success' },
							{ name: 'intermediate', color: 'info' },
							{ name: 'advanced', color: 'error' },
						].map((buttonFilter) =>
							<Button
								key={buttonFilter.name}
								name={buttonFilter.name}
								onClick={handleButtonFilterClick}
								variant={filters[buttonFilter.name] ? 'contained' : 'outlined'} color={buttonFilter.color}>
								{buttonFilter.name}
							</Button>
						)
					}
				</Box>
			</Box>
		</Box>

	);
};