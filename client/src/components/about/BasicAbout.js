import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: block;
  text-align: left;
  padding: 1em 2em;
  background-color: #eee;
  color: black;
`;


const About = () => {
		return (
			<Div className="aboutPage">
			<h1>About Us</h1>
				<h3>What is Greenlight Menus?</h3>
				<p>Greenlight Menus exists to make life easier for people with common allergies.</p>
				<p>Greenlight Menus allows you, and restaurants, to easily document which foods are available and healthful, before you go out for dinner.</p>

				<h3>Which allergies can I search and sort by?</h3>
				<p>We currently organize the menus around the following allergies</p>
				<ul>
					<li>Peanuts</li>
					<li>Treenuts</li>
					<li>Soy</li>
					<li>Gluten</li>
				</ul>
			</Div>
		)
}

export default About