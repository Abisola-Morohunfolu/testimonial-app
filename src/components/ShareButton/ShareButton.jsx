import classes from './ShareButton.module.css';
import { Button } from '@mui/material';

const ShareButton = ({ color, onClick }) => {
	return (
		<Button className={classes.ShareButton} sx={{ color: color }} onClick={onClick}>
			Share your story
		</Button>
	);
};

export default ShareButton;
