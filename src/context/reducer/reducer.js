// import * as actionTypes from '../actions/actionTypes';
import { allCustomerData } from '../utils/SampleData';


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
