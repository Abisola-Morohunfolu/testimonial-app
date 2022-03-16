import { Container, Box } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatchContext } from '../../context/context';
import classes from './ShareYourStory.module.css';

const ShareYourStory = () => {
	const { register, handleSubmit, reset } = useForm();
	const [imageFile, setImageFile] = useState('');
	const dispatch = useDispatchContext();

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const uploadFile = async (event) => {
		const file = event.target.files[0];
		const base64 = await convertBase64(file);
		setImageFile(base64);
	};

	const submitForm = (data) => {
		const formData = data;
		formData.image = imageFile;
		dispatch({
			type: 'ADD_TESTIMONIAL',
			payload: formData,
		});
		reset();
	};
	return (
		<Container sx={{ justifyContent: 'center' }}>
			<form onSubmit={handleSubmit(submitForm)}>
				<Box sx={{ marginBottom: '2rem' }} className={classes.InputField}>
					{/* <InputLabel htmlFor="upload-file">Upload Image</InputLabel> */}
					<label htmlFor="firstName" className={classes.Label}>
						Upload an Image
					</label>
					<input
						id="upload-file"
						type="file"
						onChange={uploadFile}
						required
						className={classes.Input}
					/>
				</Box>
				<Box sx={{ display: 'flex', marginBottom: '2rem' }}>
					<Box className={classes.InputField} sx={{ marginRight: '2rem' }}>
						<label htmlFor="firstName" className={classes.Label}>
							First Name
						</label>
						<input
							className={classes.Input}
							required
							id="firstName"
							label="First Name"
							type="text"
							{...register('firstName')}
						/>
					</Box>
					<Box className={classes.InputField}>
						<label htmlFor="lastName" className={classes.Label}>
							Last Name
						</label>
						<input
							className={classes.Input}
							required
							id="lastName"
							label="Last Name"
							type="text"
							{...register('lastName')}
						/>
					</Box>
				</Box>

				<Box sx={{ marginBottom: '2rem' }} className={classes.InputField}>
					<label htmlFor="story" className={classes.Label}>
						Share Your Story
					</label>
					<textarea id="story" {...register('story')} required className={classes.TextArea} />
				</Box>

				<Box sx={{ display: 'flex', marginBottom: '2rem' }}>
					<label htmlFor="category" className={classes.Label}>
						What did you interact with Vasiti as?
					</label>
					<Box sx={{ display: 'flex' }}>
						<div>
							<input
								type="radio"
								name="category"
								id="customer"
								value="customer"
								{...register('category')}
								required
							/>
							<label htmlFor="customer">Customer</label>
						</div>
						<div>
							<input
								type="radio"
								name="category"
								id="vendor"
								value="vendor"
								{...register('category')}
								required
							/>
							<label htmlFor="vendor">Vendor</label>
						</div>
					</Box>
				</Box>
				<Box className={classes.InputField}>
					<label htmlFor="location" className={classes.Label}>
						City or Higher Institution (for Students)
					</label>
					<input
						required
						id="outlined"
						type="text"
						{...register('location')}
						className={classes.Input}
					/>
				</Box>
				<button type="submit" className={classes.Button}>
					Share Your Story
				</button>
			</form>
		</Container>
	);
};

export default ShareYourStory;
