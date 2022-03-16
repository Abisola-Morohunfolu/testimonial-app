import classes from './Header.module.css';
import { Container, Box } from '@mui/material';

const Header = () => {
	return (
		<Container component="header" sx={{ display: 'flex', flexDirection: 'column' }}>
			<Box>
				<h1 className={classes.Heading}>Amazing Experiences from Our Wonderful Customers</h1>
				<p>
					Here is what customers and vendors are saying about us, you can share your stories with us
					too.
				</p>
			</Box>
			<Box sx={{ position: 'relative', overflow: 'hidden' }}>
				<div className={classes.HeaderImageBackground}></div>
				<img
					src="https://res.cloudinary.com/abisola/image/upload/v1647430774/Testimonial_image_1_kgaq22.png"
					alt="Testimonal"
					className={classes.HeaderImage}
				/>
			</Box>
		</Container>
	);
};

export default Header;
