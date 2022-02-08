import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(githubReducer, initialState);

	//Set loading
	const setLoading = () => {
		dispatch({
			type: 'SET_LOADING',
		});
	};

	// Search users
	const searchUsers = async text => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);
		const { items } = await response.json();
		dispatch({ type: 'GET_USERS', payload: items });
	};

	// Clear Users Result
	const clearUsers = () => {
		dispatch({ type: 'CLEAR_USERS' });
	};

	// Get Single User Profile
	const getUserProfile = async login => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users/${login}}`, {
			headers: {
				Authorization: `token ${GITHUB_TOKEN}`,
			},
		});
		if (response.status === 404) {
			window.location = './notfound';
		} else {
			const data = await response.json();
			dispatch({ type: 'GET_USER_PROFILE', payload: data });
		}
	};

	// Get User Repos
	const getUserRepos = async login => {
		setLoading();
		const response = await fetch(`${GITHUB_URL}/users/${login}/repos`);
		const data = await response.json();
		dispatch({ type: 'GET_REPOS', payload: data });
	};

	return (
		<GithubContext.Provider
			value={{
				...state,
				searchUsers,
				clearUsers,
				getUserProfile,
				getUserRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
