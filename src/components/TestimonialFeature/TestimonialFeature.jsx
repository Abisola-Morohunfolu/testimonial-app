import classes from './TestimonialFeature.module.css';
import { Container, Box } from '@mui/material';
import ShareButton from '../ShareButton/ShareButton';

const TestimonialFeature = ({
	imagePosition,
	bgType,
	name,
	image,
	testimonial,
	category,
	clicked,
}) => {
	let bgColor = '';
	let textColor = '';

	if (bgType === 'dark') {
		bgColor = '#222';
		textColor = '#fff';
	}
	return (
		<Container
			sx={{ background: bgColor, margin: 0, width: '100%' }}
			className={`${classes.ContainerStyles} ${imagePosition === 'bottom' ? classes.Reverse : ''}`}
		>
			<Box>
				<img src={image} alt={name} className={classes.TestimonialFeatureImage} />
			</Box>
			<Box sx={{ color: textColor, padding: '1rem' }} className={classes.TestimonialFeatureTextBox}>
				<h5 className={classes.TestimonialFeatureHeading}>
					{name} <span>{category}</span>
				</h5>
				<p className={classes.TestimonialFeatureText}>{testimonial}</p>
				<ShareButton color={`${bgType === 'dark' ? '#fff' : '#ff5c00'}`} onClick={clicked} />
			</Box>
		</Container>
	);
};

export default TestimonialFeature;
