import classes from './TestimonialCard.module.css';
import { Box } from '@mui/material';

const TestimonialCard = ({ image, name, testimonial, category }) => {
	return (
		<Box className={classes.TestimonialCard}>
			<div>
				<img src={image} alt={name} className={classes.TestimonialCardImage} />
				<h6 className={classes.TestimonialCardName}>{name}</h6>
				<span className={classes[category]}>{category}</span>
			</div>
			<div>
				<p>{testimonial}</p>
			</div>
		</Box>
	);
};

export default TestimonialCard;
