import { Suspense, lazy } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import SectionTitle from "./SectionTitle";

import SummarySection from "../SectionsContent/SummarySection";
import ContactSectionContent from "../SectionsContent/ContactSectionContent";
import AboutSectionContent from "../SectionsContent/AboutSectionContent";
// import SkillsSectionContent from "../SectionsContent/SkillsSectionContent";
// import ProjectsSectionContent from "../SectionsContent/ProjectsSectionContent";
// import WritingsSectionContent from "../SectionsContent/WritingsSectionContent";

import socials from "../data/socials";
import ThreeLineSkeleton from "./ThreeLineSkeleton";

const SkillsSectionContent = lazy(() => import("../SectionsContent/SkillsSectionContent"));
const ProjectsSectionContent = lazy(() => import("../SectionsContent/ProjectsSectionContent"));
const WritingsSectionContent = lazy(() => import("../SectionsContent/WritingsSectionContent"));

export default props => {

	return (
		<Container {...props} maxWidth="md"
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 5,
				mb: {
					xs: '50vh',
					md: 'unset'
				}, '& > div': {
					scrollMarginTop: 100
				}
			}}
		>
			<SummarySection className="section" id="summary" />

			<Box className="section" id="about">
				<SectionTitle mb={2} children="About me" />
				<AboutSectionContent />
			</Box>

			<Box className="section" id="skills">
				<SectionTitle mb={2} children="Skills" />

				<Suspense fallback={<ThreeLineSkeleton />}>
					<SkillsSectionContent />
				</Suspense>
			</Box>

			<Box className="section" id="projects" sx={{
				'transition': 'all 0.5s ease-in-out',
			}}>
				<Box mb={2} sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					justifyContent: {
						xs: 'space-between',
						md: 'flex-start'
					},
				}}>
					<SectionTitle children="Projects" />

					<Typography variant="body2" color='text.secondary'>
						<Tooltip title="See more on my GitHub">
							<IconButton href={socials.find(social => social.name === 'GitHub').link} target="_blank">
								<FontAwesomeIcon size="sm" icon={faGithub} />
							</IconButton>
						</Tooltip>
					</Typography>
				</Box>

				<Suspense fallback={<ThreeLineSkeleton />}>
					<ProjectsSectionContent />
				</Suspense>
			</Box>

			<Box id="writings" className="section">
				<Box mb={2} sx={{
					display: 'flex',
					justifyContent: {
						xs: 'space-between',
						md: 'flex-start'
					},
					alignItems: 'center',
					gap: 2


				}}>
					<SectionTitle children="Writings" />

					<Typography variant="body2" color='text.secondary'>
						<Tooltip title="See more on my Medium">
							<IconButton href={socials.find(social => social.name === 'Medium').link} target="_blank">
								<FontAwesomeIcon size="sm" icon={faMediumM} />
							</IconButton>
						</Tooltip>

						<Tooltip title="See more on my Google Scholar">
							<IconButton href={socials.find(social => social.name === 'Google Scholar').link} target="_blank">
								<FontAwesomeIcon size="sm" icon={faGraduationCap} />
							</IconButton>
						</Tooltip>
					</Typography>
				</Box>

				<Suspense fallback={<ThreeLineSkeleton />}>
					<WritingsSectionContent />
				</Suspense>
			</Box>

			<Box className="section" id="contacts">
				<SectionTitle mb={2} children="Keep in touch" />
				<ContactSectionContent />
			</Box>
		</ Container>
	);
}