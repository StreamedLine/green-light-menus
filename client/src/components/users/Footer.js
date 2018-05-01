import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.footer`
	position: fixed;
	bottom: 0;
	display: block;
	width: 100%;
  font-size: 0.8em;
  text-align: center;
  padding: 0.2em;
  border: 1px solid gray;
  background-color: #eee;
  color: #5e4545;
`;

export const FooterComponent = () => {
	return (
		<Footer>
			<p>Own a restaurant? <Link to="/register">Register Here</Link> or <Link to="/login">Login</Link> and add your allergy-friendly menu!</p>
		</Footer>
	)
}