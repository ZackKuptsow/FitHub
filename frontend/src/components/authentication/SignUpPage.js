import React from 'react';
import { useHistory } from 'react-router-dom';

//TODO: finish sign up page

const SignUpPage = () => {
	const history = useHistory();

	const handleClick = () => {
		history.push('/');
	};

	return (
		<div>
			<h1>Sign Up Page</h1>
			<button onClick={handleClick}>Sign Up</button>
		</div>
	);
};

export default SignUpPage;
