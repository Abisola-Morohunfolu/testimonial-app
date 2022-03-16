import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav>
			<img
				src="https://res.cloudinary.com/abisola/image/upload/v1647430773/vasiti_logo_exw30d.png"
				alt="Vasiti.com"
				className={classes.Brand}
			/>
		</nav>
	);
};

export default Navbar;
