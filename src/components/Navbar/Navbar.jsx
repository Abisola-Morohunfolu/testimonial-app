import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">
				<img
					src="https://res.cloudinary.com/abisola/image/upload/v1647430773/vasiti_logo_exw30d.png"
					alt="Vasiti.com"
					className={classes.Brand}
				/>
			</NavLink>
		</nav>
	);
};

export default Navbar;
