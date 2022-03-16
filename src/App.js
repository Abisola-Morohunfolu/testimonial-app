import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import AddTestimonialForm from './components/AddTestimonialForm/AddTestimonialForm';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import TestimonialCard from './components/TestimonialCard/TestimonialCard';
import TestimonialContainer from './components/TestimonialContainer/TestimonialContainer';
import TestimonialFeature from './components/TestimonialFeature/TestimonialFeature';
import { useStateContext } from './context/context';
import ThemeProviderContext from './theme/ThemeProvider';

function App() {
	const state = useStateContext();
	const [formModal, setFormModal] = useState(false);
	return (
		<>
			<ThemeProviderContext>
				<CssBaseline />
				<Navbar />
				<main>
					<Header />
					<TestimonialFeature
						clicked={() => setFormModal(true)}
						imagePosition="bottom"
						bgType="dark"
						category="customer"
						image="https://res.cloudinary.com/abisola/image/upload/v1647430772/black-beautiful-ladies-smiling_1_rccqni.png"
						name="Oby’s Experience"
						testimonial="I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!"
					/>
					<TestimonialContainer>
						{state.customerTestimonials.map((testimonial, index) => (
							<TestimonialCard
								image={testimonial.image}
								name={testimonial.name}
								key={testimonial.name + index}
								category={testimonial.category}
								testimonial={testimonial.testimonial}
							/>
						))}
					</TestimonialContainer>
					<AddTestimonialForm showModal={formModal} hideModal={() => setFormModal(false)} />
				</main>
			</ThemeProviderContext>
		</>
	);
}

export default App;
