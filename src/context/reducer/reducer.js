import * as actionTypes from '../actions/actionTypes';
import { allCustomerData, allVendorData } from '../utils/SampleData';

// IMPORTANT!!!!!!!!!!!!!!!!!!!
// TO CHECKOUT FIELD IS FOR BETTER UX, IF TO CHECKOUT IS MARKED TRUE BEFORE LOGGING IN
// USER IS REDIRECTED TO CHECKOUT AFTER LOGGING IN

export const initialState = {
	testimonials: [...allCustomerData],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TESTIMONIAL':
			const tempState = [...state.testimonials];
			const newTestimonial = {
				name: `${action.payload.firstName} ${action.payload.lastName}`,
				category: action.payload.category,
				image: action.payload.image,
				testimonial: action.payload.story,
				location: action.payload.location,
			};
			tempState.push(newTestimonial);
			return {
				testimonials: [...tempState],
			};

		default:
			return state;
	}
};
