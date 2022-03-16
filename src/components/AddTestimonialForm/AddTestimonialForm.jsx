import classes from './AddTestimonialForm.module.css';
import { Modal } from '@mui/material';

const AddTestimonialForm = ({ showModal, hideModal }) => {
	return (
		<Modal
			aria-labelledby="add-testimonial"
			aria-describedby="add testimonial"
			open={showModal}
			onClose={hideModal}
			keepMounted
			className={classes.Modal}
		>
			<h1 id="modal-title">Share Your Story</h1>
		</Modal>
	);
};

export default AddTestimonialForm;
