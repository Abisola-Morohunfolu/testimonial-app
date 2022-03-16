import classes from './TestimonialContainer.module.css';
import { Container } from '@mui/material';

const TestimonialContainer = ({ children }) => {
	return <Container className={classes.TestimonialContainer}>{children}</Container>;
};

export default TestimonialContainer;
