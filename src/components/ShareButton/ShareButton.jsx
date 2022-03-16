import classes from './ShareButton.module.css';
import { Link } from '@mui/material';

const ShareButton = ({ color, onClick }) => {
	return (
		<Link
			href="/share-your-story"
			className={classes.ShareButton}
			sx={{ color: color }}
			onClick={onClick}
			underline="none"
		>
			Share your story
		</Link>
	);
};

export default ShareButton;
