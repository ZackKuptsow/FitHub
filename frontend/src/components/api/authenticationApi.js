import axiosAPI, { setNewHeaders } from './axiosApi';

export const signUp = async (email, username, password) => {
	const response = await axiosAPI.post('users/create/', {
		email,
		username,
		password
	});
	localStorage.setItem('user', response.data);
	return response;
};

export const obtainToken = async (username, password) => {
	const response = await axiosAPI.post('token/obtain/', {
		username,
		password
	});
	setNewHeaders(response);
	return response;
};

export const refreshToken = async refresh => {
	const response = await axiosAPI.post('token/refresh/', {
		refresh
	});
	setNewHeaders(response);
	return response;
};

// eslint-disable-next-line
export const logout = async accessToken => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('refresh_token');
	// TODO: invalidate token on backend
};

export const isAuthenticated = () => {
	const token = localStorage.getItem('access_token');
	return !!token;
};
