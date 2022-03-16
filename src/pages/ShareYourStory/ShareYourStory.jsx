import { Container, TextField, Box, FormControl, Input } from '@mui/material';
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
		<Container>
			<form onSubmit={handleSubmit(submitForm)}>
				<Box sx={{ marginBottom: '2rem' }}>
					{/* <InputLabel htmlFor="upload-file">Upload Image</InputLabel> */}
					<input id="upload-file" type="file" onChange={uploadFile} required />
				</Box>
				<Box>
					<Box className={classes.InputField} sx={{ marginRight: '2rem' }}>
						<label htmlFor="first-name" className={classes.Label}>
							First Name
						</label>
						<input
							className={classes.Input}
							required
							id="first-name"
							label="First Name"
							type="text"
							{...register('firstName')}
						/>
					</Box>
					<Box>
						<label htmlFor="last-name">Last Name</label>
						<input required id="outlined" label="Last Name" type="text" {...register('lastName')} />
					</Box>
				</Box>

				<Box sx={{ marginBottom: '2rem' }}>
					<h6>Share Your Story</h6>
					<textarea id="story" {...register('story')} required />
				</Box>

				<Box sx={{ display: 'flex' }}>
					<label htmlFor="category" style={{ color: '#888' }}>
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
				<Box>
					<h6>City or Higher Institution (for Students)</h6>
					<input required id="outlined" type="text" {...register('location')} />
				</Box>
				<button type="submit">Share Your Story</button>
			</form>
		</Container>
	);
};

export default ShareYourStory;
