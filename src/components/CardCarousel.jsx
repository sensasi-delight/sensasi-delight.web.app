
import Carousel from "react-material-ui-carousel"

export default props => {

	return (
		<Carousel
			{
			...{
				interval: 5000,
				animation: "slide",
				changeOnFirstRender: true,
				fullHeightHover: false,
				sx: theme => ({
					maxWidth: theme.components.card.maxWidth,
					margin: 'auto',
					transition: 'transform 0.15s ease-in-out',
					'&:hover': {
						transform: 'scale(1.05)',

						'& .MuiLinearProgress-root': {
							display: 'none',
						},
					},
					'* > div': {
						margin: 'auto'
					}
				}),
				...props
			}}
		/>
	)
}
