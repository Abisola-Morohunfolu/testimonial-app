import * as actionTypes from '../actions/actionTypes';
import { allCustomerData, allVendorData } from '../utils/SampleData';

// IMPORTANT!!!!!!!!!!!!!!!!!!!
// TO CHECKOUT FIELD IS FOR BETTER UX, IF TO CHECKOUT IS MARKED TRUE BEFORE LOGGING IN
// USER IS REDIRECTED TO CHECKOUT AFTER LOGGING IN

export const initialState = {
	vendorTestimonials: [...allVendorData],
	customerTestimonials: [...allCustomerData],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TESTIMONIAL':
			return state;

		default:
			return state;
	}
};
