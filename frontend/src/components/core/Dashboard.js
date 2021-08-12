import React from 'react';
import axiosAPI from '../api/axiosApi';

const Dashboard = () => {
	const handleClick = async () => {
		const response = await axiosAPI.get('protected/');
		alert(JSON.stringify(response.data));
	};

	return (
		<div>
			<h1>Dashboard</h1>
			<p>you are logged in</p>
			<button onClick={handleClick}>GET protected</button>
		</div>
	);
};

export default Dashboard;
